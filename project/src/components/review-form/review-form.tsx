import {useState, ChangeEvent, Fragment, FormEvent} from 'react';
import {MAX_PLACE_RATING} from '../../constants';
import {fetchReviewsAction, sendReviewAction} from '../../store/api-actions';
import {store} from '../../store/index';
import { MAX_REVIEW_LENGTH } from '../../constants';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm ({offerId}: ReviewFormProps):JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: ''
  });

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData({...formData, comment: value });
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({...formData, rating: +value});
  };

  const getRatingContent = () => {
    const ratingScale: number[] = Array.from({length: MAX_PLACE_RATING}, (_, i) => MAX_PLACE_RATING - i);
    return (
      <>
        {
          ratingScale.map((currentRating) => (
            <Fragment key={currentRating}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={currentRating}
                id={`${currentRating}-stars`}
                type="radio"
                checked={!!formData.rating}
              />
              <label
                htmlFor={`${currentRating}-stars`}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))
        }
      </>
    );
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    store.dispatch(sendReviewAction([formData, offerId]));
    setFormData({
      rating: 0,
      comment: ''
    });
    store.dispatch(fetchReviewsAction(offerId));
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
            Your review
      </label>
      <div onChange={handleRatingChange} className="reviews__rating-form form__rating">
        {
          getRatingContent()
        }
      </div>
      <textarea
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        maxLength={MAX_REVIEW_LENGTH}
        placeholder="Tell how was your stay, what you like and what can be improved"
        //defaultValue={formData.comment}
        value={formData.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
            your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.comment.length < 50 || formData.rating === 0}
        >
            Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;

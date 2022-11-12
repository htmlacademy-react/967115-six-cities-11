import {useState, ChangeEvent, Fragment} from 'react';
import {MAX_PLACE_RATING} from '../../constants';

function ReviewForm () {
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData({...formData, comment: value });
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setFormData({...formData, rating: value});
  };

  const getRatingContent = () => {
    const ratingScale: number[] = Array.from({length: MAX_PLACE_RATING}, (_, i) => i + 1);
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

  return (
    <form className="reviews__form form" action="#" method="post">
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
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={formData.comment}
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
          disabled
        >
            Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;

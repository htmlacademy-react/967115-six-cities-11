import {useState, ChangeEvent} from 'react';
import {MAX_PLACE_RATING, MIN_PLACE_RATING} from '../../constants';

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
    const ratingContent = [];
    for (let i = MAX_PLACE_RATING; i >= MIN_PLACE_RATING; i--) {
      ratingContent.push(
        <>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={i}
            id={`${i}-stars`}
            type="radio"
          />
          <label
            htmlFor={`${i}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </>
      );
    }
    return ratingContent;
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

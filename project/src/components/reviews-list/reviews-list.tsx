import Comment from '../comment/comment';
import ReviewForm from '../review-form/review-form';
import {store} from '../../store/index';
import {useAppSelector} from '../../hooks/index';
import {useEffect} from 'react';
import {fetchReviewsAction} from '../../store/api-actions';
import {AuthorizationStatuses} from '../../constants';
import {selectReviews} from '../../store/reviews/selectors';
import {selectAuthorizationStatus} from '../../store/user/selectors';

type ReviewListProps = {
  offerId: number;
}

function ReviewsList ({offerId}: ReviewListProps): JSX.Element {
  const reviews = useAppSelector(selectReviews);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  useEffect(() => {
    store.dispatch(fetchReviewsAction(offerId));
  },[offerId]);

  return (
    <>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Comment key={review.id} review={review}/>)
        }
      </ul>
      {
        authorizationStatus === AuthorizationStatuses.Auth && <ReviewForm offerId={offerId}/>
      }
    </>
  );
}

export default ReviewsList;

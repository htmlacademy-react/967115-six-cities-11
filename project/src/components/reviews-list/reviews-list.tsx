import Comment from '../comment/comment';
import ReviewForm from '../review-form/review-form';
import {store} from '../../store/index';
import {useAppSelector} from '../../hooks/index';
import {useEffect} from 'react';
import {fetchReviewsAction} from '../../store/api-actions';
import {AuthorizationStatuses} from '../../constants';

type ReviewListProps = {
  offerId: number;
}

function ReviewsList ({offerId}: ReviewListProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    store.dispatch(fetchReviewsAction(offerId));
  });

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

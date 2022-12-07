import Comment from '../comment/comment';
import ReviewForm from '../review-form/review-form';
import {store} from '../../store/index';
import {useAppSelector} from '../../hooks/index';
import {useEffect} from 'react';
import {fetchReviewsAction} from '../../store/api-actions';
import {AuthorizationStatuses} from '../../constants';

type ReviewListProps = {
  offerID: number;
}

function ReviewsList ({offerID}: ReviewListProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const AuthorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    store.dispatch(fetchReviewsAction(offerID));
  });

  return (
    <>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Comment key={review.id} review={review}/>)
        }
      </ul>
      {
        AuthorizationStatus === AuthorizationStatuses.Auth && <ReviewForm offerID={offerID}/>
      }
    </>
  );
}

export default ReviewsList;

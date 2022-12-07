import Comment from '../comment/comment';
import {Review} from '../../types/review';
import ReviewForm from '../review-form/review-form';

type ReviewListProps = {
  reviews: Review[];
  offerID: number;
}


function ReviewsList ({reviews, offerID}: ReviewListProps): JSX.Element {

  return (
    <>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Comment key={review.id} review={review}/>)
        }
      </ul>
      <ReviewForm offerID={offerID}/>
    </>
  );
}

export default ReviewsList;

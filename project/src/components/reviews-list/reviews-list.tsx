import Comment from '../comment/comment';
import {Review} from '../../types/review';

type ReviewListProps = {
  reviews: Review[];
}


function ReviewsList ({reviews}: ReviewListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => <Comment key={review.id} review={review}/>)
      }
    </ul>
  );
}

export default ReviewsList;

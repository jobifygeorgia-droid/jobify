import { reviewsData } from "@/components/Home/data/data";

import { Button, MultipleSlider } from "@/components/ui";
import { ReviewCard } from "@/components/layouts";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type ReviewsT = {};

const Reviews: React.FC<ReviewsT> = () => {
  return (
    <SectionContainer title="შეფასებები" className="relative">
      <MultipleSlider
        slidesPerView={3.5}
        slides={reviewsData.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      />

      <Button buttonType="text" className="w-max! absolute right-0 bottom-0">
        <span>ყველას ნახვა</span>
        <span>&rarr;</span>
      </Button>
    </SectionContainer>
  );
};

export default Reviews;

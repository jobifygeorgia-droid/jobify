import { reviewsData } from "@/data/data";

import { MultipleSlider, ViewAllButton } from "@/components/ui";
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

      <ViewAllButton href="/" className="absolute z-[9] right-0 bottom-0" />
    </SectionContainer>
  );
};

export default Reviews;

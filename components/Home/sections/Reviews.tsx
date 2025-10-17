import { reviewsData } from "@/data/data";

import { ReviewCard } from "@/components/layouts";
import { SectionContainer } from "@/components/Home/ui";
import { MultipleSlider, ViewAllButton } from "@/components/ui";

type ReviewsT = {};

const Reviews: React.FC<ReviewsT> = () => {
  return (
    <SectionContainer title="შეფასებები" className="relative">
      <MultipleSlider
        breakpoints={{
          220: { slidesPerView: 3.5, slidesPerGroup: 3.5, spaceBetween: 0 },
        }}
        slides={reviewsData.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      />

      <ViewAllButton href="/" className="absolute z-[9] right-0 bottom-0" />
    </SectionContainer>
  );
};

export default Reviews;

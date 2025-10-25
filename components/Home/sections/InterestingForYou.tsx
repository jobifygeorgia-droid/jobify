import { SectionContainer, InterestingForYouBlock } from "@/components/Home/ui";

type InterestingForYouT = {};

const InterestingForYou: React.FC<InterestingForYouT> = () => {
  return (
    <SectionContainer title="შენთვის საინტერესო">
      <div className="mt-6 grid grid-cols-7 grid-rows-[160px_160px] gap-4">
        <InterestingForYouBlock
          title="ახალი ამბები"
          bgURL="/interesting-for-you-news.png"
        />

        <InterestingForYouBlock
          title="სტატიები"
          bgURL="/interesting-for-you-articles.png"
        />

        <InterestingForYouBlock
          title="ივენთები"
          bgURL="/interesting-for-you-events.png"
        />

        <InterestingForYouBlock
          title="ბლოგი"
          bgURL="/interesting-for-you-blog.png"
        />

        <InterestingForYouBlock
          title="ფორუმი"
          bgURL="/interesting-for-you-forum.png"
        />
      </div>
    </SectionContainer>
  );
};

export default InterestingForYou;

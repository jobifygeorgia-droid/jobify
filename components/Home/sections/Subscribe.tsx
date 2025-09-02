import { Button } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type SubscribeT = {};

const Subscribe: React.FC<SubscribeT> = () => {
  return (
    <SectionContainer>
      <div className="flex items-center p-12 bg-blue rounded-3xl gap-24">
        <div className="flex-1 text-white font-semibold text-2xl leading-9">
          <p>
            არ გამოგრჩეს სიახლეები და საინტერესო შეთავაზებები - დაგვიტოვე მეილი
          </p>
        </div>
        <div className="flex-1">
          <div className="bg-white w-full rounded-full px-6 py-3 flex items-center">
            <input
              type="text"
              placeholder="Enter your email address here..."
              className="w-full outline-none text-lg"
            />
            <div className="border-l-4 border-light-grey-hover pl-8">
              <Button className="">გამოწერა</Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Subscribe;

import { Button } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type SubscribeT = {};

const Subscribe: React.FC<SubscribeT> = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col tablet:flex-row items-center gap-4 laptop:gap-24 px-3 py-5 laptop:p-12 bg-blue rounded-xl laptop:rounded-3xl">
        <div className="flex-1 text-white font-semibold text-sm tablet:text-base-sm laptop:text-2xl laptop:leading-9 tablet:pl-6 laptop:pl-0">
          <p>
            არ გამოგრჩეს სიახლეები და საინტერესო შეთავაზებები - დაგვიტოვე მეილი
          </p>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-white w-full rounded-full py-[7px] px-4 laptop:py-3 laptop:px-6 flex items-center">
            <input
              type="text"
              placeholder="შეიყვანეთ ელ.ფოსტა..."
              className="w-full outline-none text-sm laptop:text-base-sm"
            />

            <div className="border-l-4 border-light-grey-hover pl-6 laptop:pl-8">
              <Button
                buttonType="primary"
                rounded="full"
                className="px-4! py-2! text-sm laptop:text-base"
              >
                გამოწერა
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Subscribe;

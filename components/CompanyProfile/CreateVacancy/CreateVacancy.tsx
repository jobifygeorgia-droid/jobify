"use client";

import Image from "next/image";

import { TipTapProvider } from "@/providers";

import { Chip, Button } from "@/components/ui";
import { Label, TextEditor, TextField } from "@/components/layouts/Form";

type CreateVacancyT = {};

const CreateVacancy: React.FC<CreateVacancyT> = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-[80vh] my-6 flex items-stretch overflow-hidden">
      <div className="flex-1 h-full">
        <figure className="relative h-full w-full">
          <Image
            src="/typing-machine.png"
            alt="create cv"
            fill
            className="object-cover object-[0px_-150px]"
          />
        </figure>
      </div>

      <div className="flex-1 pt-6 pb-2">
        <form className="w-[600px] px-10 pt-4 pb-0  mx-auto flex flex-col gap-6 h-full overflow-y-auto">
          <TextField label="პოზიციის დასახელება" labelPosition="out" />

          <TipTapProvider readonly={false}>
            <TextEditor label="სამუშაოს აღწერა" height="200px" />
          </TipTapProvider>

          <TipTapProvider readonly={false}>
            <TextEditor label="საკვალიფიკაციო მოთხოვნები" height="200px" />
          </TipTapProvider>

          <TipTapProvider readonly={false}>
            <TextEditor label="კომპანიის უპირატესობები" height="200px" />
          </TipTapProvider>

          <div className="flex flex-col gap-2">
            <Label label="ანაზღაურება" labelPosition="out" />

            <div className="flex gap-5 w-full order-1">
              <TextField
                label="დან"
                labelPosition="out"
                containerClassName="flex-1"
              />
              <TextField
                label="მდე"
                labelPosition="out"
                containerClassName="flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Label label="ვაკანსიის ტიპი" labelPosition="out" />

            <div className="flex gap-5 w-full order-1">
              <Chip type="secondary" isActive={true} onClick={() => {}}>
                ახალი
              </Chip>

              <Chip type="secondary" isActive={false} onClick={() => {}}>
                განხილული
              </Chip>

              <Chip type="secondary" isActive={false} onClick={() => {}}>
                ინტერვიუს ეტაპზე
              </Chip>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Label label="განცხადების ტიპი" labelPosition="out" />

            <div className="flex gap-5 w-full order-1">
              <Chip type="secondary" isActive={true} onClick={() => {}}>
                პრემიუმი
              </Chip>

              <Chip type="secondary" isActive={false} onClick={() => {}}>
                სტანდარტული
              </Chip>
            </div>
          </div>

          <TextField label="მდებარეობა" labelPosition="out" />

          <Button buttonType="primary">გამოქვეყნება</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateVacancy;

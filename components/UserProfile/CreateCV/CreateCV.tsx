"use client";

import CVProvider from "./CVProvider";
import { Form, CVView, CVViewWrapper } from "./ui";

type CreateCVT = {};

const CreateCV: React.FC<CreateCVT> = () => {
  return (
    <CVProvider>
      <div className="flex flex-col laptop:flex-row items-stretch gap-10 h-full py-7">
        <Form />

        <CVViewWrapper>
          <CVView />
        </CVViewWrapper>
      </div>
    </CVProvider>
  );
};

export default CreateCV;

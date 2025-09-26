"use client";

import CVProvider from "./CVProvider";
import CVView from "./CVView";
import Form from "./Form";

type CreateCVT = {};

const CreateCV: React.FC<CreateCVT> = () => {
  return (
    <CVProvider>
      <div className="flex items-stretch gap-10 h-full py-7">
        <Form />
        <CVView />
      </div>
    </CVProvider>
  );
};

export default CreateCV;

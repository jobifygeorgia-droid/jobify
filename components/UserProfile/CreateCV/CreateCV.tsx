"use client";

import Form from "./Form";
import CVView from "./CVView";
import CVProvider from "./CVProvider";

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

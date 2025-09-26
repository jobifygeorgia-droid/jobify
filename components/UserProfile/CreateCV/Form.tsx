type FormT = {};

import { FormHeader } from "./ui";
import * as Groups from "./groups";

const Form: React.FC<FormT> = () => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <FormHeader />

      <div className="flex flex-col gap-4">
        <Groups.PersonalDetails />

        <Groups.AboutMe />

        <Groups.WorkingExperience />

        <Groups.Education />

        <Groups.Skills />

        <Groups.ForeignLanguages />

        <Groups.Certificates />
      </div>
    </div>
  );
};

export default Form;

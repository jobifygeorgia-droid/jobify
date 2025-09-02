"use client";

import classnames from "classnames";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Button from "@/components/ui/Button";

const GoBackButton: React.FC = () => {
  const router = useRouter();
  const [candidateURL, setCandidateURL] = useState("");

  const onGoBack = () => router.push(candidateURL);

  useEffect(() => {
    const previousRoute = localStorage.getItem("previousRoute");

    if (!previousRoute) return;

    setCandidateURL(previousRoute);
  }, []);

  if (!candidateURL) return null;

  return (
    <Button
      className={classnames(
        "pointer-events-none opacity-0 scale-[90%] transition-opacity transition-transform duration-100 ease-out",
        {
          "pointer-events-auto! opacity-100 scale-[100%]": candidateURL !== "",
        }
      )}
      rounded="base"
      onClick={onGoBack}
    >
      უკან დაბრუნება
    </Button>
  );
};

export default GoBackButton;

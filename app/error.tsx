"use client";

import { Container } from "@/components/ui";

type ErrorT = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<ErrorT> = ({ error }) => {
  return (
    <Container>
      <div className="flex flex-col gap3">
        <p>error occurred</p>
        <p>{error.message}</p>
      </div>
    </Container>
  );
};

export default Error;

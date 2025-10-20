"use client";

import { Container } from "@/components/ui";

type ErrorT = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<ErrorT> = ({ error }) => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-3 px-4 laptop:px-20">
          <p className="text-lg font-bold text-red">Error Occurred:</p>
          <p className="font-semibold text-base-sm">{error.message}</p>
        </div>
      </div>
    </Container>
  );
};

export default Error;

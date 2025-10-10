"use client";

type ErrorT = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<ErrorT> = ({ error }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      error occurred
      <p>{error.message}</p>
    </div>
  );
};

export default Error;

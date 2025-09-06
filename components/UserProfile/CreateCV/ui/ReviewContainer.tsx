type ReviewContainerT = {
  children: React.ReactNode;
};

const ReviewContainer: React.FC<ReviewContainerT> = ({ children }) => {
  return (
    <div className="bg-blue-light py-3 px-5 rounded-3xl grid grid-cols-2 gap-4">
      {children}
    </div>
  );
};

export default ReviewContainer;

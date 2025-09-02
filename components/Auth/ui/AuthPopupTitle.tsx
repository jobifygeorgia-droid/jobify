type AuthPopupTitleT = {
  title: string;
};

const AuthPopupTitle: React.FC<AuthPopupTitleT> = ({ title }) => {
  return (
    <span className="font-bold text-base text-dark-grey-dark flex justify-center">
      {title}
    </span>
  );
};

export default AuthPopupTitle;

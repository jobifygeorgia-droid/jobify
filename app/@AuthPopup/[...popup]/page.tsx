import AuthPopup from "@/components/Auth/AuthPopup";

type defaultT = {
  searchParams: Promise<Record<string, string | undefined>>;
};

const page: React.FC<defaultT> = async ({ searchParams }) => {
  const params = await searchParams;

  return <AuthPopup authMode={params.auth} />;
};

export default page;

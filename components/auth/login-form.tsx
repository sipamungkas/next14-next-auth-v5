import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      backButtonLabel="Don't have an Account?"
      backButtonHref="/auth/register"
      showsocial
      headerLabel="Welcome back"
    >
      Login From
    </CardWrapper>
  );
};

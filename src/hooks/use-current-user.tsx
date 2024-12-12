import { useSession } from "next-auth/react";

const useCurrentUser = () => {
  const { data } = useSession();
  const userId = data?.user.id;
  return { userId };
};

export default useCurrentUser;

import { Access } from "payload/types";

export const isAdminOrSelf: Access = ({ req: { user }, id }) => {
  if (
    user?.role === "director" ||
    user?.role === "profesor" ||
    user?.id === id
  ) {
    return true;
  }
  return false;
};

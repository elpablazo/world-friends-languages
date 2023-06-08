import { Access } from "payload/types";

export const isAdminOrTeacherOrSelf: Access = ({ req: { user }, id }) => {
  if (
    user?.role === "director" ||
    user?.role === "profesor" ||
    user?.id === id
  ) {
    return true;
  }
  return false;
};

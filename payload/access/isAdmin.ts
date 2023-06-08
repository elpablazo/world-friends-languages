import { Access, FieldAccess } from "payload/types";

export const isAdmin: Access = ({ req: { user } }) => {
  if (user?.role === "director") {
    return true;
  }
  return false;
};

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  if (user?.role === "director") {
    return true;
  }
  return false;
};

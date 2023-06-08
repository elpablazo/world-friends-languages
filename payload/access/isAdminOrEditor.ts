import { Access, FieldAccess } from "payload/types";

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (user?.role === "director" || user?.role === "editor") {
    return true;
  }
  return false;
};

export const isAdminOrEditorFieldLevel: FieldAccess = ({ req: { user } }) => {
  if (user?.role === "director" || user?.role === "editor") {
    return true;
  }
  return false;
};

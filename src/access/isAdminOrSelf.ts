import { Access, FieldAccess } from "payload/types";

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (user) {
    if (user.roles.includes("admin")) {
      return true;
    }

    return {
      id: {
        equals: user.id,
      },
    };
  }

  return false;
};

export const isAdminOrSelfFieldLevel: FieldAccess = ({ req: { user }, id }) => {
  if (id === user?.id) {
    return true;
  }

  return false;
};

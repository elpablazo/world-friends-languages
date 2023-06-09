import axios from "axios";

interface PayloadResponse {
  message: string;
  doc: any;
}

const payloadApi = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

interface Doc {
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateUserResponseProps extends PayloadResponse {
  // doc property inherits fro the Doc interface,,but also adds the email property
  doc: Doc & {
    nombre: string;
    apellidos?: string;
    telefono?: string;
    role: "student";
    email: string;
  };
}

interface LoginUserResponseProps extends PayloadResponse {
  doc: Doc & {
    user: {
      id: string;
      nombre: string;
      apellidos?: string;
      role: "student";
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    token: string;
    exp: number;
  };
}

export const createUser = async (user: any) => {
  try {
    const { data }: { data: CreateUserResponseProps } = await payloadApi.post(
      "/students",
      user
    );

    console.log("usser creado:", data);
  } catch (error) {
    return error;
  }
};

export const updateOrder = async (order: any) => {
  const { data }: { data: PayloadResponse } = await payloadApi.patch(
    `/orders/${order.id}`,
    order
  );

  return data;
};

export default payloadApi;

import axios from "axios";
import jwtDecode from "jwt-decode";

export const createOrGetUser = async (response: any) => {
  const decodedCredential: {
    name: string;
    picture: string;
    email: string;
    sub: string;
  } = jwtDecode(response.credential);
  const { name, picture, email, sub } = decodedCredential;

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };
};

import axios from "axios";
import jwtDecode from "jwt-decode";

export const createOrGetUser = async (response: any, addUser: any) => {
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

  await axios.post("http://localhost:3000/api/auth", user);

  addUser(user);
};

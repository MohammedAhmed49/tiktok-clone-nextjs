import Image from "next/image";
import Link from "next/link";

import Logo from "../utils/tiktik-logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { createOrGetUser } from "../utils";

const Navbar = () => {
  const user = false;
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            layout="responsive"
            alt="Logo"
          />
        </div>
      </Link>
      {user ? (
        <div>Logged In</div>
      ) : (
        <GoogleLogin onSuccess={(response) => createOrGetUser(response)} />
      )}
    </div>
  );
};

export default Navbar;

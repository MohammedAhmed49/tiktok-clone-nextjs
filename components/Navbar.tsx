import Image from "next/image";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

import Logo from "../utils/tiktik-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  console.log(userProfile);

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
      {userProfile ? (
        <div className="flex gap-5 md:gap-10">
          <Link href="/upload">
            <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
              <IoMdAdd className="text-xl" />
              <span className="hidden md:block">Upload</span>
            </button>
          </Link>
          {userProfile.image && (
            <Link href="/">
              <>
                <Image
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  src={userProfile.image}
                  alt="Profile pic"
                />
              </>
            </Link>
          )}
          <button
            className="pr-4"
            type="button"
            onClick={() => {
              googleLogout();
              removeUser();
            }}
          >
            <AiOutlineLogout className="text-red-500" fontSize={21} />
          </button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(response) => createOrGetUser(response, addUser)}
        />
      )}
    </div>
  );
};

export default Navbar;

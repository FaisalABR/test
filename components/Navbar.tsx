import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full  py-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="wrap flex justify-between items-center px-10 md:px-24">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
        </Link>

        <Link href="/user">
          <div className="cursor-pointer px-2 py-2 border-[1px] border-orange-400 purple_gradient rounded-lg">
            <span>My Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

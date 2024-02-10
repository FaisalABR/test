import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between items-center px-10 md:px-24 py-5">
      <Image src="/logo.png" alt="logo" width={35} height={35} />
      <div className="bg-red-400 h-[25px] w-[25px] rounded-full cursor-pointer"></div>
    </div>
  );
};

export default Navbar;

import React from "react";

const UserCard = ({ name, status }: { name: string; status: string }) => {
  return (
    <div className="bg-orange-400 text-white flex justify-between items-center px-2 py-1  rounded-md ">
      <span className="line-clamp-1">{name}</span>
      {status === "active" ? (
        <span className="h-[20px] w-[20px] bg-green-400 border-[1px] border-white rounded-full"></span>
      ) : (
        <span className="h-[20px] w-[20px] bg-red-400 border-[1px] border-white rounded-full"></span>
      )}
    </div>
  );
};

export default UserCard;

import { UsersTypes } from "@/app/lib/definitions";
import React from "react";
import UserCard from "./UserCard";

const UserList = ({ data }: { data: UsersTypes[] }) => {
  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {data.map((item) => (
        <UserCard key={item.id} name={item.name} status={item.status} />
      ))}
    </div>
  );
};

export default UserList;

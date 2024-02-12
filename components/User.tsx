"use client";
import { getUsers } from "@/app/lib/api/users";
import React, { useState, useEffect } from "react";
import UserList from "./UserList";

const User = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [searchedUser, setSearchedUser] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUsers();
      setUsers(response);
    };

    fetchUser();
  }, []);

  const filteredQuery = (query: string) => {
    const regex = new RegExp(query, "i");
    return users.filter((item) => regex.test(item.name));
  };

  const handleSearch = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);

    setTimeout(() => {
      const filter = filteredQuery(target.value);
      setSearchedUser(filter);
    }, 500);
  };

  return (
    <div className="w-full my-3">
      <input
        type="text"
        className="w-full md:w-6/12 shadow-md rounded-lg px-2 py-1 outline-[0]"
        value={query}
        placeholder="Find others user"
        onChange={handleSearch}
        required
      />
      {query ? <UserList data={searchedUser} /> : <UserList data={users} />}
    </div>
  );
};

export default User;

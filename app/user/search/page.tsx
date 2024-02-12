import User from "@/components/User";
import React from "react";

const page = () => {
  return (
    <div className="w-full pt-20">
      <div className="wrap px-10 md:px-24">
        <h1 className="head_text purple_gradient">Search users</h1>
        <p className="desc my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          dolorem iusto! Cumque sequi mollitia magnam.
        </p>
        <User />
      </div>
    </div>
  );
};

export default page;

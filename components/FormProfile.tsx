"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUser } from "@/app/lib/api/users";
import { useRouter } from "next/navigation";
import { updateProfile } from "@/app/lib/action";

const FormProfile = () => {
  const [user, setUser] = useState({
    id: 0,
    email: "",
    gender: "",
    name: "",
    status: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(6262422);
      setUser(response);
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await updateProfile(user.id, user.name, user.gender, user.status);
      setUser({ ...user, name: "" });

      router.push("/user");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 py-3 bg-purple-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-lg"
    >
      <div className="flex flex-col justify-start my-5">
        <label htmlFor="name" className="text-semibold text-orange-400">
          Name
        </label>
        <input
          type="text"
          className="shadow-sm rounded-sm px-2 py-1 outline-[0]"
          name="name"
          value={user.name}
          placeholder="Enter your name..."
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-col justify-start my-5">
        <label htmlFor="email" className="text-semibold text-orange-400">
          Email
        </label>
        <input
          type="text"
          className="shadow-sm rounded-sm px-2 py-1 outline-[0]"
          name="email"
          value={user.email}
          placeholder="Enter your email..."
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          disabled
        />
      </div>
      <div className="flex flex-col justify-start my-5">
        <label htmlFor="gender" className="text-semibold text-orange-400">
          Gender
        </label>
        <select
          value={user.gender}
          name="gender"
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className=" flex gap-3 my-5">
        <label htmlFor="active" className="text-semibold text-green-400">
          Active
        </label>
        <input
          type="radio"
          id="active"
          name="status"
          value="active"
          checked={user.status === "active"}
          onChange={(e) => setUser({ ...user, status: e.target.value })}
        />
        <br />
        <label htmlFor="inactive" className="text-semibold text-red-400">
          Inactive
        </label>
        <input
          type="radio"
          id="inactive"
          name="status"
          value="inactive"
          checked={user.status === "inactive"}
          onChange={(e) => setUser({ ...user, status: e.target.value })}
        />
        <br />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleSubmit}
          className="px-3 py-2 transition bg-orange-400 font-bold text-white rounded-md cursor-pointer text-xs md:text-sm"
          disabled={submitting}
        >
          {submitting ? "Submit..." : "Submit"}
        </button>
        <Link href="/user">
          <button className="px-3 py-2 transition border-[1px] border-orange-400 font-bold text-orange-400 rounded-md cursor-pointer text-xs md:text-sm">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};

export default FormProfile;

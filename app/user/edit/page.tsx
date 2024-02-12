import FormProfile from "@/components/FormProfile";

const page = () => {
  return (
    <div className="w-full pt-20">
      <div className="wrap px-10 md:px-24">
        <h3 className="head_text purple_gradient">Edit Profile</h3>
        <FormProfile />
      </div>
    </div>
  );
};

export default page;

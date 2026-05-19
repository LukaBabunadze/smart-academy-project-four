import Logout from "./Logout";

export const dynamic = "force-dynamic";

const Page = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users/3", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await response.json();

    console.log("this is our user:", user);

    return (
      <div>
        <h1>Profile</h1>
        <p>{user.name?.firstname}</p>

        <Logout />
      </div>
    );
  } catch (error) {
    console.error(error);

    return <div>მოხდა შეცდომა!</div>;
  }
};

export default Page;

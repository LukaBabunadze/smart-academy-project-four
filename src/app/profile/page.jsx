const page = async () => {
  const response = await fetch("https://fakestoreapi.com/users/3");
  const user = await response.json();

  if (!user) {
    return <div>მოხდა შეცდომა!</div>;
  }

  return <div>Profile</div>;
};

export default page;

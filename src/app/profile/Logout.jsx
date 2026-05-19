"use client";

import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Logout;

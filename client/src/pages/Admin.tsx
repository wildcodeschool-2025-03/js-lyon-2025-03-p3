import { useEffect, useState } from "react";

function Admin() {
  const [isAdmin, setIsAdmin] = useState(Boolean);
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        fetch(`${baseURL}/api/auth`, {
          credentials: "include", // send the cookie to the server to verify the credentials
        })
          .then((res) => res.json())
          .then((data) => setIsAdmin(data.user.isAdmin));
      } catch (err) {
        setIsAdmin(false);
      }
    };

    checkAuth();
  }, []);
  console.info("isAdmin ?", isAdmin);
  return isAdmin ? <h2>Page Admin</h2> : "vous n'êtes pas admin";
}

export default Admin;

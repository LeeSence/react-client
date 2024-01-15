import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

function Logout() {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/logout", {
        ids: user.ids,
        subs: user.subs,
      });
      if (response.data.result_code === 1) {
        // 로그아웃 처리
      } else {
        console.log(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

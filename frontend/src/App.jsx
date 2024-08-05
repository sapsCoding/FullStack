import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user-data")
      .then((data) => setUserData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-600 w-full min-h-screen flex flex-col items-center text-white pt-12">
      <h1 className="text-5xl font-bold">User Data</h1>
      <h2 className="text-3xl font-semibold mt-5">
        Current Users : {userData.length}
      </h2>

      <div className={`${userData.length < 0 ? "hidden": ""} bg-slate-500 w-1/2 flex flex-col gap-4 items-center p-5 rounded mt-5`}>
        {userData.map((user, index) => {
          return (
            <div key={user.id} className="w-80 text-left bg-slate-600 p-4 rounded-sm ">
              <h4>Name: {user.name}</h4>
              <h4>Age: {user.age}</h4>
              <h4>Class : {user.class}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

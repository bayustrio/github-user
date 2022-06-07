import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ThemeReducer from "./Reducer/ThemeReducer";
import DarkButton from "./components/Toggle/DarkButton";
import Search from "./components/Search";
import axios from "axios";
import { IDataUser } from "./Type";
import InfoUser from "./components/InfoUser";

const App: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [data, setData] = useState<IDataUser>({} as IDataUser);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/octocat`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeReducer>
      <div className="w-full lg:px-[16rem] pt-[5rem] xl:px-[16rem] md:px-[7rem] sm:px-[5rem] px-2 min-h-[110vh] dark:bg-bgDark bg-bgLight">
        <div className="">
          <div className="flex justify-between items-center py-4">
            <h1 className="dark:text-white text-xl font-semibold">devfinder</h1>
            <DarkButton />
          </div>
          <Search
            loading={loading}
            setLoading={setLoading}
            setData={setData}
            user={user}
            setUser={setUser}
          />
          <InfoUser loading={loading} data={data} />
        </div>
      </div>
    </ThemeReducer>
  );
};

export default App;

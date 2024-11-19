import { createContext, useState } from "react";

export const DataContext = createContext({
  Getdata: () => {},
});

const DataProvider = ({ children }) => {
  const [fetching, setFetching] = useState(false);

  const GetData = () => {
    setFetching(true);

    fetch("https://localhost:8080/oxyTrack/oxygen")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFetching(false);
      });
  };

  return (
    <DataContext.Provider
      value={{
        GetData,
        fetching,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

import { useEffect, useState } from "react";
import Loading from "./components/loading screen/loading";
import Menu from "./components/Display/menu";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true),
      setTimeout(() => {
        setLoader(false);
      }, 100);
  }, []);
  return (
    <>
      {loader ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="m-5">
            <NavBar></NavBar>
            <Menu />
          </div>
        </>
      )}
    </>
  );
};

export default App;

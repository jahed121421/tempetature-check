import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

const Menu = () => {
  const [searcht, setSearcht] = useState("dhaka");
  const [temps, setTemps] = useState("");
  const [loading, setLoading] = useState(true);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searcht}&appid=30eab293a8e6753333146a7449cf3c73&units=metric`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTemps(data);
        setLoading(false);
      });
  }, [temps]);
  const search = (e) => {
    event.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearcht(search);
    console.log(search);
  };

  return (
    <div>
      {loading ? (
        <>
          <div className="flex w-screen h-96 justify-center items-center">
            <div className="loading loading-infinity loading-lg"></div>
          </div>
        </>
      ) : (
        <>
          <form
            onSubmit={search}
            className="w-screen flex justify-center rounded-2xl"
          >
            <input
              className="w-60 border mt-5 focus:outline-none p-2 rounded-none"
              placeholder="Serach Here"
              name="search"
              type="text"
            />
            <input
              className="btn btn-primary mt-5 rounded-none"
              type="submit"
              value="Serach"
            />
          </form>
          <SmallCard temps={temps} />
        </>
      )}
    </div>
  );
};

export default Menu;

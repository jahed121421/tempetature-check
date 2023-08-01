const SmallCard = ({ temps }) => {
  const { base, main, name, timezone, visibility, weather, wind, sys, coord } =
    temps;
  return (
    <div className=" w-60  border-2 p-3 mt-10 rounded-xl">
      <h1>Name: {name}</h1>
      <h1>Lon {coord.lon}</h1>
      <h1>Lat {coord.lat}</h1>
      <h1>Country {sys.country}</h1>
      <h1>Base {base}</h1>
      <h1>Temp {main.temp}° C</h1>
      <p>Time: {timezone}</p>
      <p>Wind Direction: {wind.speed} k/h</p>
      <img src={weather[0].icon} alt="" />
      <p>Weather: {weather[0].main}</p>
      <p>Visibility: {visibility}</p>
    </div>
  );
};

export default SmallCard;

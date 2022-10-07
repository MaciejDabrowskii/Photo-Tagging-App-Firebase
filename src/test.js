import React, { useEffect, useState } from "react";
import { firebaseMethods } from "./contexts/firebase-context";

function Test()
{
  const { signIn, fetchSelectedGameData, fetchData } = firebaseMethods();

  const [data, setdata] = useState();

  const zzz = async () =>
  {
    await fetchSelectedGameData("Game data", "Popculture")
      .then((res) => setdata(res));
  };

  useEffect(() =>
  {
    zzz();
  }, []);

  return (
    <>
      {data
        ? <div>{data.characters.map((el) => (<p>{el.name}</p>))}</div>
        : <p>loading</p>}
    </>
  );
}

export default Test;

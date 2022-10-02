/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import img from "./assets/random.jpg";
import ImageSection from "./modules/image-section/image-section";

function App()
{
  const [pickedCorrectly, setPickedCorrectly] = useState([]);

  const addCorrect = (name, coordinates) =>
  {
    if (!pickedCorrectly.some((pick) => pick.name === name))
    {
      console.log("alooo");
      return setPickedCorrectly((prevState) => ([...prevState, { name, coordinates }]));
    }
  };

  return (
    <div className="App">
      <ImageSection
        pickedCorrectly={pickedCorrectly}
        setPickedCorrectly={setPickedCorrectly}
        addCorrect={addCorrect}
      />
    </div>
  );
}

export default App;

// const image = useRef();

// const getCoordinates = (e) =>
// {
//   const bounds = image.current.getBoundingClientRect();

//   const { left } = bounds;

//   const { top } = bounds;

//   const x = e.pageX - left;

//   const y = e.pageY - top;

//   const cw = image.current.clientWidth;

//   const ch = image.current.clientHeight;

//   const iw = image.current.naturalWidth;

//   const ih = image.current.naturalHeight;

//   const px = Math.round((x / cw) * iw);

//   const py = Math.round((y / ch) * ih);

//   console.log({ x: px, y: py });
//   return { x: px, y: py };
// };

// const characters = {
//   stewie: {x:{start: 1210,end: 1280,},y:{start: 628,end: 708,},},

//   antman: {
//     x:
//           {
//             start: 490,
//             end: 555,
//           },
//     y:
//            {
//              start: 1236,
//              end: 1308,
//            },
//   },

//   judgedredd: {
//     x:
//             {
//               start: 852,
//               end: 923,
//             },
//     y:
//              {
//                start: 1068,
//                end: 1250,
//              },
//   },
// };

// const validateCoordinates = (selected, data) =>
// {
//   const { name, coordinates } = selected;

//   return !!(((
//     data[name].x.start <= coordinates.x && data[name].x.end >= coordinates.x
//   )
//   && (
//     data[name].y.start <= coordinates.x && data[name].y.end >= coordinates.y
//   )));
// };

// const selectedCharacter = (selectedName, coords) =>
// {
//   console.log("selectedCharacter", { name: selectedName, coordinates: coords });
//   return { name: selectedName, coordinates: coords };
// };

// // eslint-disable-next-line max-len
// const x = (e, coordinates, character) => console.log(validateCoordinates(character("stewie", coordinates(e)), characters));

// useEffect(() =>
// {
//   const aaa = image.current;

//   // eslint-disable-next-line max-len
//   aaa.addEventListener("click", (e) => x(e, getCoordinates, selectedCharacter));

//   return () =>
//   {
//     aaa.removeEventListener("click", x);
//   };
// }, []);

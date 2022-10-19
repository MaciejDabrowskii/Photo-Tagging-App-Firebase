/* eslint-disable max-len */
import React, {
  useEffect, useMemo, useRef, useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import markerImage from "../../../../../assets/marker.png";

function Marker({ pick, imageWidth, imageRatio })
{
  const { coordinates, name } = pick;

  const [textDivDimension, setTextDivDimension] = useState(
    { width: 0, height: 0 },
  );

  const [pinDivDimension, setPinDivDimension] = useState(
    { width: 0, height: 0 },
  );

  const [hover, setHover] = useState(false);

  const textMarker = useRef();

  const markerPin = useRef();

  useEffect(() =>
  {
    const textWidth = textMarker.current.offsetWidth;

    const textHeight = textMarker.current.offsetHeight;

    const pinWidth = markerPin.current.offsetWidth;

    const pinHeight = markerPin.current.offsetHeight;

    setTextDivDimension({ width: textWidth, height: textHeight });
    setPinDivDimension({ width: pinWidth, height: pinHeight });
  }, []);

  const isOverflowing = () => coordinates.x * imageRatio + textDivDimension.width + pinDivDimension.width > imageWidth;

  const isHovering = useMemo(() => hover, [hover]);

  const textStyleHover = () => (
    isOverflowing()
      ? { right: 0, transition: ".5s" }
      : { left: 0, transition: ".5s" }
  );

  const textStyle = () => (
    isOverflowing()
      ? { right: `-${textDivDimension.width}px` }
      : { left: `-${textDivDimension.width}px` }
  );

  return (
    <div
      className="marker-container"
      style={{
        left: `${coordinates.x * imageRatio - pinDivDimension.width / 2}px`,
        top: `${coordinates.y * imageRatio - pinDivDimension.height}px`,
      }}
    >
      <div ref={markerPin}>
        <img
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          src={markerImage}
          className="marker-pin fa-bounce"
        />
        <div
          className="text-div-wrapper"
          style={isOverflowing() ? {
            right: `${pinDivDimension.width}px`,
            width: `${textDivDimension.width}px`,
            display: "inline-block",
          } : {
            left: `${pinDivDimension.width}px`,
            width: `${textDivDimension.width}px`,
            display: "inline-block",
          }}
        >
          <div
            className="text-wrapper"
            style={{
              width: `${textDivDimension.width}px`,
              height: `${textDivDimension.height}px`,
            }}
          >
            <p
              className="marker-text"
              ref={textMarker}
              style={isHovering ? textStyleHover() : textStyle()}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marker;

import React from "react";
import "./tile.css";

const Tile = ({ tile: { id, title, icon }, onClick }) => {
  return (
    <div className="gsk-tile" onClick={onClick}>
      <img
        src={icon !== undefined ? icon : "/img/Small.png"}
        alt=""
        className="gsk-tile-image"
      ></img>
      <div>
        <h1 className="gsk-tile-header">{title}</h1>
      </div>
    </div>
  );
};

export default Tile;

import React from "react";
import { action } from "@storybook/addon-actions";

import Tile from "../components/tile";

export default {
  component: Tile,
  title: "Tile",
  excludeStories: /.*Data$/,
};

export const tileData = {
  id: "1",
  title: "Test Tile",
};

export const tilePictureData = {
  id: "2",
  title: "Test Tile",
  icon: "/img/logo512.png",
};

export const actionData = {
  onClick: action("onClick"),
};

export const Default = () => <Tile tile={{ ...tileData }} {...actionData} />;

export const Picture = () => (
  <Tile tile={{ ...tilePictureData }} {...actionData} />
);

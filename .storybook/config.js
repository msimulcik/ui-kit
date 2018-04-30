import React from "react";
import { configure, getStorybook, addDecorator } from "@storybook/react";
import Provider from "../src/Provider";

addDecorator(storyFn => <Provider>{storyFn()}</Provider>);

function loadStories() {
  require("../demo/src/index.js");
}

configure(loadStories, module);
export { getStorybook };

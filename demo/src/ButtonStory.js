import React from "react";
import { storiesOf } from "@storybook/react";
import { withTheme } from "react-fela";
import { Box, Text } from "base-styling-components";
import Button from "../../src/Button";
import { buildLightName } from "./ColorStory";

const stories = storiesOf("Buttons", module);

const ButtonsList = withTheme(({ theme }) => {
  const { colors } = theme;
  const primaryColors = Object.keys(theme.colors).filter(
    color => !color.includes("light")
  );

  return primaryColors.map(name => (
    <Box mr="50px">
      <Text color="#7B7B7B">{name}</Text>
      <Button color={colors[name]} data-sketch-symbol={name}>
        Button
      </Button>
      <Box mt="large">
        <Button
          color={colors[name]}
          hoverColor={colors[buildLightName(name)]}
          data-sketch-symbol={`${name}-transparent`}
          outline
        >
          Button
        </Button>
      </Box>
    </Box>
  ));
});

stories.add("buttons", () => (
  <Box m="large" display="flex">
    <ButtonsList />
  </Box>
));

stories.add("SuperButton", () => (
  <Box m="large" display="flex">
    <Button height={130} color={"red"} data-sketch-symbol={name}>
      Button
    </Button>
  </Box>
));

stories.add("SuperButton2", () => (
  <Box m="large" display="flex">
    <Button height={130} color={"blue"} data-sketch-symbol={name}>
      Button
    </Button>
  </Box>
));

export default stories;

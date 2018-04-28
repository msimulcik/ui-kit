import React from "react";
import { storiesOf } from "@storybook/react";
import { withTheme } from "react-fela";
import { Box, Text } from "base-styling-components";

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const buildLightName = name => `light${capitalizeFirstLetter(name)}`;

const Color = ({ primary, accent, name }) => (
  <Box
    mv="large"
    mh="50px"
    display="inline-flex"
    flexDirection="column"
    alignItems="center"
    minWidth={150}
  >
    <Box
      borderRadius="circle"
      backgroundColor={accent}
      data-sketch-color={accent}
      width={100}
      height={100}
      position="relative"
      mb="medium"
    >
      <Box
        position="absolute"
        borderRadius="circle"
        backgroundColor={primary}
        data-sketch-color={primary}
        width={50}
        height={50}
        left={25}
        top={25}
      />
    </Box>
    <Text fontWeight="bold">
      {name}: {primary}
    </Text>
    <Text color="#7B7B7B">
      {buildLightName(name)}: {accent}
    </Text>
  </Box>
);

const ColorsList = withTheme(({ theme }) => {
  const { colors } = theme;
  console.log("colors", colors);

  const primaryColors = Object.keys(theme.colors).filter(
    color => !color.includes("light")
  );

  return primaryColors.map(name => (
    <Color
      key={`color_${name}`}
      primary={colors[name]}
      accent={colors[buildLightName(name)]}
      name={name}
    />
  ));
});

const stories = storiesOf("Colors", module);

stories.add("colors", () => (
  <Box data-sketch-ignore-symbol display="flex" flexWrap="wrap">
    <ColorsList />
  </Box>
));

export default stories;

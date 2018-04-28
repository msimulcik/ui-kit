import React from "react";
import { storiesOf } from "@storybook/react";
import { withTheme } from "react-fela";
import { Box, Text } from "base-styling-components";

const TextWightNode = ({ weight }) => (
  <Box pb="large">
    <Text size={1} color="#A9A9A9">
      {weight}
    </Text>
    <Text fontWeight={weight} data-sketch-text={`Text ${weight}`}>
      Nothing can’t stop the honey badger when it’s hungry.
    </Text>
  </Box>
);

const TextSizeNode = withTheme(({ size, theme }) => (
  <Box pb="large">
    <Text size={1} color="#A9A9A9">
      Size {size} - ({theme.textScale[size]})
    </Text>
    <Text size={size} data-sketch-text={`Text size ${size}`}>
      Nothing can’t stop the honey badger when it’s hungry.
    </Text>
  </Box>
));

const stories = storiesOf("Typography", module);

stories.add("sizes", () => (
  <Box data-sketch-ignore-symbol m="large">
    <TextSizeNode size={5} />
    <TextSizeNode size={4} />
    <TextSizeNode size={3} />
    <TextSizeNode size={2} />
    <TextSizeNode size={1} />
    <TextSizeNode size={0} />
  </Box>
));

stories.add("weights", () => (
  <Box data-sketch-ignore-symbol m="large">
    <TextWightNode weight="bold" />
    <TextWightNode weight="regular" />
    <TextWightNode weight="light" />
  </Box>
));

export default stories;

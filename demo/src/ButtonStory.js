import React from "react";
import { storiesOf } from "@storybook/react";
import { Box, Text } from "base-styling-components";

const stories = storiesOf("Button", module);

stories.add("simple", () => (
  <Box backgroundColor="green" display="inline-block" p="small">
    <Text color="red">Hello Button</Text>
  </Box>
));

stories.add("greenColor", () => (
  <Box data-sketch-ignore-symbol>
    <Box
      backgroundColor="#2ECC71"
      data-sketch-color="#2ECC71"
      width={100}
      height={100}
    />
    <Box
      backgroundColor="#F8E71C"
      data-sketch-color="#F8E71C"
      width={100}
      height={100}
    />
  </Box>
));

stories.add("heading5", () => (
  <Box data-sketch-ignore-symbol>
    <Text size={5} data-sketch-text="Heading 5">
      Some heading 5 text
    </Text>
    <Text size={2} data-sketch-text="Heading 2">
      Some heading 2 text
    </Text>
  </Box>
));

export default stories;

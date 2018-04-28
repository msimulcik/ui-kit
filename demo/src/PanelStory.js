import React from "react";
import { storiesOf } from "@storybook/react";
import { withTheme } from "react-fela";
import { Box, Text } from "base-styling-components";
import Button from "../../src/Button";
import { buildLightName } from './ColorStory';

const stories = storiesOf("Panel", module);

stories.add("simple", () => (
  <Box m="large" display="flex">
    <Box width={1/2} background="#EFF0F2" minHeight={400} p="large" borderRadius="medium" data-sketch-symbol="Panel">
      <Text size={3}>Panel Title</Text>
      <Box display="flex" flexWrap="wrap">
        <Box background="#BFC4CB" width={6/10} minHeight={150} mr="medium"></Box>
        <Box pv="medium">
          <Box pb="small"><Button color="#2B5E98">Button long 1</Button></Box>
          <Box pb="small"><Button color="#319838">Button long 2</Button></Box>
          <Button color="#DE7700">Button long 3</Button>
        </Box>
      </Box>
    </Box>
  </Box>
));

export default stories;

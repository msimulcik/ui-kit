import React from "react";
import { Box, Text } from "base-styling-components";
import { withTheme } from "react-fela";

const Button = ({ color, hoverColor, children, outline, ...restProps }) => (
  <Box
    as="button"
    display="block"
    height={38}
    background={outline ? 'transparent' : color}
    borderRadius="small"
    style={{
      border: `1px solid ${color}`,
      ':hover': {
        backgroundColor: hoverColor,
      }
    }}
    {...restProps}
  >
    {typeof children === 'string' ? <Text size={1} ph="12px" pv="9px" color={outline ? color : 'white'}>
      {children}
    </Text> : children}
  </Box>
);

export default Button;

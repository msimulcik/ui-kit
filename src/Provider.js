import React, { Component } from "react";
import createRenderer from "fela/lib/createRenderer";
import { Provider as FelaProvider, ThemeProvider } from "react-fela";
import prefixAll from "inline-style-prefixer/static";
import fallbackValue from "fela-plugin-fallback-value";
import { defaultTheme } from "base-styling-components";

/**
 * Create styles renderer.
 */
function makeRenderer(): Function {
  const prefixerPlugin = styleObject => prefixAll(styleObject);

  /**
   * Static styles - normalize.
   */
  const staticStyles = `\
  ${""}\
  html {\
    -ms-text-size-adjust: 100%;\
    -webkit-text-size-adjust: 100%;\
  }\
  body {\
    margin: 0;\
  }\
  a {\
    -webkit-text-decoration-skip: objects;\
  }\
  button,\
  input {\
    overflow: visible;\
  }\
  button,\
  html [type="button"],\
  [type="reset"],\
  [type="submit"] {\
    -webkit-appearance: button;\
  }\
  button::-moz-focus-inner,\
  [type="button"]::-moz-focus-inner,\
  [type="reset"]::-moz-focus-inner,\
  [type="submit"]::-moz-focus-inner {\
    border-style: none;\
    padding: 0;\
  }\
  button:-moz-focusring,\
  [type="button"]:-moz-focusring,\
  [type="reset"]:-moz-focusring,\
  [type="submit"]:-moz-focusring {\
    outline: 1px dotted ButtonText;\
  }\
  textarea {\
    overflow: auto;\
  }\
  [type="number"]::-webkit-inner-spin-button,\
  [type="number"]::-webkit-outer-spin-button {\
    height: auto;\
  }\
  [type="search"] {\
    -webkit-appearance: textfield;\
    outline-offset: -2px;\
  }\
  [type="search"]::-webkit-search-cancel-button,\
  [type="search"]::-webkit-search-decoration {\
    -webkit-appearance: none;\
  }\
  ::-webkit-file-upload-button {\
    -webkit-appearance: button;\
    font: inherit;\
  }\
  html {\
    box-sizing: border-box;\
  }\
  *,\
  *::before,\
  *::after {\
    box-sizing: inherit;\
  }\
  html {\
    -webkit-tap-highlight-color: rgba(0,0,0,0);\
  }\
  [tabindex="-1"]:focus {\
    outline: none !important;\
  }\
  [role="button"] {\
    cursor: pointer;\
  }\
  a,\
  area,\
  button,\
  [role="button"],\
  input,\
  label,\
  select,\
  summary,\
  textarea {\
    touch-action: manipulation;\
  }\
  input[type="date"],\
  input[type="time"],\
  input[type="datetime-local"],\
  input[type="month"] {\
    -webkit-appearance: listbox;\
  }\
  textarea {\
    resize: none;\
  }\
  input[type="search"] {\
    -webkit-appearance: none;\
  }\
  ::placeholder {\
    color: #9a9a9a;\
    opacity: 1;\
  }\
  :-ms-input-placeholder {\
      color: #9a9a9a !important;\
  }\
  ::-ms-input-placeholder {\
      color: #9a9a9a;\
  }\
`;

  const renderer = createRenderer({
    plugins: [prefixerPlugin, fallbackValue()],
    selectorPrefix: "ui-kit-"
  });

  renderer.renderStatic(staticStyles);
  return renderer;
}

const renderer = makeRenderer();

const Provider = ({ theme, children }) => {
  return (
    <FelaProvider renderer={renderer}>
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        {children}
      </ThemeProvider>
    </FelaProvider>
  );
};

export default Provider;

import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

describe("Dummy test", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("always passes", () => {
    expect(true).toBe(true);
  });
});

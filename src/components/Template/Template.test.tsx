import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Template } from ".";

it("Renders the component", () => {
  const { container } = render(<Template />);
  expect(container.firstChild).not.toBeNull();
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Content } from ".";

it("Renders the component", () => {
  const { container } = render(<Content />);
  expect(container.firstChild).not.toBeNull();
});

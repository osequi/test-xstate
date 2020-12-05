import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Features } from ".";

it("Renders the component", () => {
  const { container } = render(<Features />);
  expect(container.firstChild).not.toBeNull();
});

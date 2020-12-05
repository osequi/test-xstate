import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Menu } from ".";

it("Renders the component", () => {
  const { container } = render(<Menu />);
  expect(container.firstChild).not.toBeNull();
});

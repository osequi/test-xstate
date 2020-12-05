import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Home } from ".";

it("Renders the component", () => {
  const { container } = render(<Home />);
  expect(container.firstChild).not.toBeNull();
});

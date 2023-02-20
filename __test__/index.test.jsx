// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Index page rendered properly", () => {
  it("Nav bar rendered correctly", () => {
    render(<Home />);

    const navBarEl = screen.getByTestId("nav_bar");
    expect(navBarEl).toBeInTheDocument();
  });
});

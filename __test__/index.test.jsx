// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Comp from "../src/Comp";
import Header from "../src/components/Header";
import "@testing-library/jest-dom";

describe("Comp is rendered", () => {
  it("It has an h6 with text Comp", () => {
    render(<Comp />);

    const _comp = screen.getByRole("heading");

    expect(_comp).toHaveTextContent("Comp");
  });
});

describe("Header is works as expected", () => {
  it("Header has the right text", () => {
    render(<Header />);

    const _header = screen.getByText(/Cool/i);

    expect(_header).toHaveTextContent("Cool");
  });

  it("Header is rendered", () => {
    render(<Header />);

    const __header = screen.getByRole("heading");
    expect(__header).toBeInTheDocument();
  });
});

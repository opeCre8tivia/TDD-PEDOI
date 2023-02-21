// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import CashewSection from "../src/components/CashewSection";
import "@testing-library/jest-dom";

describe("Index page rendered properly", () => {
  it("Nav bar rendered correctly", () => {
    render(<Home />);

    const navBarEl = screen.getByTestId("nav_bar");
    expect(navBarEl).toBeInTheDocument();
  });

  it("Cashew section is rendered properly", () => {
    render(<CashewSection />);

    const titleEl = screen.getByTestId("cashew_section_title");
    expect(titleEl).toBeInTheDocument();

    const textEl = screen.getByTitle("cashew_section_text");
    expect(textEl).toBeInTheDocument();

    const btnEl = screen.getByTestId("block_button");
    expect(btnEl).toBeInTheDocument();
  });
});

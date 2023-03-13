import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BlockButton from "../../src/components/BlockButton";

describe("Re usable button functions properly", () => {
  it("Button renders properly", () => {
    render(<BlockButton />);

    const btnEl = screen.getByTestId("block_button");

    expect(btnEl).toBeInTheDocument();
  });

  // it("Block button is clickable", () => {
  //   render(<BlockButton />);

  //   const btnEl = screen.getByTestId("block_button");
  //   expect(btnEl.addEventListener("click")).toReturn();
  // });
});

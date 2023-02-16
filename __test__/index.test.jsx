// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import Header from "@/src/components/Header";
import "@testing-library/jest-dom";

// describe("Home", () => {
//   it("renders a heading", () => {
//     render(<Home />);

//     const heading = screen.getByRole("heading", {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });

describe("Header is rendered", () => {
  it("Header has the right text", () => {
    render(<Header />);

    const _header = screen.getByRole("div");

    expect(_header).toHaveTextContent("Main App Test");
  });
});

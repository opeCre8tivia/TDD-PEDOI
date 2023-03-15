import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Logo from ".";

test("Logo rendered properly", () => {
  render(<Logo />);

  const companyNameEl = screen.getByAltText(/pedoi logo/i);
  expect(companyNameEl).toBeInTheDocument();
});

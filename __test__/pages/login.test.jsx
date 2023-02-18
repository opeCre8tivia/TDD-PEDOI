import { queryByPlaceholderText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "../../pages/login";

describe("Login page renders properly", () => {
  it("Has div with text Login", () => {
    render(<Login />);
    let _loginEl = screen.getByTestId("login");

    expect(_loginEl).toBeInTheDocument();
  });

  it("Email Input rendered", () => {
    render(<Login />);
    let _emailInputEl = screen.getByPlaceholderText(/Email/i);
    expect(_emailInputEl).toBeInTheDocument();
  });
  it("Password Input rendered", () => {
    render(<Login />);
    let _pwInputEl = screen.getByPlaceholderText(/Password/i);
    expect(_pwInputEl).toBeInTheDocument();
  });

  it("Both Inputs are Empty ", () => {
    render(<Login />);
    let _emailInputEl = screen.getByPlaceholderText(/Email/i);
    let _pwInputEl = screen.getByPlaceholderText(/Password/i);

    expect(_emailInputEl).toHaveValue("");
    expect(_pwInputEl).toHaveValue("");
  });

  it("Submit Button rendered", () => {
    render(<Login />);

    let _submitBtnEl = screen.getByRole("button");
    expect(_submitBtnEl).toBeInTheDocument();
  });

  it("Submit button is disabled when inputs are empty", () => {
    render(<Login />);

    let _submitBtnEl = screen.getByRole("button");
    expect(_submitBtnEl).toBeDisabled();
  });
});

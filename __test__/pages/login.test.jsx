import {
  fireEvent,
  queryByPlaceholderText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "../../pages/login";

jest.mock("axios", () => {
  return {
    __esModule: true,
    default: {
      get: () => ({
        data: { id: 1, name: "Emmanuel" },
      }),
    },
  };
});

test("Renders email input", () => {
  render(<Login />);

  const emailInputEl = screen.getByPlaceholderText(/enter email/i);
  expect(emailInputEl).toBeInTheDocument();
});
test("Renders password input", () => {
  render(<Login />);

  const passwordInputEl = screen.getByPlaceholderText(/enter password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("Renders button", () => {
  render(<Login />);

  const ButtonEl = screen.getByRole("button");
  expect(ButtonEl).toBeInTheDocument();
});

test("show Loading text when button clicked", () => {
  render(<Login />);

  const ButtonEl = screen.getByRole("button");
  const emailInputEl = screen.getByPlaceholderText(/enter email/i);
  const passwordInputEl = screen.getByPlaceholderText(/enter password/i);

  //fire events for all the 3 or 1
  const testValue = "toLoad";
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(ButtonEl);

  expect(ButtonEl).toHaveTextContent(/loading.../i);
});

test("Email input to be empty", () => {
  render(<Login />);

  const emailInputEl = screen.getByPlaceholderText(/enter email/i);
  expect(emailInputEl.value).toBe("");
});

test("Password input to be empty", () => {
  render(<Login />);

  const passwordInputEl = screen.getByPlaceholderText(/enter password/i);
  expect(passwordInputEl.value).toBe("");
});

test("Button should be disabled", () => {
  render(<Login />);

  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("Email value to change", () => {
  render(<Login />);
  const emailInputEl = screen.getByPlaceholderText(/enter email/i);
  const testValue = "test001";
  fireEvent.change(emailInputEl, { target: { value: testValue } });

  expect(emailInputEl.value).toBe(testValue);
});

test("Button not to be disabled when inputs change", () => {
  render(<Login />);
  const emailInputEl = screen.getByPlaceholderText(/enter email/i);
  const passwordInputEl = screen.getByPlaceholderText(/enter password/i);

  const testValue = "test";
  //simulate onchange events on both
  const buttonEl = screen.getByRole("button");
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("Loading text not rendered in button when not loading", async () => {
  const emailInputEl = screen.getByPlaceholderText(/enter email/i);
  const passwordInputEl = screen.getByPlaceholderText(/enter password/i);

  const testValue = "test";
  const buttonEl = screen.getByRole("button");
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  fireEvent.click(buttonEl);

  await waitFor(() => {
    expect(buttonEl).not.toHaveTextContent(/loading.../i);
  });
});

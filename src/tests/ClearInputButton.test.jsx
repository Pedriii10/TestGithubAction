import { render, screen } from "@testing-library/react";
import ClearInputButton from "../ClearInputButton";
import { describe, expect, it } from "vitest";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

const TestClearButton = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return <ClearInputButton onChange={setValue} value={value} />;
};

describe("ClearInputButton", () => {
  it("renders empty with no button", () => {
    render(<ClearInputButton />);

    const input = screen.queryByTestId("theInput");
    expect(input).toBeInTheDocument();

    const button = screen.queryByTestId("clearButton");
    expect(button).not.toBeInTheDocument();
  });

  it("renders with value and button", () => {
    render(<ClearInputButton value="1234" />);

    const input = screen.queryByTestId("theInput");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("1234");

    const button = screen.queryByTestId("clearButton");
    expect(button).toBeInTheDocument();
  });

  it("testing all functionalities", async () => {
    render(<TestClearButton />);

    const input = screen.queryByTestId("theInput");
    expect(input).toBeInTheDocument();

    let button = screen.queryByTestId("clearButton");
    expect(button).not.toBeInTheDocument();

    await userEvent.type(input, "1234");
    button = screen.queryByTestId("clearButton");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(input).toHaveValue("");
    button = screen.queryByTestId("clearButton");
    expect(button).not.toBeInTheDocument();

    await userEvent.type(input, "1234");
    button = screen.queryByTestId("clearButton");
    expect(button).toBeInTheDocument();

    await userEvent.clear(input);
    button = screen.queryByTestId("clearButton");
    expect(button).not.toBeInTheDocument();
  });
});

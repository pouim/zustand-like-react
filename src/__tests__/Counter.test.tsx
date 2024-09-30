import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders the initial count", () => {
    render(<App />);
    const countElement = screen.getByText(/count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test("increments the count when the Increment button is clicked", () => {
    render(<App />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test("decrements the count when the Decrement button is clicked", () => {
    render(<App />);
    const decrementButton = screen.getByText(/decrement/i);
    fireEvent.click(decrementButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("resets the count when the Reset button is clicked", () => {
    render(<App />);
    const incrementButton = screen.getByText(/increment/i);
    fireEvent.click(incrementButton);
    const resetButton = screen.getByText(/reset/i);
    fireEvent.click(resetButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});

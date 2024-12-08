import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";

test("renders dashboard heading", () => {
  render(<Dashboard />);
  const heading = screen.getByText(/Employment Agreements/i);
  expect(heading).toBeInTheDocument();
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateAgreement from "./CreateAgreement";
import { BrowserRouter } from "react-router-dom";

describe("CreateAgreement Component", () => {
  const renderComponent = () => {
    render(
      <BrowserRouter>
        <CreateAgreement />
      </BrowserRouter>
    );
  };

  test("renders form inputs", () => {
    renderComponent();

    // Check if form fields are rendered
    expect(screen.getByLabelText(/Employee Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Position/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Agreement Date/i)).toBeInTheDocument();
  });

  test("validates empty form fields", () => {
    renderComponent();

    const submitButton = screen.getByText(/Add Agreement/i);

    fireEvent.click(submitButton);

    // Expect form validation errors
    expect(screen.getByText(/Employee Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Department is required/i)).toBeInTheDocument();
  });
});

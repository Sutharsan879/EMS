import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { AgreementProvider } from "../context/AgreementContext";
import axios from "axios";

jest.mock("axios");

describe("Dashboard Component", () => {
  const mockAgreements = [
    {
      id: 1,
      employeeName: "John Doe",
      department: "HR",
      position: "Manager",
      agreementDate: "2024-01-01",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      department: "Engineering",
      position: "Developer",
      agreementDate: "2024-01-02",
    },
  ];

  test("renders agreements fetched from API", async () => {
    axios.get.mockResolvedValueOnce({ data: mockAgreements });

    render(
      <AgreementProvider>
        <Dashboard />
      </AgreementProvider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      // Verify agreements are displayed
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    });

    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/agreements");
  });
});

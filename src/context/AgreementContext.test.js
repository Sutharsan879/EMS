import React from "react";
import { renderHook, act } from "@testing-library/react";
import { AgreementProvider, useAgreementContext } from "./AgreementContext";
import axios from "axios";

jest.mock("axios");

describe("AgreementContext", () => {
  const wrapper = ({ children }) => <AgreementProvider>{children}</AgreementProvider>;

  test("loads agreements successfully", async () => {
    const mockAgreements = [
      { id: 1, employeeName: "John Doe", department: "HR", position: "Manager", agreementDate: "2024-01-01" },
    ];
    axios.get.mockResolvedValueOnce({ data: mockAgreements });

    const { result } = renderHook(() => useAgreementContext(), { wrapper });

    // Call loadAgreements
    await act(async () => {
      await result.current.loadAgreements();
    });

    // Verify state is updated
    expect(result.current.agreements).toEqual(mockAgreements);
    expect(result.current.loading).toBe(false);
  });
});

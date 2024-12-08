import agreementsReducer, { fetchAgreements } from "./agreementsSlice";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

jest.mock("axios");

describe("agreementsSlice", () => {
  const initialState = { agreements: [], loading: false, error: null };

  test("handles initial state", () => {
    const state = agreementsReducer(undefined, { type: "unknown" });
    expect(state).toEqual(initialState);
  });

  test("fetchAgreements thunk updates state on success", async () => {
    const mockAgreements = [
      { id: 1, employeeName: "John Doe", department: "HR", position: "Manager", agreementDate: "2024-01-01" },
    ];
    axios.get.mockResolvedValueOnce({ data: mockAgreements });

    const store = configureStore({
      reducer: { agreements: agreementsReducer },
    });

    await store.dispatch(fetchAgreements());

    const state = store.getState().agreements;

    expect(state.agreements).toEqual(mockAgreements);
    expect(state.loading).toBe(false);
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";

const mockSetGender = jest.fn();
const mockSetName = jest.fn();
const mockSetAgeRange = jest.fn();

jest.mock("../store/useStore", () => ({
  filterState: () => ({
    gender: "",
    name: "",
    ageRange: [20, 50],
    setGender: mockSetGender,
    setName: mockSetName,
    setAgeRange: mockSetAgeRange,
  }),
}));

describe("Filter Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should filter by gender", () => {
    render(<Filter />);

    const genderSelect = screen.getByLabelText("Filter by Gender");

    fireEvent.change(genderSelect, { target: { value: "male" } });

    expect(mockSetGender).toHaveBeenCalledWith("male");
  });

  test("should search by name", () => {
    render(<Filter />);

    const nameInput = screen.getByPlaceholderText("Search by name");

    fireEvent.change(nameInput, { target: { value: "John" } });

    expect(mockSetName).toHaveBeenCalledWith("John");
  });

  test("should change the minimum age", () => {
    render(<Filter />);

    const minAgeSlider = screen.getByLabelText("Minimum age: 20");

    fireEvent.change(minAgeSlider, { target: { value: "25" } });

    expect(mockSetAgeRange).toHaveBeenCalledWith([25, 50]);
  });

  test("should change the maximum age", () => {
    render(<Filter />);

    const maxAgeSlider = screen.getByLabelText("Maximum age: 50");

    fireEvent.change(maxAgeSlider, { target: { value: "60" } });

    expect(mockSetAgeRange).toHaveBeenCalledWith([20, 60]);
  });
});

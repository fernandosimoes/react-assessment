import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { getUsers } from "../services/users";
import Home from "./Home";

jest.mock("../services/users", () => ({
  getUsers: jest.fn(),
}));

jest.mock("../store/useStore", () => ({
  filterState: () => ({
    gender: "",
    name: "",
    ageRange: [0, 100],
  }),
}));

describe("Home Component", () => {
  const mockUsers = [
    {
      login: { uuid: "1" },
      name: { first: "John", last: "Doe" },
      email: "john.doe@example.com",
      gender: "male",
      dob: { age: 30 },
      picture: { large: "https://via.placeholder.com/150" },
    },
    {
      login: { uuid: "2" },
      name: { first: "Jane", last: "Smith" },
      email: "jane.smith@example.com",
      gender: "female",
      dob: { age: 25 },
      picture: { large: "https://via.placeholder.com/150" },
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render skeleton waiting for data", async () => {
    (getUsers as jest.Mock).mockResolvedValueOnce(mockUsers);

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getAllByRole("status")).toHaveLength(10);

    await waitFor(() => expect(getUsers).toHaveBeenCalled());
  });

  it("Should render home with success", async () => {
    (getUsers as jest.Mock).mockResolvedValueOnce(mockUsers);

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });
  });

  it("Should show an empty state message", async () => {
    (getUsers as jest.Mock).mockResolvedValueOnce([]);

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("No results found")).toBeInTheDocument();
    });
  });
});

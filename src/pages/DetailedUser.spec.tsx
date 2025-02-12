import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { getUserById } from "../services/users";
import DetailedUser from "./DetailedUser";

jest.mock("../services/users", () => ({
  getUserById: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate, // Retorna a função mockada
  useParams: () => ({ id: "1" }),
}));
describe("DetailedUser Component", () => {
  const mockUser = {
    login: { uuid: "1" },
    name: { first: "John", last: "Doe" },
    email: "john.doe@example.com",
    gender: "male",
    dob: { age: 30, date: "1993-06-15T10:00:00Z" },
    location: { city: "New York", state: "NY" },
    picture: { large: "https://via.placeholder.com/150" },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should render loading skeleton while data is loading", async () => {
    (getUserById as jest.Mock).mockResolvedValueOnce(mockUser);

    render(
      <BrowserRouter>
        <DetailedUser />
      </BrowserRouter>
    );

    expect(screen.getByRole("status")).toBeInTheDocument();

    await waitFor(() => expect(getUserById).toHaveBeenCalledWith("1"));
  });

  test("should render details from user", async () => {
    (getUserById as jest.Mock).mockResolvedValueOnce(mockUser);

    render(
      <BrowserRouter>
        <DetailedUser />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("30")).toBeInTheDocument();
      expect(screen.getByText("New York - NY")).toBeInTheDocument();
      expect(screen.getByText("6/15/1993")).toBeInTheDocument();
      expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    });
  });

  test("Should not broke when return is null", async () => {
    (getUserById as jest.Mock).mockResolvedValueOnce(null);

    render(
      <BrowserRouter>
        <DetailedUser />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("Age:")).not.toBeInTheDocument();
      expect(screen.queryByText("Location:")).not.toBeInTheDocument();
      expect(screen.queryByText("Birthday:")).not.toBeInTheDocument();
    });
  });

  test("should navigate back to list when click on back button", async () => {
    (getUserById as jest.Mock).mockResolvedValueOnce(mockUser);

    render(
      <BrowserRouter>
        <DetailedUser />
      </BrowserRouter>
    );

    await waitFor(() => {
      const backButton = screen.getByText("Back to List");
      fireEvent.click(backButton);
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});

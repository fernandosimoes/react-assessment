import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge Component", () => {
  test("Should render the default component'", () => {
    render(<Badge>Default Badge</Badge>);

    const badge = screen.getByRole("status");
    expect(badge).toHaveClass("text-xs");
    expect(badge).toHaveClass("bg-blue-100");
    expect(badge).toHaveClass("text-blue-800");
    expect(badge).not.toHaveClass("border");
    expect(badge).not.toHaveClass("rounded-full");
    expect(badge).toHaveClass("rounded-sm");
    expect(badge).toHaveTextContent("Default Badge");
  });

  test("should render small component", () => {
    render(<Badge size="sm">Small Badge</Badge>);

    const badge = screen.getByRole("status");
    expect(badge).toHaveClass("text-sm");
    expect(badge).toHaveTextContent("Small Badge");
  });

  test("should render a medium component", () => {
    render(<Badge size="md">Medium Badge</Badge>);

    const badge = screen.getByRole("status");
    expect(badge).toHaveClass("text-md");
    expect(badge).toHaveTextContent("Medium Badge");
  });

  test("should render a lg component", () => {
    render(<Badge size="lg">Large Badge</Badge>);

    const badge = screen.getByRole("status");
    expect(badge).toHaveClass("text-lg");
    expect(badge).toHaveTextContent("Large Badge");
  });

  test("should render a bordered variant", () => {
    render(<Badge variant="bordered">Bordered Badge</Badge>);

    const badge = screen.getByRole("status");
    expect(badge).toHaveClass("border");
    expect(badge).toHaveClass("border-blue-400");
    expect(badge).toHaveClass("dark:bg-gray-700");
    expect(badge).toHaveClass("dark:text-blue-400");
    expect(badge).toHaveTextContent("Bordered Badge");
  });

  test("should render a rounded component variant", () => {
    render(<Badge variant="rounded">Rounded Badge</Badge>);

    const badge = screen.getByRole("status");
    expect(badge).toHaveClass("rounded-full");
    expect(badge).toHaveTextContent("Rounded Badge");
  });

  test("should render the variant default", () => {
    render(<Badge variant="default">Default Badge Variant</Badge>);

    const badge = screen.getByRole("status");
    expect(badge).toHaveClass("rounded-sm");
    expect(badge).toHaveClass("bg-blue-100");
    expect(badge).toHaveClass("text-blue-800");
    expect(badge).toHaveTextContent("Default Badge Variant");
  });
});

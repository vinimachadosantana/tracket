import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the app name and tagline", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /tracket/i })).toBeInTheDocument();
    expect(screen.getByText(/track every job application/i)).toBeInTheDocument();
  });
});
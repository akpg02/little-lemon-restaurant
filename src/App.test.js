import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/reservations/MultiStep";
import ReviewForm from "./components/reservations/review";

const state = {
  date: "09/15/2023",
  occasion: "Birthday",
  diners: 2,
  firstname: "Jane",
  lastname: "Dpe",
  phone: "222-456-7890",
  email: "jane@gmail.com",
  times: [],
  time: "17:00",
};

describe("Reservation Form component", () => {
  it("'select a date' text appears on page", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Select a date");
    expect(headingElement).toBeInTheDocument();
  });

  it("submit reservation form - before submit clicked", async () => {
    render(<ReviewForm state={state} confirmed={false} />);
    const submitButton = screen.getByRole("button", { name: /confirm/i });
    fireEvent.click(submitButton);

    const successHeading = screen.getByText(/Review & Confirm/i);
    expect(successHeading).toBeInTheDocument();
  });
  it("submit reservation for - after submit clicked", () => {
    render(<ReviewForm state={state} confirmed={true} />);
    const successHeading = screen.getByText(/Success! Table Reserved/i);
    expect(successHeading).toBeInTheDocument();
  });
});

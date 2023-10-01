import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/reservations/MultiStep";
import ReviewForm from "./components/reservations/review";
import ContactInfo from "./components/reservations/contact-info";

const getDate = () => {
  const now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();

  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;

  return y + "-" + m + "-" + d;
};

const state = {
  date: "09/15/2023",
  occasion: "Birthday",
  diners: 2,
  firstname: "Jane",
  lastname: "Doe",
  phone: "222-456-7890",
  email: "jane@gmail.com",
  times: [],
  time: "17:00",
};

const invalidState = {
  date: "09/15/2023",
  occasion: "",
  diners: 2,
  firstname: "Jane",
  lastname: "Doe",
  phone: "",
  email: "jane@gmail.com",
  times: [],
  time: "17:00",
};

const localStorageMock = (function () {
  let store = {
    "2023-09-23": ["10:00", "11:00", "12:00"],
    "2023-09-24": ["14:00", "15:00", "16:00"],
  };

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value;
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Reservation Form component", () => {
  it("'select a date' text appears on page", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Select a date");
    expect(headingElement).toBeInTheDocument();
  });

  it("submit reservation form - before submit clicked", async () => {
    render(<ReviewForm state={state} confirmed={false} />);
    const submitButton = screen.getByRole("button", { name: /confirm/i });
    await (() => fireEvent.click(submitButton));

    const successHeading = screen.getByText(/Review & Confirm/i);
    expect(successHeading).toBeInTheDocument();
  });
  it("submit reservation form - after submit clicked", async () => {
    render(<ReviewForm state={state} confirmed={true} />);
    screen.getByRole("button", { name: /New Reservation/i });
  });
});

const setupDate = () => {
  const utils = render(<BookingForm />);
  // locating date select input element on the Booking form
  const input = screen.getByLabelText("date-input");
  return { input, ...utils };
};

const setupTime = () => {
  const utils = render(<BookingForm />);
  // locating time select input element on the Booking form
  const select = screen.getByLabelText("time-input");
  return { select, ...utils };
};

describe("Update times method", () => {
  it("does the date input automatically update to current day", () => {
    const { input } = setupDate();
    fireEvent.change(input, { target: { value: getDate() } });
    expect(input.value).toBe("2023-10-01");
  });

  it("should correctly set default option -- select a time", async () => {
    const { select } = setupTime();
    expect(select.value).toBe("default");
  });

  it("change the date", async () => {
    const { input } = setupDate();
    fireEvent.change(input, { target: { value: "2023-09-23" } });
    expect(input.value).toBe("2023-09-23");
  });
});

describe("Testing available times using localStorage", () => {
  it("write to localStorage", () => {
    localStorageMock.setItem("2023-09-30", ["09:00", "10:00", "11:00"]);
    const times = localStorageMock.getItem("2023-09-30");
    expect(times).toEqual(["09:00", "10:00", "11:00"]);
  });

  it("get available times -- read from localStorage", () => {
    const { input } = setupDate();
    fireEvent.change(input, { target: { value: "2023-09-23" } });
    const times = localStorageMock.getItem("2023-09-23");
    expect(times).toEqual(["10:00", "11:00", "12:00"]);
  });
});

describe("form validation", () => {
  it("verify that Next button is disabled when page is initially loaded on start page of the booking form", () => {
    render(<BookingForm state={invalidState} />);
    expect(screen.getByLabelText("next-button")).toBeDisabled();
  });
  it("button not disabled when in contact info form is valid", () => {
    // when contact page input is valid
    render(<ContactInfo state={state} />);
    expect(screen.getByLabelText("next-button")).not.toBeDisabled();
  });
  it("button disabled due to invalid input on contact info screen", () => {
    render(<ContactInfo state={invalidState} />);
    expect(screen.getByLabelText("next-button")).toBeDisabled();
  });
});

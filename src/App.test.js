import { render, screen } from "@testing-library/react";
import Form from "./components/Form";
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test("is click", () => {
//   render(<Article />);
//   const btn = screen.getByText("Book your pasta now");

//   fireEvent.click(btn);
//   expect(handleBook("pasta")).toBe("pasta");
// });

test("Render form labels", () => {
  render(<Form />);
  const email = screen.getByLabelText("Email");
  const Title = screen.getByLabelText("Title");
  const Name = screen.getByLabelText("Name");
  const email_placeholder = screen.getByPlaceholderText("johndoe@gmail.com");
  expect(email).toBeInTheDocument();
  expect(Title).toBeInTheDocument();
  expect(Name).toBeInTheDocument();
  expect(email_placeholder).toBeInTheDocument();
});

it("should have booking form header ", async () => {
  render(<Form />);
  const element = screen.getByRole("heading", { name: "Booking Form" });

  expect(element).toBeInTheDocument();
});

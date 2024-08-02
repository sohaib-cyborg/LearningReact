import { getByRole, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../src/pages/contactUs";

describe('Below are the test cases for ', () => {
it('should test whether the component renders', () => {
  render(<ContactUs/>);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

it('should load button', () => {
  render(<ContactUs/>);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

it('should return two input boxes', () => {
  render(<ContactUs/>);
  const inputBoxes = screen.getAllByRole('textbox');
  expect(inputBoxes.length).toBe(2);
});


  
})

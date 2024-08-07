import Body from "../src/components/Body";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Mock_Data from "../Mocks/ResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

test("should render body with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchButton = screen.getByRole("button", { name: "Search" });
  const SearchInput = screen.getByTestId("searchInput");

  fireEvent.change(SearchInput,{target:{value:"burger"}});
  fireEvent.click(searchButton);
   
  const resItems = screen.getAllByTestId("rescard");
  expect(resItems.length).toBe(1);
  expect(searchButton).toBeInTheDocument();
});

import { act, fireEvent, render,screen } from "@testing-library/react";
import MockData from "../Mocks/ResListData.json";
import Resdata from "../src/pages/RestaurantData";
import { Provider } from "react-redux";
import AppStore from "../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

test("should load the recommend menu and update the cart accordingly", async () => {
  await act(async () => {
    render(
    <BrowserRouter>    
    <Provider store={AppStore}>
    <Resdata/>
    </Provider>
    </BrowserRouter>
    );
    
  });
  
 const accordianView = screen.getByText("Recommended-(15)");
 fireEvent.click(accordianView);
 expect(screen.getAllByTestId("fooditems").length).toBe(15);

});

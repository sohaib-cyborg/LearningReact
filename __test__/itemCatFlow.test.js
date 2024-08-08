import { act, fireEvent, render,screen } from "@testing-library/react";
import MockData from "../Mocks/ResMenu.json";
import Resdata from "../src/pages/RestaurantData";
import { Provider } from "react-redux";
import AppStore from "../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import Cart from "../src/pages/cart";


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
    <Header/>
    <Resdata/>
    <Cart/>
    </Provider>
    </BrowserRouter>
    );
    
  });
  
 const accordianView = screen.getByText("Recommended-(14)");
 fireEvent.click(accordianView);
 expect(screen.getAllByTestId("fooditems").length).toBe(14);
 const adBtns = screen.getAllByRole("button",{name:"ADD"});
 expect(screen.getByText("Cart-(0)")).toBeInTheDocument();
 
 fireEvent.click(adBtns[0]);
 expect(screen.getByText("Cart-(1)")).toBeInTheDocument();
 
 expect(screen.getAllByTestId("fooditems").length).toBe(15);
 fireEvent.click(screen.getByRole("button",{name:"Clear"}));
 expect(screen.getAllByTestId("fooditems").length).toBe(14);

});
//the above test suit check the whole flow of the cart
// first it fetches the heading like recommended, then clicks on it to show the items and then clicks on the items to add it to the cart
//this is the last commit!
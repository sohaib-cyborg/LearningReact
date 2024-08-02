import AppStore from "../utils/appstore";
import Header from "../src/components/Header";
import "@testing-library/jest-dom";
import { Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render,screen } from "@testing-library/react";

test('should contain', () => {
 render(<BrowserRouter>  
  <Provider store={AppStore}>
    <Header/>
  </Provider>
  </BrowserRouter>);
  const LoginButton = screen.getByRole("button",{name:"login"});
  expect(LoginButton).toBeInTheDocument();
});

test('should show cart with length 0', () => {
    render(<BrowserRouter>  
        <Provider store={AppStore}>
          <Header/>
        </Provider>
        </BrowserRouter>);
        const cartItems = screen.getByText("Cart-(0)");
        expect(cartItems).toBeInTheDocument();
});

test('should show cart with an item', () => {
    render(<BrowserRouter>  
        <Provider store={AppStore}>
          <Header/>
        </Provider>
        </BrowserRouter>);
        const cartItems = screen.getByText(/Cart/);
        expect(cartItems).toBeInTheDocument();
});


test('should check for button click event turns to logout', () => {
  render(
    <BrowserRouter>
    <Provider store={AppStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
  );
  const butin=screen.getByRole("button",{name:"login"});
  fireEvent.click(butin);
  const loButin = screen.getByRole("button",{name:"logout"});
  expect(loButin).toBeInTheDocument();
})

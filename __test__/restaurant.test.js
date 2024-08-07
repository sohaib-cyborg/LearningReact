import "@testing-library/jest-dom";
import Rescard from "../src/components/Rescard";
import { screen,render } from "@testing-library/react";
import Mock_Data from "../Mocks/ResCard.json";

it('should render a rescard on to the browser', () => {
  render(<Rescard resData={Mock_Data}/>);
  const restaurant=screen.getByText("Chinese Wok");
  expect(restaurant).toBeInTheDocument();
})


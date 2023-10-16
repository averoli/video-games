import { getAllByTestId, render, screen } from "@testing-library/react";
import Bestsellers from "./bestsellers";

jest.mock("./Carrousel", () => () => (
  <div data-testing="carrousel">Carrousel</div>
));

describe("renders bestsellers", () => {
  it("", () => {
    const {getByTestId} = render(<Bestsellers />);
    const carrouselElement = getAllByTestId("carrousel");
    const gamesTableElement = getAllByTestId("games-table");
    
  })
});

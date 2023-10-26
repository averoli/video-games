import {render, screen} from "@testing-library/react";
import {expect, jest, test} from '@jest/globals';
import Bestsellers from "./bestsellers";

jest.mock("../components/carrousel/carrousel.component", () => () => {
  return <div data-testing="carrousel">Carrousel</div>;
});

describe("renders bestsellers", () => {
  test("Check for ids?", () => { // @note do we check ids?
    render(<Bestsellers/>);

    expect(screen.queryByTestId("carrousel")).toBeDefined()
    expect(screen.queryByTestId("games-table")).toBeDefined()
  })
});

import {render, screen} from "@testing-library/react";
import {expect, jest, test} from "@jest/globals";
import Carrousel from "./carrousel.component";

// @todo remove?
// test("object assigment", () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++){
//         for (let b = 1; b < 10; b++) {
//             expect(a + b).not.toBe(0)
//         }
//     }
// })

test("leventar carrousel", () => { // @note remove?
  expect(1 + 1).toBe(2);
});

test("there is no I in team", () => { // @note remove?
  expect("team").not.toMatch(/I/);
});
describe("Carrousel Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  jest.runOnlyPendingTimers();
  jest.useRealTimers();

  test("renders the initial slide", () => {
    render(<Carrousel />);
    const titleElement = screen.getAllByText("Red Dead Redemption");
    const descriptionElement = screen.getAllByText(
      "Play as Arthur Morgan, a member of the infamous Van der Linde gang, as you navigate through a vast and detailed open world"
    );
    const imageElement = screen.getAllByText(
      "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});

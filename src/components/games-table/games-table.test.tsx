import {render, screen} from "@testing-library/react";
import {expect, jest, test} from '@jest/globals';
import GamesTable from "./games-table.component";
import fetch from "node-fetch";
import fetchMock from "fetch-mock";

describe("Game Table component", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  });

  afterEach(() => {
    fetchMock.restore();
  });

  test('renders with success', () => {
    render(<GamesTable/>)

    expect(screen.getByTestId("games-list")).toBeInTheDocument()
  })

  test("render video-games when API call succeeds", () => {
    const mockVideoGames = [
      {id: 1, title: "Creed Valhalla"},
      {id: 2, title: "he Last of Us"},
    ];

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve(mockVideoGames),
    };

    jest.spyOn(global, "fetch").mockResolvedValueOnce(mockResponse as never);
  });

  test("render error when API call fails", () => {
    // @note empty test
  });
});

test("the data is peanut butter", () => { // @todo remove
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

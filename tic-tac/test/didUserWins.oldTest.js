import didUserWins from "../didUserWins";

describe("did user win", () => {
  it("one row match", () => {
    const userSymbol = "x";
    let firstRow = [userSymbol, userSymbol, userSymbol];
    let secondRow = ["", "", ""];
    let thirdRow = ["", "", ""];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("second row match", () => {
    const userSymbol = "x";
    let firstRow = ["", "", ""];
    let secondRow = [userSymbol, userSymbol, userSymbol];
    let thirdRow = ["", "", ""];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("third row match", () => {
    const userSymbol = "x";
    let firstRow = ["", "", ""];
    let secondRow = ["", "", ""];
    let thirdRow = [userSymbol, userSymbol, userSymbol];

    const board = [firstRow, secondRow, thirdRow];
    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("firts column match", () => {
    const userSymbol = "x";
    let firstRow = [userSymbol, "", ""];
    let secondRow = [userSymbol, "", ""];
    let thirdRow = [userSymbol, "", ""];

    const board = [firstRow, secondRow, thirdRow];

    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("second column match", () => {
    const userSymbol = "x";
    let firstRow = ["", userSymbol, ""];
    let secondRow = ["", userSymbol, ""];
    let thirdRow = ["", userSymbol, ""];

    const board = [firstRow, secondRow, thirdRow];

    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("third column match", () => {
    const userSymbol = "x";
    let firstRow = ["", "", userSymbol];
    let secondRow = ["", "", userSymbol];
    let thirdRow = ["", "", userSymbol];

    const board = [firstRow, secondRow, thirdRow];

    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("right diagonal match", () => {
    const userSymbol = "x";
    let firstRow = [userSymbol, "", ""];
    let secondRow = ["", userSymbol, ""];
    let thirdRow = ["", "", userSymbol];

    const board = [firstRow, secondRow, thirdRow];
    // console.log('column board ', board);
    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });

  it("left diagonal match", () => {
    const userSymbol = "x";
    let firstRow = ["", "", userSymbol];
    let secondRow = ["", userSymbol, ""];
    let thirdRow = [userSymbol, "", ""];

    const board = [firstRow, secondRow, thirdRow];
    // console.log('diagonal left board ', board);
    const userWins = didUserWins(board, userSymbol);
    expect(userWins).toEqual(true);
  });
});

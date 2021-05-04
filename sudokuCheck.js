/*******************************************************************************
Sudoku is a number placement puzzle. The objective is to fill a 9x9 grid with
digits so that each column, each row, and each of the nine 3x3 sub-grids that
compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct
solution to Sudoku.

Example:

For...

grid = [
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5]
]

The output should be: sudoku(grid) = true;

For...

grid = [
  [1, 3, 2, 5, 4, 6, 9, 2, 7],
  [4, 6, 5, 8, 7, 9, 3, 8, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5]
]

The output should be: soduku(grid) = false;

The output should be false: each of the nine 3x3 sub-grids should contain all
of the digits from 1 to 9.

Summary:
1. Create 3 different functions to check if it is valid sudoku (row/col/3x3)
2. Loop through each function and check if it is valid
3. Return true if all functions pass.

*******************************************************************************/

// this will always be fixed at the 2d array, so we don't super need to worry
// nested loops increasing the big 0 to something insane. 
// I can use a helper function for validation of each row, and column?
// couple thoughts: we can use multiple helper functions, dictionaries, and
// iterate up to 9 each time because we know it's a 9x9 grid.

function sudoku(grid) {
  // if duplicate == true, return !duplicate
  let map = {
    rows: {},
    cols: {},
    box: {},
  };

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // our current "square"/"box"/"position"
      const square = grid[i][j]

      // we'll take care of our rows first. use i for horizontal
      if (!map["rows"][i]) {
        // does map contain a key for the row?
        // unique values go here
        map["rows"][i] = [];
        // push unique values
        map["rows"][i].push(square);
      } else if (!map["rows"][i].includes(square)) {
        // does it have our current square ? No ? Push into our map.
        map["rows"][i].push(square);
      } else if (map["rows"][i] && map["rows"][i].includes(square)) {
        // is our current square in the map.rows? Yes? Invalid sudoku!
        return false;
      }
      // now let's do it again but for columns! use j for vertical
      if (!map["cols"][j]) {
        map["cols"][j] = [];
        map["cols"][j].push(square);
      } else if (!map["cols"][j].includes(square)) {
        // does not include square? push our current square into the map
        map["cols"][j].push(square);
      } else if (map["cols"][j] && map["cols"][j].includes(square)) {
        // is our current square in map.cols? Yes? Invalid suduoku!
        return false;
      }

      // a sudoku board contains 9 sub-grids or "boxes" 
      //                                    1-1, 1-2, 1-3
      //                                    2-1, 2-2, 2-3
      //                                    3-1, 3-2, 3-3
      const boxRowId = Math.ceil((i + 1) / 3);
      const boxColId = Math.ceil((j + 1) / 3);
      const boxId = `${boxRowId}-${boxColId}`;

      // repeat the above logic, but this time for our "boxes"
      if (!map["box"][boxId]) {
        map["box"][boxId] = [];
        map["box"][boxId].push(square)
      } else if (!store["box"][boxId].includes(map["box"]))
    }
  }
  console.log(map)
}

// the duplicate checker that Michael used
// function duplicate(arr) {
//   return new Set(arr).size !== arr.length
// }

// console.log(duplicate([1, 2, 3, 4, 5]))
// console.log(duplicate([1, 1, 2, 3, 4]))

const grid = [
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5]
]

// const grid = [
//   [1, 3, 2, 5, 4, 6, 9, 2, 7],
//   [4, 6, 5, 8, 7, 9, 3, 8, 1],
//   [7, 9, 8, 2, 1, 3, 6, 5, 4],
//   [9, 2, 1, 4, 3, 5, 8, 7, 6],
//   [3, 5, 4, 7, 6, 8, 2, 1, 9],
//   [6, 8, 7, 1, 9, 2, 5, 4, 3],
//   [5, 7, 6, 9, 8, 1, 4, 3, 2],
//   [2, 4, 3, 6, 5, 7, 1, 9, 8],
//   [8, 1, 9, 3, 2, 4, 7, 6, 5]
// ]

console.log(sudoku(grid))
// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

//A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

function equalPairs() {
  let rows = [];
  let columns = [];
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let k = 0; k < grid[i].length; k++) {
      let cell = grid[i][k];
      row.push(cell);
    }
    rows.push(row);
  }

  for (let i = 0; i < grid.length; i++) {
    let col = [];
    for (let k = 0; k < grid[i].length; k++) {
      let cell = grid[k][i];
      col.push(cell);
    }
    columns.push(col);
  }

  for (let row of rows) {
    for (let col of columns) {
      let equals = isEqual(row, col);
      if (equals) {
        count += 1;
      }
    }
  }

  return count;

  function isEqual(row, col) {
    for (let i = 0; i < row.length; i++) {
      let char = row[i];
      if (char !== col[i]) {
        return false;
      }
    }
    return true;
  }
}

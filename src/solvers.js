/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {

  var solution = new Board({n: n});

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j)
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, j);
      }
    }
  }
  solution = solution.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var board = new Board({n:n});

  // Nested recursive function
  var search = function(row) {  
    // Base case
    // When all rows are exhausted
    if (row === n) {
      // Increase solutionCount++
      solutionCount++;
      return;
    }

    // Loop through our rows
    for (var i = 0; i < n; i++) {
      // Toggle a piece on a column
      board.togglePiece(row, i);
      // If board has NO conflicts
      if (!board.hasAnyRooksConflicts()) {
        // Recurse through nested function -> send in columns
        search(row + 1);
      }
      // Untoggle the piece on the column
      board.togglePiece(row, i);
    }
  }
  search(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows(); //fixme
  
  // Nested recursive function
  var search = function(row) {  
    // Base case
    // When all rows are exhausted
    if (row === n) {
      
      solution = _.map(board.rows(), function(row) {
        return row.slice();
      });
      return;
    }

    // Loop through our rows
    for (var i = 0; i < n; i++) {
      // Toggle a piece on a column
      board.togglePiece(row, i);
      // If board has NO conflicts
      if (!board.hasAnyQueensConflicts()) {
        // Recurse through nested function -> send in columns
        search(row + 1);
      }

      // Untoggle the piece on the column
      board.togglePiece(row, i);
    }
  }
  search(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // var solutionCount = undefined; //fixme
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  
  // Nested recursive function
  var search = function(row) {  
    // Base case
    // When all rows are exhausted
    if (row === n) {
      // Increase solutionCount++
      solutionCount++;
      return;
    }

    // Loop through our rows
    for (var i = 0; i < n; i++) {
      // Toggle a piece on a column
      board.togglePiece(row, i);
      // If board has NO conflicts
      console.log(board);
      if (!board.hasAnyQueensConflicts()) {
        // Recurse through nested function -> send in columns
        search(row + 1);
      }

      // Untoggle the piece on the column
      board.togglePiece(row, i);
    }
  }
  search(0);



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

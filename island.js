function getNeighbors(row, col, matrix) {
  let neighbors = [];
  // Check top
  if (row > 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Check top right
  if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] === 1) {
    neighbors.push([row - 1, col + 1]);
  }
  // Check right
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  // Check bottom right
  if (row < matrix.length - 1 && col < matrix[row].length - 1 && matrix[row + 1][col + 1] === 1) {
    neighbors.push([row + 1, col + 1]);
  }
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check bottom left
  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1) {
    neighbors.push([row + 1, col - 1]);
  }
  // Check left
  if (col > 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check top left
  if (row > 0 && col > 0 && matrix[row - 1][col - 1] === 1) {
    neighbors.push([row - 1, col - 1]);
  }
  // Return neighbors
  return neighbors;
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let islandCount = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If an index contains a 1 and has not been visited,
      if (!visited.has(`${row}, ${col}`) && matrix[row][col] === 1){
      // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        islandCount++;
        // Initialize a stack with current index
        let stack = [[row, col]];
        // Add stringified version of current index to the visited set
        visited.add(`${row}, ${col}`);
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          let element = stack.pop();
          const [row, col] = element;
          // Get valid neighbors of current element
          let neighbors = getNeighbors(row, col, matrix);
          // Iterate over neigbors
          for (let neighbor of neighbors) {
            // If neighbor has not been visited
            if (!visited.has(`${neighbor[0]}, ${neighbor[1]}`)) {
              // Add neighbor to stack
              stack.push(neighbor);
              // Mark neighbor as visited
              visited.add(`${neighbor[0]}, ${neighbor[1]}`);
            }
          }
        }
      }
    }
  }
  // Return island count
  return islandCount;
}

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

 //console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
 //console.log(getNeighbors(2,4, matrix)) // [[1,4]]

const matrix2 = [
                    [1,1,1,0,1],
                    [0,0,0,0,1],
                    [1,0,0,1,0],
                ]

 console.log(countIslands(matrix)) // 2
 console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];

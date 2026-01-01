export const degreesOfSeparation = (familyTree, personA, personB) => {
  const graph = new Set();
  const parents = Object.keys(familyTree);

  // Navigate through all the parents
  for (const parent of parents) {

    // Initialize the parents in the graph
    const children = familyTree[parent];
    if (graph[parent] == null) {
      graph[parent] = new Set();
    }

    // Iterate through the children
    for (const child of children) {

      // Initialize the children in the graph
      if (graph[child] == null) {
        graph[child] = new Set();
      }

      // Add the child to the parent's set
      // and associate child with parent
      graph[parent].add(child);
      graph[child].add(parent);

      // Associate child with their siblings
      for (const sibling of children) {
        if (sibling !== child) {
          graph[child].add(sibling);
        }
      }

    }
  }

  // Iterate graph using BFS algorithm
  // Queue in format of [node, distance]
  const queue = [[personA, 0]];
  const visited = new Set([personA]);

  // Iterate through the queue
  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    // Person found
    if (node === personB) {
      return distance;
    }

    for (const neighbor of graph[node]) {
      // Skip already visited people to prevent loops
      if (visited.has(neighbor)) {
        continue;
      }

      // Mark the person as visited
      visited.add(neighbor);

      // Add the neighbor to the queue and increase their distance in one
      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
}
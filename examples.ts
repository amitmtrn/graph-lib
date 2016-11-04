declare var require: any;

const Graph = require('./index');

const graph = new Graph();

const v1 = {
  value: 1,
  edges: []
}

const v2 = {
  value: 2,
  edges: []
}

const v3 = {
  value: 3,
  edges: []
}

graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);

console.log(graph);

graph.addEdge(v1, v2);

console.log(graph);

graph.setVertexValue(v2, 22);

console.log(graph.neighbors(v1));

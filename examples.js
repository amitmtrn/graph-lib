var Graph = require('./index');
var graph = new Graph();
var v1 = {
    value: 1,
    edges: []
};
var v2 = {
    value: 2,
    edges: []
};
var v3 = {
    value: 3,
    edges: []
};
graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
console.log(graph);
graph.addEdge(v1, v2);
console.log(graph);
graph.setVertexValue(v2, 22);
console.log(graph.neighbors(v1));

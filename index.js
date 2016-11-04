/**
 * ADT of graph taken from https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
 */
var Graph = (function () {
    function Graph(_a) {
        var _b = (_a === void 0 ? {} : _a).initialGraph, initialGraph = _b === void 0 ? [] : _b;
        this.graph = initialGraph;
    }
    /**
     * tests whether there is an edge from the vertices x to y
     */
    Graph.prototype.adjacent = function (vertex1, vertex2) {
        var vertices = this.graph.reduce(function (initial, graphVertex) {
            if (graphVertex === vertex1)
                return graphVertex.vertices;
            return initial;
        }, null);
        if (vertices === null)
            throw new Error('vertex did not found');
        return vertices.includes(vertex2);
    };
    /**
     * lists all vertices y such that there is an edge from the vertices x to y
     */
    Graph.prototype.neighbors = function (vertex) {
        return this.graph.reduce(function (initial, graphVertex) {
            if (graphVertex === vertex)
                return graphVertex.vertices;
            return initial;
        }, null);
    };
    /**
     * adds the vertex x, if it is not there
     */
    Graph.prototype.addVertex = function (vertex) {
        return this.graph.push(vertex);
    };
    /**
     * removes the vertex x, if it is there
     */
    Graph.prototype.removeVertex = function (vertex) {
        var indexToRemove = this.graph.indexOf(vertex);
        if (indexToRemove === -1)
            return false;
        this.graph.splice(indexToRemove, 1);
        this.graph.forEach(function (v) {
            if (v.vertices.indexOf(vertex) !== -1) {
                var indexToRemove_1 = v.vertices.indexOf(vertex);
                v.vertices.splice(indexToRemove_1, 1);
            }
        });
        return true;
    };
    /**
     * adds the edge from the vertices x to y, if it is not there
     */
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        if (this.graph.indexOf(vertex1) !== -1
            && vertex1.vertices.indexOf(vertex2) === -1) {
            vertex1.vertices.push(vertex2);
            return vertex1;
        }
        return null;
    };
    /**
     * removes the edge from the vertices x to y, if it is there
     */
    Graph.prototype.removeEdge = function (vertex1, vertex2) {
        if (this.graph.indexOf(vertex1) !== -1
            && vertex1.vertices.indexOf(vertex2) !== -1) {
            var indexToRemove = vertex1.vertices.indexOf(vertex2);
            vertex1.vertices.splice(indexToRemove, 1);
            return vertex1;
        }
        return null;
    };
    /**
     * returns the value associated with the vertex x
     */
    Graph.prototype.getVertexValue = function (vertex) {
        if (this.graph.indexOf(vertex) !== -1) {
            return vertex.value;
        }
        return NaN;
    };
    /**
     * sets the value associated with the vertex x to v
     */
    Graph.prototype.setVertexValue = function (vertex, value) {
        if (this.graph.indexOf(vertex) !== -1) {
            vertex.value = value;
            return vertex;
        }
        return null;
    };
    /**
     * returns the value associated with the edge (x, y)
     */
    Graph.prototype.getEdgeValue = function (x, y) {
        // work in progress
    };
    /**
     * sets the value associated with the edge (x, y) to v.
     */
    Graph.prototype.setEdgeValue = function (x, y, v) {
        // work in progres
    };
    return Graph;
}());
module.exports = Graph;

/**
 * ADT of graph taken from https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
 */
var Graph = (function () {
    function Graph(_a) {
        var _b = (_a === void 0 ? {} : _a).initialGraph, initialGraph = _b === void 0 ? [] : _b;
        this.graph = initialGraph;
    }
    /**
     * tests whether there is an edge from the vertices
     */
    Graph.prototype.adjacent = function (vertex1, vertex2) {
        if (this.graph.indexOf(vertex1) === -1)
            throw new Error('the vertex is not found in the graph');
        var exists = false;
        vertex1.edges.forEach(function (edge) {
            if (edge.vertex === vertex2)
                exists = true;
        });
        return exists;
    };
    /**
     * lists all vertices y such that there is an edge from the vertices
     */
    Graph.prototype.neighbors = function (vertex) {
        if (this.graph.indexOf(vertex) === -1)
            throw new Error('the vertex is not found in the graph');
        return vertex.edges.reduce(function (vertices, edge) {
            vertices.push(edge.vertex);
            return vertices;
        }, []);
    };
    /**
     * adds the vertex, if it is not there
     */
    Graph.prototype.addVertex = function (vertex) {
        return this.graph.push(vertex);
    };
    /**
     * removes the vertex, if it is there
     */
    Graph.prototype.removeVertex = function (vertex) {
        var indexToRemove = this.graph.indexOf(vertex);
        if (indexToRemove === -1)
            return false;
        this.graph.splice(indexToRemove, 1);
        this.graph.forEach(function (v) {
            v.edges.forEach(function (e, i) {
                if (e.vertex === vertex)
                    v.edges.splice(i, 1);
            });
        });
        return true;
    };
    /**
     * adds the edge from the vertices, if it is not there
     */
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        if (this.graph.indexOf(vertex1) !== -1) {
            var exists = false;
            for (var i = 0; i < vertex1.edges.length; i++)
                if (vertex1.edges[i].vertex === vertex2)
                    exists = true;
            if (!exists)
                vertex1.edges.push({
                    vertex: vertex2,
                    value: NaN
                });
            return vertex1;
        }
        return null;
    };
    /**
     * removes the edge from the vertices, if it is there
     */
    Graph.prototype.removeEdge = function (vertex1, vertex2) {
        if (this.graph.indexOf(vertex1) !== -1) {
            vertex1.edges.forEach(function (e, i) {
                if (e.vertex === vertex2)
                    vertex1.edges.splice(i, 1);
            });
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
        return '';
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
     * returns the value associated with the edge
     */
    Graph.prototype.getEdgeValue = function (vertex1, vertex2) {
        if (this.graph.indexOf(vertex1) !== -1) {
            var value_1 = NaN;
            vertex1.edges.forEach(function (e, i) {
                if (e.vertex === vertex2)
                    value_1 = e.value;
            });
            return value_1;
        }
    };
    /**
     * sets the value associated with the edge (x, y) to v.
     */
    Graph.prototype.setEdgeValue = function (vertex1, vertex2, value) {
        if (this.graph.indexOf(vertex1) !== -1) {
            var edge_1 = null;
            vertex1.edges.forEach(function (e, i) {
                if (e.vertex === vertex2) {
                    e.value = value;
                    edge_1 = e;
                }
            });
            return value;
        }
    };
    return Graph;
}());
module.exports = Graph;

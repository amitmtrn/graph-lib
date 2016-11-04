declare var module: any;

interface Vertex {
  value: number;
  vertices: Array<Vertex>;
}

/**
 * ADT of graph taken from https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
 */
class Graph {
    private graph: Array<Vertex>;

    constructor({initialGraph = []} = {}) {
        this.graph = initialGraph;
    }

    /**
     * tests whether there is an edge from the vertices x to y
     */
    adjacent(vertex1: Vertex, vertex2: Vertex) {
      const vertices = this.graph.reduce((initial, graphVertex) => {
        if(graphVertex === vertex1)
          return graphVertex.vertices;

        return initial;
      }, null);

      if(vertices === null) throw new Error('vertex did not found');

      return vertices.includes(vertex2);
    }

    /**
     * lists all vertices y such that there is an edge from the vertices x to y
     */
    neighbors(vertex: Vertex) {
      return this.graph.reduce((initial, graphVertex) => {
        if(graphVertex === vertex)
          return graphVertex.vertices;

        return initial;
      }, null);
    }

    /**
     * adds the vertex x, if it is not there
     */
    addVertex(vertex: Vertex) {
        return this.graph.push(vertex);
    }

    /**
     * removes the vertex x, if it is there
     */
    removeVertex(vertex: Vertex) {
      const indexToRemove = this.graph.indexOf(vertex);

      if (indexToRemove === -1) return false;

      this.graph.splice(indexToRemove, 1);
      this.graph.forEach((v) => {

        if(v.vertices.indexOf(vertex) !== -1) {
          const indexToRemove = v.vertices.indexOf(vertex);
          v.vertices.splice(indexToRemove, 1);
        }
      });

      return true;
    }

    /**
     * adds the edge from the vertices x to y, if it is not there
     */
    addEdge(vertex1: Vertex, vertex2: Vertex) {
      if (this.graph.indexOf(vertex1) !== -1
      && vertex1.vertices.indexOf(vertex2) === -1) {
        vertex1.vertices.push(vertex2);

        return vertex1;
      }
      return null;
    }

    /**
     * removes the edge from the vertices x to y, if it is there
     */
    removeEdge(vertex1: Vertex, vertex2: Vertex) {
      if (this.graph.indexOf(vertex1) !== -1
      && vertex1.vertices.indexOf(vertex2) !== -1) {
        const indexToRemove = vertex1.vertices.indexOf(vertex2);
        vertex1.vertices.splice(indexToRemove, 1);

        return vertex1;
      }

      return null;
    }

    /**
     * returns the value associated with the vertex x
     */
    getVertexValue(vertex: Vertex) {
      if (this.graph.indexOf(vertex) !== -1) {
        return vertex.value;
      }

      return NaN;
    }

    /**
     * sets the value associated with the vertex x to v
     */
    setVertexValue(vertex: Vertex, value: number) {
      if (this.graph.indexOf(vertex) !== -1) {
        vertex.value = value;
        return vertex;
      }

      return null;
    }

    /**
     * returns the value associated with the edge (x, y)
     */
    getEdgeValue(x, y) {
      // work in progress
    }

    /**
     * sets the value associated with the edge (x, y) to v.
     */
    setEdgeValue(x, y, v) {
      // work in progres
    }
}

module.exports = Graph;

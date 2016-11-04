declare var module: any;

interface Vertex {
  value: string;
  edges: Array<Edge>;
}

interface Edge {
  value: number;
  vertex: Vertex;
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
     * tests whether there is an edge from the vertices
     */
    adjacent(vertex1: Vertex, vertex2: Vertex) {
      if(this.graph.indexOf(vertex1) === -1) throw new Error('the vertex is not found in the graph');
      let exists = false;

      vertex1.edges.forEach((edge) => {
        if(edge.vertex === vertex2) exists = true;
      });

      return exists;
    }

    /**
     * lists all vertices y such that there is an edge from the vertices
     */
    neighbors(vertex: Vertex) {
      if(this.graph.indexOf(vertex) === -1) throw new Error('the vertex is not found in the graph');

      return vertex.edges.reduce((vertices, edge) => {
        vertices.push(edge.vertex);
        return vertices;
      }, []);
    }

    /**
     * adds the vertex, if it is not there
     */
    addVertex(vertex: Vertex) {
        return this.graph.push(vertex);
    }

    /**
     * removes the vertex, if it is there
     */
    removeVertex(vertex: Vertex) {
      const indexToRemove = this.graph.indexOf(vertex);

      if (indexToRemove === -1) return false;

      this.graph.splice(indexToRemove, 1);
      this.graph.forEach((v) => {
        v.edges.forEach((e, i) => {
          if(e.vertex === vertex) v.edges.splice(i, 1);
        });
      });

      return true;
    }

    /**
     * adds the edge from the vertices, if it is not there
     */
    addEdge(vertex1: Vertex, vertex2: Vertex) {
      if (this.graph.indexOf(vertex1) !== -1) {
        let exists = false;

        for(let i = 0; i < vertex1.edges.length; i++)
          if(vertex1.edges[i].vertex === vertex2) exists = true;

        if(!exists)
          vertex1.edges.push({
            vertex: vertex2,
            value: NaN
          });

        return vertex1;
      }
      return null;
    }

    /**
     * removes the edge from the vertices, if it is there
     */
    removeEdge(vertex1: Vertex, vertex2: Vertex) {
      if (this.graph.indexOf(vertex1) !== -1) {

        vertex1.edges.forEach((e, i) => {
          if(e.vertex === vertex2)
            vertex1.edges.splice(i, 1);
        });

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

      return '';
    }

    /**
     * sets the value associated with the vertex x to v
     */
    setVertexValue(vertex: Vertex, value: string) {
      if (this.graph.indexOf(vertex) !== -1) {
        vertex.value = value;
        return vertex;
      }

      return null;
    }

    /**
     * returns the value associated with the edge
     */
    getEdgeValue(vertex1, vertex2) {
      if (this.graph.indexOf(vertex1) !== -1) {
        let value = NaN;

        vertex1.edges.forEach((e, i) => {
          if(e.vertex === vertex2)
            value = e.value;
        });

        return value;
      }
    }

    /**
     * sets the value associated with the edge (x, y) to v.
     */
    setEdgeValue(vertex1, vertex2, value) {
      if (this.graph.indexOf(vertex1) !== -1) {
        let edge = null;

        vertex1.edges.forEach((e, i) => {
          if(e.vertex === vertex2) {
            e.value = value;
            edge = e;
          }
        });

        return value;
      }
    }
}

module.exports = Graph;

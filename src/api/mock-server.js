import { createServer, Model, RestSerializer } from "miragejs";
import { productData } from "./productData";
export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      products: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 100;
      this.resource("products");
    },

    seeds(server) {
      productData.map((product) => server.create("product", product));
    }
  });
}

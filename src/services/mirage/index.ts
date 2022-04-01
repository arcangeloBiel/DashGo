import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

//Partial e uma regra de insercão de alguma parte do User
export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    //utilizado para inserção de dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/users");
      this.post("/users");

      //volta para estado normal
      this.namespace = "";
      //Se não for detectado pela rota do mirage ela pode ser chamada do mesmo jeito
      this.passthrough();
    },
  });

  return server;
}

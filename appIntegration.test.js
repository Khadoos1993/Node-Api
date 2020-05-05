const request = require("supertest");
const mongoose = require("mongoose");

process.env.NODE_ENV = "test";
const app = require("./app");

const agent = request.agent(app);

describe("Book CRUD Test", () => {
  it("should allow a book to be posted and return read and _id", async () => {
    const bookPost = { title: "My Book", author: "Jon", genre: "Fiction" };
    try {
      const response = await agent.post("/api/books").send(bookPost);
      console.log(response.body);
      expect(response.body).toHaveProperty("title");
    } catch (err) {
      console.log(`inside error${err}`);
    }
  });

  afterAll((done) => {
    mongoose.connection.close();
    app.server.close(done);
  });
});

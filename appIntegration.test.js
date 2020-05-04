const request = require("supertest");
const mongoose = require("mongoose");

process.env.NODE_ENV = "test";
const app = require("./app");

const Book = mongoose.model("Book");
const agent = request.agent(app);

describe("Book CRUD Test", () => {
  it("should allow a book to be posted and return read and _id", async () => {
    const bookPost = { title: "My Book", author: "Jon", genre: "Fiction" };
    const response = await agent.post("/api/books").send(bookPost);
    //console.log(response.body);
    //expect(response.body.length).toEqual(2);
    //expect(response.body).toHaveProperty("_id");
  });

  afterEach(() => {
    Book.deleteMany({}).exec();
  });
});

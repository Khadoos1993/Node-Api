const sinon = require("sinon");
const bookController = require("./booksController");

describe("Book controller Test", () => {
  describe("Post", () => {
    it("should not allow an empty title on post", () => {
      // eslint-disable-next-line no-unused-vars
      const Book = function (book) {
        this.save = () => {};
      };

      const req = {
        body: {
          author: "Jon",
        },
      };

      const res = {
        send: sinon.spy(),
        status: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = bookController(Book);
      controller.post(req, res);
      expect(res.status.calledWith(400)).toEqual(true);
      expect(res.send.calledWith("Title is required")).toEqual(true);
    });
  });
});

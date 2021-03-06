/* eslint-disable no-param-reassign */

const express = require("express");
const booksControllwer = require("../controllers/booksController");

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksControllwer(Book);
  bookRouter.route("/books").post(controller.post).get(controller.get);

  bookRouter.use("/books/:bookId", (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) return res.send(err);
      if (book) {
        req.book = book;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  bookRouter
    .route("/books/:bookId")
    .get((req, res) => res.send(req.book))
    .put((req, res) => {
      const { book } = req;
      book.title = req.body.title;
      book.genre = req.body.genre;
      book.read = req.body.read;
      book.author = req.body.author;
      req.book.save((err) => {
        if (err) return res.send(err);
        return res.json(book);
      });
    })
    .patch((req, res) => {
      const { book } = req;

      if (req.book._id) delete req.book._id;
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        book[key] = value;
      });
      req.book.save((err) => {
        if (err) return res.send(err);
        return res.json(book);
      });
    })
    .delete((req, res) => {
      req.book
        .remove()
        .then(() => res.sendStatus(204))
        .catch((err) => res.send(err));
    });

  return bookRouter;
}

module.exports = routes;

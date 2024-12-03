class Media {
  constructor(price) {
    this.price = price;
  }
  play() {
    throw new Error("You must implement the play method in the subclass!");
  }

  pause() {
    throw new Error("You must implement the pause method in the subclass!");
  }
}

class Book extends Media {
  constructor() {
    super();
    this.price = "$5";
  }
  play() {
    return "Opening the book to read.";
  }

  pause() {
    return "Bookmarking the page and closing the book.";
  }
}

class Movie extends Media {
  constructor() {
    super();
    this.price = "$10";
  }
  play() {
    return "Playing the movie.";
  }

  pause() {
    return "Pausing the movie.";
  }
}

const book = new Book();
const movie = new Movie();
console.log(book.play());
console.log(movie.pause());
console.log(book.price);
console.log(movie.price);

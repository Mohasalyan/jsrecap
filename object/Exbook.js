const book1 = {
    name: "Book 1",
    author: "Author 1",
    year: 2000
  };
  
  const book2 = {
    name: "Book 2",
    author: "Author 2",
    year: 2010
  };
  
  const bookUtils = {};
  
  bookUtils.getFirstPublished = function(bookA, bookB) {
    return bookA.year < bookB.year ? bookA : bookB;
  };
  
  bookUtils.setNewEdition = function(book, editionYear) {
    book.latestEdition = editionYear;
  };
  
  bookUtils.setLanguage = function(book, language) {
    book.language = language;
  };
  
  bookUtils.setTranslation = function(book, translationLanguage, translator) {
    book.translation = {
      language: translationLanguage,
      translator: translator
    };
  };
  
  bookUtils.setPublisher = function(book, publisherName, publisherLocation) {
    book.publisher = {
      name: publisherName,
      location: publisherLocation
    };
  };
  
  bookUtils.isSamePublisher = function(bookA, bookB) {
    if (
      bookA.publisher &&
      bookB.publisher &&
      bookA.publisher.name === bookB.publisher.name &&
      bookA.publisher.location === bookB.publisher.location
    ) {
      return true;
    }
    return false;
  };
  
  // Test the functions
  const firstPublishedBook = bookUtils.getFirstPublished(book1, book2);
  console.log("First Published Book:", firstPublishedBook);
  
  bookUtils.setNewEdition(book1, 2022);
  console.log("Book 1 with New Edition:", book1);
  
  bookUtils.setLanguage(book2, "French");
  console.log("Book 2 with Language:", book2);
  
  bookUtils.setTranslation(book1, "Spanish", "Translator 1");
  console.log("Book 1 with Translation:", book1);
  
  bookUtils.setPublisher(book2, "Publisher X", "City Y");
  console.log("Book 2 with Publisher:", book2);
  
  const samePublisher = bookUtils.isSamePublisher(book1, book2);
  console.log("Are Books from Same Publisher?", samePublisher);
  
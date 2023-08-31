
const book = {
  title: "Sample Book",
  author: "moahmmed alyan",
  ISBN: "1234567890",
  isCheckedOut: false,
  toggleCheckOutStatus: function() {
    this.isCheckedOut = !this.isCheckedOut;
  }
};

console.log("Before toggling:", book.isCheckedOut); 
book.toggleCheckOutStatus();
console.log("After toggling:", book.isCheckedOut);  
book.toggleCheckOutStatus();
console.log("After toggling again:", book.isCheckedOut); 

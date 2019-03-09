const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method 
TypeWriter.prototype.type = function() {
    console.log('Hello');

    setTimeout((() => this.type(), 500)
}
// Initialize when DOM loads 
document.addEventListener('DOMContentLoaded', init);

// Initialize App
function init() {
   const txtElement = document.querySelector('.txt-type');
   const words = JSON.parse(txtElement.getAttribute('data-words'));
   const wait = txtElement.getAttribute('data-wait');
// Initialize Typewriter
new TypeWriter(txtElement, words, wait);
}
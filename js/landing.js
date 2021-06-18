var button = document.getElementById('donate');
var text = document.getElementById('donate-text');

button.onmouseover = function() {
  text.style.display = "block";
}
button.onmouseout = function() {
  text.style.display = "none";
}

// Okay, If you are reading THIS, then you are the coolest person ever.
console.log('If you are reading this, we want you to know that JavaScript is our favorite language because it lets us learn the whole spectrum of technology, from machine learning to building mobile apps. We hope that you love JavaScript as much as we do.');

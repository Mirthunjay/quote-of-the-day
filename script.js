const category = document.querySelector('.category');
const quote = document.querySelector('.quote');
const authorName = document.querySelector('.author-name');

function generateQuote(){
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
      category.innerText=`#${data.tags}`;
      quote.innerText=data.content;
      authorName.innerText=`-- ${data.author}`;
  })

}

generateQuote();
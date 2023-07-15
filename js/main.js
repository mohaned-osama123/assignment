var arrayofquotes = [
    {
      'author': 'Bernard M. Baruch',
      'quote': 'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.'
    },
    {
      'author': 'marcus tulius',
      'quote': 'A room without books is like a body without a soul.'
    },
    {
      'author': 'Frank Zappa',
      'quote': 'So many books, so little time.'
    },
    {
      'author': 'Albert Einstein',
      'quote': 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.'
    },
    {
      'author': 'Marilyn Monroe',
      'quote': 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.'
    },
    {
      'author': 'Oscar Wilde',
      'quote': 'Be yourself; everyone else is already taken.'
    }
  ];
  
  function generatequote(){
      var random = Math.floor(Math.random() * arrayofquotes.length);
      document.getElementById('quoteOutput').innerHTML = arrayofquotes[random].quote;
      document.getElementById('authorOutput').innerHTML = arrayofquotes[random].author;
  }
  
  generatequote();
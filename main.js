const quoteSection = document.querySelector('#quote');
const writerSection = document.querySelector('#writer');
const generateBtn = document.querySelector('.btn');

const url = 'https://zenquotes.io/api/quotes/';

function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

async function fetchQuotes() {
    try {
        const response = await fetch(url);
        console.log(response);
        if (response.status === 200) {
            console.log('Successful');
            const responseJSON = await response.json();
            const quote = responseJSON[generateRandomNumber(responseJSON.length)];
            console.log(quote);
            quoteSection.textContent = '\"' + quote.q + '\"';
            writerSection.textContent = '-' + quote.a + '-';
        } else {
            throw new Error('Sorry. There was a network error.');
        }
    } catch(err) {
        console.log(err);
    }
}

generateBtn.addEventListener('click', fetchQuotes);
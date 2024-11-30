const quotes = [
    { quote: "Только тот, кто осмеливается потерпеть неудачу, может достичь великого.", author: "Роберт Кеннеди" },
    { quote: "Самое важное в жизни — это быть верным себе.", author: "Фридрих Ницше" },
    { quote: "Будь собой; все остальные роли уже заняты.", author: "Оскар Уайльд" },
    { quote: "Жизнь — это то, что происходит, пока мы строим другие планы.", author: "Джон Леннон" },
    { quote: "Ты должен быть тем изменением, которое хочешь увидеть в мире.", author: "Махатма Ганди" },
    { quote: "Не бойтесь ошибок, бойтесь их повторений.", author: "Генри Форд" },
    { quote: "Вера — это первый шаг к успеху.", author: "Конфуций" },
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `— ${randomQuote.author}`;
}

function shareQuote() {
    const quoteText = document.getElementById('quote').textContent;
    const authorText = document.getElementById('author').textContent;
    const shareMessage = `${quoteText} ${authorText}`;

    if (navigator.share) {
        navigator.share({
            title: 'Цитаты и Афоризмы',
            text: shareMessage,
        }).catch((error) => console.error('Error sharing:', error));
    } else {
        alert('В вашем браузере нет поддержки функции «Поделиться».');
    }
}
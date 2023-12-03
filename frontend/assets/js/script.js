const root = document.getElementById('root');

const URL = "http://localhost:8080/api/cards";

const getCards = () => {
    return fetch(URL)
        .then((res) => res.json())
        .then((res) => res.map(renderCard).join(''));
}

const formatDate = (date) => {
    const inputDate = new Date(date);

    const day = inputDate.getDate();
    const month = inputDate.toLocaleString('default', { month: 'long' });
    const year = inputDate.getFullYear();

    return `${day} ${month} ${year}`;
}

function renderCard(card) {
    return `<div class="col-4 card__block">
        <div class="p-card card__container">
            <div class="card__content">
                <div class="card__topic">
                    ${card.topic.name}
                </div>
                <hr />
                <div>
                    <a href="${card.link}"><img class="p-card__image" src="${card.image}" alt="" /></a>
                    <h4><a href="${card.link}">${card.title}</a></h4>
                </div>
            </div>
            <div class="card__footer">
                <p class="u-no-padding--bottom">
                    <i>By <a href="${card.author.link}">${card.author.name}</a> on ${formatDate(card.date)}</i>
                </p>
                <hr />
                <div class="card__article">Article</div>
            </div>
        </div>
    </div>`;
}

function renderError () {
    return `<h1>Something went wrong!</h1>`;
}

getCards().then((res) => {
    root.innerHTML = res;
}).catch(() => {
    root.innerHTML = renderError();
});

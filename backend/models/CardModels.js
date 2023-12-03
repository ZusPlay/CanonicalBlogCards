const URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

class CardModels {
    async getAllCards() {
        return fetch(URL)
            .then((res) => res.json())
            .then((res) => res.map(card => {
                const author = card['_embedded']['author'].find(value => value.id === card.author);
                const topic = card['_embedded']['wp:term'][2].find(value => value.id === card.topic[0]);

                return {
                    id: card.id,
                    title: card.title['rendered'],
                    topic: {
                        id: topic ? topic.id : -1,
                        name: topic ? topic.name : 'Articles',
                    },
                    date: card.date,
                    link: card.link,
                    image: card['featured_media'],
                    author: {
                        id: author.id,
                        name: author.name,
                        link: author.link
                    }
                }
            }));
    }
}

module.exports = new CardModels();

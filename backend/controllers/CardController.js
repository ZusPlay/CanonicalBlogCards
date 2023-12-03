const Models = require('../models/CardModels')

class CardController {
    async getAllCards(_, res) {
        const task = await Models.getAllCards();
        res.status(200).json(task);
    }
}

module.exports = new CardController();

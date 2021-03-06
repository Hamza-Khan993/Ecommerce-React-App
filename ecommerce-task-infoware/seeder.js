const seeder = require("mongoose-seed")
const config = require('config');
const db = config.get('mongoURI');


seeder.connect(db, function () {
    seeder.loadModels(["./models/Product.js"])

    seeder.clearModels(["product"])
    seeder.populateModels(data, () => {
        seeder.disconnect()
    })
});


const data = [
    {
        "_id": 1,
        "name": "Simone",
        "description": "Round Side Table",
        "price": "Rs 10000",
        "images": [
            "https://cdn.shopify.com/s/files/1/0068/2302/products/pimlada-phuapradit-simone-round-side-table-white-background-SQUARE-aston-gold.jpg?v=1610449235",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/pimlada-phuapradit-simone-round-detail-gold.jpg?v=1610449238",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/pimlada-phuapradit-simone-round-detail-2-gold.jpg?v=1610449241"
        ]
    },
    {
        "_id": 2,
        "name": "French Linen Tribal Ikat",
        "description": "Credenza by Holli Zinger",
        "price": "Rs 20000",
        "images": [
            "https://cdn.shopify.com/s/files/1/0068/2302/products/holli-zollinger-french-linen-tribal-ikat-credenza-walnut-perspective-gold.jpg?v=1578673924",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/holli-zollinger-french-linen-tribal-ikat-credenza-walnut-lifestyle-gold.jpg?v=1578673924"
        ]
    },
    {
        "_id": 3,
        "name": "Dye Oval Blue Fog",
        "description": "Round Side Table",
        "price": "Rs 15000",
        "images": [
            "https://cdn.shopify.com/s/files/1/0068/2302/products/jacqueline-maldonado-dye-ovals-bue-fog-round-side-table-white-background-SQUARE-aston-gold.jpg?v=1610446154",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/jacqueline-maldonado-dye-ovals-bue-fog-round-detail-gold_3fcd0576-9a0d-4560-92ed-f167f4991454.jpg?v=1610446157",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/jacqueline-maldonado-dye-ovals-bue-fog-round-detail-2-gold.jpg?v=1610446160"
        ]
    },
    {
        "_id": 4,
        "name": "Shibora Diamonds",
        "description": "Comforters",
        "price": "Rs 12000",
        "images": [
            "https://cdn.shopify.com/s/files/1/0068/2302/products/becky-bailey-shibori-diamonds-comforter-twin-whitebg.jpg?v=1628003743",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/becky-bailey-shibori-diamonds-comforter-twin-lifestyle-side.jpg?v=1628003745",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/becky-bailey-shibori-diamonds-comforter-twin-lifestyle-front.jpg?v=1628003746"
        ]
    },
    {
        "_id": 5,
        "name": "Nora FarmHouse",
        "description": "Duvet Covers",
        "price": "Rs 5000",
        "images": [
            "https://cdn.shopify.com/s/files/1/0068/2302/products/schatzi-brown-nora-farmhouse-black-and-cream-duvet-twin-whitebg_large.jpg?v=1619857798",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/schatzi-brown-nora-farmhouse-black-and-cream-duvet-twin-lifestyle-side.jpg?v=1619857799",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/schatzi-brown-nora-farmhouse-black-and-cream-duvet-twin-lifestyle-front.jpg?v=1619857801"
        ]
    },
    {
        "_id": 6,
        "name": "Nights Sky in Navy",
        "description": "Pillow",
        "price": "Rs 2000",
        "images": [
            "https://cdn.shopify.com/s/files/1/0068/2302/products/dash-and-ash-nights-sky-in-navy-sham-whitebg.jpg?v=1619454665",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/dash-and-ash-nights-sky-in-navy-sham-lifestyle.jpg?v=1619454666",
            "https://cdn.shopify.com/s/files/1/0068/2302/products/dash-and-ash-nights-sky-in-navy-sham-detail.jpg?v=1619454668"
        ]
    }
]

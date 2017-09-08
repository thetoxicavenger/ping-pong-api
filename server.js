const {send} = require('micro')
const cors = require('micro-cors')()
const handler = (req, res) => {
    // await(dbData)
    const data = 
    `
    {
        "players": [
            {
                "id": 5,
                "name": "Chaz Burner",
                "photo": "http://res.cloudinary.com/mitchellrcravens/image/upload/v1504816151/chaz_h29ecx.jpg",
                "initials": "CB",
                "rank": 1,
                "wins": 12,
                "losses": 0
            },
            {
                "id": 12,
                "rank": 2,
                "name": "Markell Carvens",
                "photo": "http://res.cloudinary.com/mitchellrcravens/image/upload/v1504816152/markell_jvihet.jpg",
                "initials": "MC",
                "wins": 12,
                "losses": 12
            },
            {
                "id": 6,
                "rank": 3,
                "name": "Camel Mackow",
                "photo": "http://res.cloudinary.com/mitchellrcravens/image/upload/v1504816151/camel_j9uihp.jpg",
                "initials": "CM",
                "wins": 8,
                "losses": 12
            },
            {
                "id": 99,
                "rank": 4,
                "name": "Dragonosh Popa",
                "photo": "http://res.cloudinary.com/mitchellrcravens/image/upload/v1504816153/dragonosh_q3gab5.jpg",
                "initials": "DP",
                "wins": 8,
                "losses": 14
            }
        ]
    }
    `
    const statusCode = 200
    return send(res, statusCode, data)
}

module.exports = cors(handler)
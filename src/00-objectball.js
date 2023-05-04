function gameObject() {
    let teams = {
        home: {
            teamName: 'Denver Nuggets',
            colors: ['red', 'white', 'blue'],
            players: {
                'Joe': {
                    stats: {
                        "number": 0,
                        "shoe": 16,
                        "points": 22,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 3,
                        "blocks": 1,
                        "slamDunks": 1,
                    }
                },
                'John': {
                    stats: {
                        "number": 30,
                        "shoe": 14,
                        "points": 12,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 12,
                        "blocks": 12,
                        "slamDunks": 7,
                    }
                },
                'Jim': {
                    stats: {
                        "number": 11,
                        "shoe": 17,
                        "points": 17,
                        "rebounds": 19,
                        "assists": 10,
                        "steals": 3,
                        "blocks": 1,
                        "slamDunks": 15,
                    }
                },
                'Joey': {
                    stats: {
                        "number": 1,
                        "shoe": 19,
                        "points": 26,
                        "rebounds": 12,
                        "assists": 6,
                        "steals": 3,
                        "blocks": 8,
                        "slamDunks": 5,
                    }
                },
                'James': {
                    stats: {
                        "number": 31,
                        "shoe": 15,
                        "points": 19,
                        "rebounds": 2,
                        "assists": 2,
                        "steals": 4,
                        "blocks": 11,
                        "slamDunks": 1,
                    }
                }
            },
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["turqoise", "purple"],
            players: {
                "Ed": {
                    stats: {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    }
                },
                "Edd": {
                    stats: {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    }
                },
                "Eddy": {
                    stats: {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5,
                    }
                },
                "Edgar": {
                    stats: {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    }
                },
                "Elmo": {
                    stats: {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12
                    }
                }
            }
        }
    };
    return teams
};


function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}


function numPointsScored(player) {
    let object = gameObject();
    for (let team in object) {
        return (object[team].players[player].stats.points)
    }
};

function shoeSize(player) {
    let object = gameObject();
    for (let team in object) {
        return (object[team].players[player].stats.shoe)
    }
};

function teamColors(team) {
    let object = gameObject();
    for (let team in object) {
        return (object[team].colors)
    }
};

function teamNames() {
    let object = gameObject();
    let teamArray = [];
    for (let team in object) {
        teamArray.push(object[team].teamName)
    }
    return teamArray;
};

function playerNumbers(name) {
    let object = gameObject();
    const playerArray = [];

    for (let team in object) {

        if (object[team].teamName === name) {
            for (let player in object[team].players){
                playerArray.push(object[team].players[player].stats.number)
            };

        }
    }

    return playerArray;
}

function playerStats(player) {
    let object = gameObject();
    for (let team in object) {
        return (object[team].players[player].stats)
    }
};

console.time("pali")
console.log(playerStats('Joe'));
console.timeEnd("pali");

//Debugger
if (0 === 1) {
    // console.log(gameObject())
    // console.log(homeTeamName());
}

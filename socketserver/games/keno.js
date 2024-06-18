const rand = require("random-seed").create();

const GetBallRandom = async (userData) => {
    for (var i = 0; i < 20;) {
        var rNum = rand.intBetween(1, 80);
        if (userData.BallRandomNum.indexOf(rNum) !== -1) {
            continue;
        }
        userData.BallRandomNum[i] = rNum;
        i++;
    }
};

const WinCheck = async (userData) => {
    for (var i = 0; i < userData.Clicknumber; i++) {
        var num = userData.RandomArray[i] * 1;
        if (userData.BallRandomNum.indexOf(num) !== -1) {
            userData.winCount++;
        }
    }
};

const winMoney = async (userData) => {
    userData.MyWinmoney =
        userData.betBalance * userData.ListArray[userData.winCount - 1];
};

var rewardInfos = {
    2: [1, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    3: [0, 2, 47, 0, 0, 0, 0, 0, 0, 0],
    4: [0, 2, 5, 91, 0, 0, 0, 0, 0, 0],
    5: [0, 0, 3, 12, 820, 0, 0, 0, 0, 0],
    6: [0, 0, 3, 4, 70, 1600, 0, 0, 0, 0],
    7: [0, 0, 1, 2, 21, 400, 7000, 0, 0, 0],
    8: [0, 0, 0, 2, 12, 100, 1650, 10000, 0, 0],
    9: [0, 0, 0, 1, 6, 44, 335, 4700, 10000, 0],
    10: [0, 0, 0, 0, 5, 24, 142, 1000, 4500, 10000],
};

module.exports = { GetBallRandom, WinCheck, winMoney, rewardInfos };

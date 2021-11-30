function pocketMoney(coins) {
  let P = coins.sort(function (a, b) {
    return a - b;
  });
  let sCoin = 0;
  for (let i = 0; i < P.length; i++) {
    if (P[i] > sCoin + 1) {
      return sCoin + 1;
    }
    sCoin += P[i];
  }
  return sCoin + 1;
}

exports.pocketMoney = pocketMoney;

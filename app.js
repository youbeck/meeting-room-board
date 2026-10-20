// 預約時段衝突判斷（以一般 script 載入，函式為全域；index.html 與 test.html 共用）

// 找出涵蓋某日某房間某小時的預約（含連續時段）；沒有則回傳 null
function findBooking(data, dateStr, roomId, hour) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var p = keys[i].split('|');
    if (p[0] !== dateStr || p[1] !== roomId) continue;
    var s = parseInt(p[2], 10);
    if (s <= hour && hour < s + data[keys[i]].hours) return { key: keys[i], start: s, b: data[keys[i]] };
  }
  return null;
}

export function Triangle(size) {

  var rows = [];

  (function() {
    for (var i = 0; i < size; i++) {

      if (i === 0) {
        rows.push([1]);
        continue;
      }

      if (i === 1) {
        rows.push([1, 1]);
        continue;
      }

      var row = [1];

      var lastRow = rows[i-1];
      for (var j = 1; j < i; j++) {
        row.push(lastRow[j-1] + lastRow[j]);
      }

      row.push(1);
      rows.push(row);

    }
  })();

  return {
    rows: rows,
    lastRow: rows[rows.length-1]
  }
}
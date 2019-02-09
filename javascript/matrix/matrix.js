export function Matrix(value) {

  var rows = [];
  var columns = [];

  (function() {

    var chunks = value.split('\n');
    for (let x = 0; x < chunks.length; x++) {

      var row = [];
      rows.push(row);

      var items = chunks[x].split(' ');
      for (let y = 0; y < items.length; y++) {

        var column = columns[y];
        if (column == null) {
          column = [];
          columns.push(column);
        }

        var number = Number.parseInt(items[y]);

        row.push(number);
        column.push(number)

      }

    }

  })();

  return {
    rows: rows,
    columns: columns,
  };

}
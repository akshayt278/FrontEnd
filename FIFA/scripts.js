function filterPlayersByPosition() {
  var position = document.getElementById("filter-position").value;
  var table = document.getElementById("players-table");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    var positionCell = rows[i].getElementsByTagName("td")[1];
    if (position === "" || positionCell.textContent === position) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

function sortPlayersByRating() {
  var table = document.getElementById("players-table");
  var rows = table.rows;
  var switching = true;
  var shouldSwitch;

  while (switching) {
    switching = false;

    for (var i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      var ratingCellCurrent = rows[i].getElementsByTagName("td")[2];
      var ratingCellNext = rows[i + 1].getElementsByTagName("td")[2];

      if (parseInt(ratingCellCurrent.innerHTML) < parseInt(ratingCellNext.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

document.getElementById("filter-position").addEventListener("change", filterPlayersByPosition);
document.getElementById("players-table").getElementsByTagName("th")[2].addEventListener("click", sortPlayersByRating);
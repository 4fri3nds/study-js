function showTitle() {
  alert(this.title);
}

var objectA = {
  "title": "Title A",
  "showTitle": showTitle
};

var objectB = {
  "title": "Title B",
  "showTitle": showTitle
};

objectA.showTitle();
objectB.showTitle();
let el = document.getElementById('div');
let wrap = document.getElementById('wrap');


while (nodeArray.length !== 0) {
  nodeArray[0].parentNode.removeChild(nodeArray[0]);
}
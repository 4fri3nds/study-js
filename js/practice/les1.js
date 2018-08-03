let result4 = document.getElementById('result4');
let result5 = document.getElementById('result5');
let result6 = document.getElementById('result6');
let result7 = document.getElementById('result7');
let result8 = document.getElementById('result8');
let result9 = document.getElementById('result9');
let result10 = document.getElementById('result10');

let but4 = document.getElementById('but4');
let but5 = document.getElementById('but5');
let but6 = document.getElementById('but6');
let but7 = document.getElementById('but7');
let but8 = document.getElementById('but8');
let but9 = document.getElementById('but9');
let but10 = document.getElementById('but10');

let input9 = document.getElementById('input9');
let input10 = document.getElementById('input10');
//1 task
let el4 = '-';
for (let i = 9; i >= 1; i--) {
  el4 += (i+'-');
}

but4.onclick = () => div(el4, result4);

//2 task
let pyr5 = function () {
  for (let i = 1; i <= 10; i++) {
    let div = document.createElement('div');
    for (let z = 1; z <= i; z++) {
      let span = document.createElement('span');
      span.innerHTML = 'x';
      div.appendChild(span);
      result5.appendChild(div);
    }
  }
};

but5.onclick = () => pyr5();

//3 task
let pyr6 = function () {
  for (let i = 1; i < 10; i++) {
    let div = document.createElement('div');
    for (let z = 1; z <= i; z++) {
      let span = document.createElement('span');
      span.innerHTML = i;
      div.appendChild(span);
      result6.appendChild(div);
    }
  }
};

but6.onclick = () => pyr6();

//4 task
let pyr7 = function () {
  for (let i = 1; i < 10; i++) {
    let div = document.createElement('div');
    for (let z = 1; z <= i; z++) {
      let span = document.createElement('span');
      span.innerHTML = 'xx';
      div.appendChild(span);
      result7.appendChild(div);
    }
  }
};

but7.onclick = () => pyr7();

//5 task
let cell8 = function (str, eter) {
  for (let i = 0; i < eter; i++) {
    let div = document.createElement('div');
    if (i % 2 !== 0) {
      div.innerHTML = '&nbsp;&nbsp;';  
    }
    for (let z = 0; z < eter; z++) {      
      let span = document.createElement('span');
      span.innerHTML = str;  
      
      div.appendChild(span);
      result8.appendChild(div);
    }
  }
};

but8.onclick = () => cell8('x ', 5);

//6 квадрат
let quoter9 = function(leng) {
  let st = '|';
  let ly = '_';
  let sp = '&nbsp;';
  
  for (let z = 0; z < leng/2; z++) {
    let str = '';
    
    for (let i = 0; i < leng; i++) {
      if (z == 0) {
        str = sp + ly.repeat(leng);
        break;
      }

      if (z == Math.round(leng/2-1) ) {
        str = st + ly.repeat(leng) + st;
        break;
      }

      str = st + sp.repeat(leng*2) + st;    
    }
    div(str, result9, false, false);
  }   
};

but9.onclick = () => quoter9(input9.value);

//7 triangle
let triangle10 = function(len) {
  let sp = '&nbsp;';
  let lt = '&#92;';
  let rt = '&frasl;';
  let ly = '_';

  let lenIn = (size) => '&nbsp;'.repeat(size * 4);
  let lenOut = (size) => '&nbsp;'.repeat(size * 2);

  let str = lenOut(len) + rt + lt;
  
  for (let i = 0; i < len; i++) {
    let outK = len;
    let inK = 0;
    
    for (let z = 0; z < i; z++) {
      outK--;
      inK++;

      if(i == len-1) {
        str = sp + sp + rt + ly.repeat(inK*2) + lt;
        continue;
      };

      str = lenOut(outK) + rt + lenIn(inK) + lt;
    }
    div(str, result10, false, false);      
  }
};

input10.addEventListener('change', function createTriangle10() {
  return triangle10(parseInt(this.value));
});
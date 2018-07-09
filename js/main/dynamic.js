var JSON = {
  menu: [
    { title: 'Practice Module 1', 
      submenu: [
        { linkname: 'DOM, elems', link: '../practice/lesson1.html'},
        { linkname: 'input, events', link: '../practice/lesson2.html'},
        { linkname: 'array, string', link: '../practice/lesson3.html'},
        { linkname: 'length, functions', link: '../practice/lesson4.html'},
        { linkname: 'numbers, sort', link: '../practice/lesson5.html'},
        { linkname: 'interval, imgs, clone', link: '../practice/lesson6.html'},
        { linkname: 'Mouse&key-events', link: '../practice/lesson7.html' }, 
        { linkname: 'num, timers', link: '../practice/lesson8.html' }, 
        { linkname: 'check, radio', link: '../practice/lesson9.html' }]
    },
    { title: 'Practice Module 2',
      submenu: [
        { linkname: 'tables, random, sort', link: '../practice/lesson10.html' },
        { linkname: 'this', link: '../practice/lesson11.html' }, 
        { linkname: 'array', link: '../practice/lesson12.html' },
        { linkname: 'functions', link: '../practice/lesson13.html' },
        { linkname: 'closures', link: '../practice/lesson14.html' },
        { linkname: 'lesson-15', link: '../practice/lesson15.html' },
        { linkname: 'lesson-16', link: '../practice/lesson16.html' },
        { linkname: 'lesson-17', link: '../practice/lesson17.html' },
        { linkname: 'lesson-18', link: '../practice/lesson18.html' }]
    },
    { title: 'Theory Primary',
      submenu: [
        { linkname: 'Data types', link: '../theory/data-types.html'},
        { linkname: 'Массивы', link: '../theory/Array.html' },
        { linkname: 'Обьекты', link: '../theory/object.html' },
        { linkname: 'Функции', link: '../theory/functions.html'},
        { linkname: 'Dom, Bom', link: '../theory/dom.html' },
        { linkname: 'Events', link: '../theory/events.html' },
        { linkname: 'Sort, Enum', link: '../theory/enumeration.html' },
        { linkname: 'Styles', link: '../theory/styles.html' },
        { linkname: 'Animation', link: '../theory/animation.html' }]
      },
      { title: 'Theory Advanced',
      submenu: [
        { linkname: 'Callback', link: '../theory/callback.html' },
        { linkname: 'Замыкания', link: '../theory/closures.html' },
        { linkname: 'Классы', link: '../theory/clases.html' },
        { linkname: 'OOP', link: '../theory/oop.html' },
        { linkname: 'Прототипы', link: '../theory/proto.html' },
        { linkname: 'json, ajax', link: '../theory/json.html' },
        { linkname: 'Native JS', link: '../theory/native-js.html' },
        { linkname: 'TypeScript', link: '../theory/typescript.html' },
        { linkname: 'EcmaScript', link: '../theory/ecmascript.html' }]
    }],

  breadcrumps: [
    { linkname: 'Dashboard',link: '#'},
    { linkname: 'Main',link: '#'},
    { linkname: 'Home',link: '#'}
  ],

  extramenu: [
    { linkname: 'dom',link: '#'},
    { linkname: 'history',link: '#'},
    { linkname: 'preforences',link: '#'},
    { linkname: 'administration',link: '#'},
    { linkname: 'log out',link: '#'},
    { linkname: '&#8679;',link: '#'}
  ]

};

function parseDom(elem, parse) {
  let ul = document.createElement('ol');
  
  elem.appendChild(ul);
  
  for(let i = 0; i < parse.length; i++) {
    let a = document.createElement('a'),
        h5 = document.createElement('h5'),
        li = document.createElement('li');

    ul.appendChild(li);   

    if(parse[i].title) {
      li.appendChild(h5)
      h5.innerHTML = parse[i].title;
    };
    
    if(parse[i].linkname) {
      li.appendChild(a);
      a.innerHTML = parse[i].linkname;
      a.setAttribute('href', parse[i].link);
    };

    if(parse[i].submenu) {
      parseDom(li, parse[i].submenu)
    };
  }
  
  hljs.initHighlightingOnLoad();
};

parseDom(document.getElementById('menu'), JSON.menu);

let breadcrumps = document.getElementById('bread-crumps');
let extramenu = document.getElementById('extra-menu');

if (breadcrumps) {
  parseDom(breadcrumps, JSON.breadcrumps);
}

if (extramenu) {
  parseDom(extramenu, JSON.extramenu);
}

  
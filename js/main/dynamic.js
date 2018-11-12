var JSON = {
  menu: [
    { title: 'Practice', 
      submenu: [
        { linkname: '1. Logic, drawing', link: '../practice/lesson1.html'},
        { linkname: '2. Рекурсия', link: '../practice/lesson2.html'},
        { linkname: '3. Конструктор', link: '../practice/lesson3.html'},
        { linkname: '4. Sort', link: '../practice/lesson5.html'},
        { linkname: '5. Interval', link: '../practice/lesson6.html'},
        { linkname: '6. Events', link: '../practice/lesson7.html' }, 
        { linkname: '7. Radio', link: '../practice/lesson9.html' }]
    },
    { title: 'Practice',
      submenu: [
        { linkname: '10. Random', link: '../practice/lesson10.html' },
        { linkname: '11. This', link: '../practice/lesson11.html' }, 
        { linkname: '12. Array', link: '../practice/lesson12.html' },
        { linkname: '13. Functions', link: '../practice/lesson13.html' },
        { linkname: '14. Closures', link: '../practice/lesson14.html' },
        { linkname: '15. Ecmascript', link: '../practice/lesson15.html' }
      ]
    },
    { title: 'Data',
      submenu: [
        { linkname: 'Data types', link: '../theory/data-types.html'},
        { linkname: 'Массивы', link: '../theory/Array.html' },
        { linkname: 'Обьекты', link: '../theory/object.html' },
        { linkname: 'Функции', link: '../theory/functions.html'},
        { linkname: 'Dom', link: '../theory/dom.html' },
        { linkname: 'Events', link: '../theory/events.html' },
        { linkname: 'Styles', link: '../theory/styles.html' }],
      },
      { title: 'OOP',
      submenu: [
        { linkname: 'Enumeration', link: '../theory/enumeration.html' },
        { linkname: 'Callback', link: '../theory/callback.html' },
        { linkname: 'Замыкания', link: '../theory/closures.html' },
        { linkname: 'Class', link: '../theory/clases.html' },
        { linkname: 'OOP', link: '../theory/oop.html' },
        { linkname: 'Прототипы', link: '../theory/proto.html' }],
      },
      { title: 'API',
      submenu: [
        { linkname: 'Json, ajax', link: '../theory/json.html' },
        { linkname: 'Native JS', link: '../theory/native-js.html' },
        { linkname: 'Methods', link: '../theory/methods.html' },
        { linkname: 'Animation', link: '../theory/animation.html' },
        { linkname: 'EcmaScript', link: '../theory/ecmascript.html' }]
      },
      { title: 'Apps',
        submenu: [
          { linkname: 'Калькулятор', link: '../programs/calc.html' },
          { linkname: 'Кофеварка', link: '../programs/coffe.html' },
          { linkname: 'Календарь', link: '../programs/calendar.html' }
        ]
    }],

  breadcrumps: [
    {
      linkname: '<i class="fas fa-home home-link"></i>',link: './../../index.html'},
    {
      linkname: '<i class="fab fa-fort-awesome-alt sandbox-link"></i>',link: './../main/costum.html'},
    { 
      linkname: '<i class="fas fa-cookie cookie-link"></i>',link: './../theory/data-types.html'
    }
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

//parse menu
function parseDom(elem, parse) {
  let ul = document.createElement('ul');
  
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

    if(parse[i].submenu) parseDom(li, parse[i].submenu)
  }
  
  hljs.initHighlightingOnLoad();
};

parseDom(document.getElementById('menu'), JSON.menu);

//breadcrumps
let breadcrumps = document.getElementById('bread-crumps');
let extramenu = document.getElementById('extra-menu');

if (breadcrumps) parseDom(breadcrumps, JSON.breadcrumps);

if (extramenu) parseDom(extramenu, JSON.extramenu);

//tabs
function openMark(evt, mark) {
  window.scrollTo(0,0);

  window.addEventListener('scroll', unstick);

  let nav = document.getElementsByClassName('tabs-nav-item'),
    content = document.getElementsByClassName('tabs-content-item');

  for (let i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(' active', '');
    content[i].className = content[i].className.replace(' active', '');
  };

  evt.currentTarget.className += ' active';
  document.getElementById(mark).className += ' active';
};

//sticky aside
let sticky = {
  elem: document.getElementsByClassName("tabs-nav-list")[0],

  offsetCollapseMenu: 227,
  offsetOpenMenu: 477,
  marginTop: 80,

  unstickPosition: 45,
  getPosition: function() {
    return this.elem.getBoundingClientRect().top
  }
};

unstick = () => {
  window.pageYOffset >= 215
    ? sticky.elem.classList.add("sticky")
    : sticky.elem.classList.remove("sticky")
}

if (sticky.elem) window.addEventListener('scroll', unstick);

//collapse menu in header
// let headerMenu = {
//   menu: document.getElementById('menu'),
//   h5: this.menu.getElementsByTagName('h5')
// }

// for (let i = 0; i < headerMenu.h5.length; i++) {
//   headerMenu.h5[i].addEventListener('click', function () {
//     if (headerMenu.menu.className != 'active') {
//       headerMenu.menu.className = 'active';
//     } else {
//       headerMenu.menu.className = '';
//     }
//   });
// };
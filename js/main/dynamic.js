var JSON = {
  menu: [
    { title: 'Practice Module 1', 
      submenu: [
        { linkname: '1. logic, drawing', link: '../practice/lesson1.html'},
        { linkname: '2. Рекурсия', link: '../practice/lesson2.html'},
        { linkname: '3. Конструктор', link: '../practice/lesson3.html'},
        { linkname: '4. empty yet', link: '../practice/lesson4.html'},
        { linkname: '5. numbers, sort', link: '../practice/lesson5.html'},
        { linkname: '6. interval', link: '../practice/lesson6.html'},
        { linkname: '7. Mouse&key-events', link: '../practice/lesson7.html' }, 
        { linkname: '8. empty yet', link: '../practice/lesson8.html' }, 
        { linkname: '9. check, radio', link: '../practice/lesson9.html' }]
    },
    { title: 'Practice Module 2',
      submenu: [
        { linkname: '11. random, sort', link: '../practice/lesson10.html' },
        { linkname: '12. this', link: '../practice/lesson11.html' }, 
        { linkname: '13. array', link: '../practice/lesson12.html' },
        { linkname: '14. functions', link: '../practice/lesson13.html' },
        { linkname: '15. closures', link: '../practice/lesson14.html' },
        { linkname: '16. lesson-15', link: '../practice/lesson15.html' },
        { linkname: '17. lesson-16', link: '../practice/lesson16.html' },
        { linkname: '18. lesson-17', link: '../practice/lesson17.html' },
        { linkname: '19. lesson-18', link: '../practice/lesson18.html' }]
    },
    { title: 'Theory Primary',
      submenu: [
        { linkname: 'Data types', link: '../theory/data-types.html'},
        { linkname: 'Массивы', link: '../theory/Array.html' },
        { linkname: 'Обьекты', link: '../theory/object.html' },
        { linkname: 'Функции', link: '../theory/functions.html'},
        { linkname: 'Dom', link: '../theory/dom.html' },
        { linkname: 'Events', link: '../theory/events.html' },
        { linkname: 'Enumeration', link: '../theory/enumeration.html' },
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

//collapse menu in header
let headerMenu = {
  menu: document.getElementById('menu'),
  h5: this.menu.getElementsByTagName('h5')
}

for (let i = 0; i < headerMenu.h5.length; i++) {
  headerMenu.h5[i].addEventListener('click', function () {
    if (headerMenu.menu.className != 'active') {
      headerMenu.menu.className = 'active';
    } else {
      headerMenu.menu.className = '';
    }
  });
};

//tabs
function openMark(evt, mark) {
  window.scrollTo(0,80);

  window.addEventListener('scroll', unstickAside);

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
  elem: document.getElementsByClassName('tabs-nav-list')[0],
  offsetCollapseMenu : 227,
  offsetOpenMenu : 477,
  marginTop : 51,
  mt: function() {
    return this.elem.getBoundingClientRect().top;
  },
  stick: function() {
    return this.mt() 
  },
};


function stickAside() {
  sticky.elem.style.position = 'fixed';

  if (menu.className != 'active') {
    if (window.pageYOffset < sticky.offsetCollapseMenu - sticky.marginTop) {
      window.removeEventListener('scroll', stickAside);
      window.addEventListener('scroll', unstickAside);
    }
  } else {
    if (window.pageYOffset < sticky.offsetOpenMenu - 80) {
      window.removeEventListener('scroll', stickAside);
      window.addEventListener('scroll', unstickAside);
    }
  }
};

function unstickAside() {
  sticky.elem.style.position = 'relative';
  
  if (sticky.mt() < sticky.marginTop) { 
    window.addEventListener('scroll', stickAside);
    window.removeEventListener('scroll', unstickAside);
  }
};

if (sticky.elem) window.addEventListener('scroll', unstickAside);

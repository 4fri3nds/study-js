let methodsListJson = {
  string: [
    {
      title: "charAt",
      description: "возвращает указаный символ",
      syntax: "'str'.charAt(2)",
      output: "r",
      fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum necessitatibus id cupiditate voluptas.Consequuntur, ex quam tenetur animi excepturi temporibus sit ipsum quo libero labore avoluptate eligendi nisi!"
    },
    {
      title: "charAt2",
      description: "возвращает указаный символ",
      syntax: "'str'.charAt(2)",
      output: "r",
      fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum necessitatibus id cupiditate voluptas.Consequuntur, ex quam tenetur animi excepturi temporibus sit ipsum quo libero labore avoluptate eligendi nisi!"
    }
  ],
  object: [
    {
      title: "charAt",
      description: "возвращает указаный символ",
      syntax: "'str'.charAt(2)",
      output: "r",
      fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum necessitatibus id cupiditate voluptas.Consequuntur, ex quam tenetur animi excepturi temporibus sit ipsum quo libero labore avoluptate eligendi nisi!"
    },
    {
      title: "charAt2",
      description: "возвращает указаный символ",
      syntax: "'str'.charAt(2)",
      output: "r",
      fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum necessitatibus id cupiditate voluptas.Consequuntur, ex quam tenetur animi excepturi temporibus sit ipsum quo libero labore avoluptate eligendi nisi!"
    }
  ]
};

for (key in methodsListJson) {
  methodsListJson[key].forEach(() => 1 )
}


// let methods = document.getElementsByClassName('meth-list');

// for(let i = 0; i < methods.length; i++) {
//   let method = methods[i].getElementsByClassName('meth-item');
//   for (let z = 0; z < method.length; z++) {
//     let titleElem = method[z].querySelector(".meth-title");
//     let descriptionElem = method[z].querySelector(".meth-desc");
//     let syntaxElemElem = method[z]
//       .querySelector(".meth-ex")
//       .querySelector(".ex-syntax");
//     let resultElem = method[z]
//       .querySelector(".meth-ex")
//       .querySelector(".ex-result");
//     let fullDescElem = method[z].querySelector(".meth-full_desc");
//   }
// }
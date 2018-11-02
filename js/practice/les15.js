//1 Promise
let but1 = document.getElementById('but1');
let imgCont1 = document.getElementById("img-container1");
let title1 = document.getElementById('title1');
let but2 = document.getElementById('but2');
let imgCont2 = document.getElementById("img-container2");
let title2 = document.getElementById('title2');
let error2 = document.getElementById('error2');
let but3 = document.getElementById('but3');
let сont3 = document.getElementById("container3");
let title3 = document.getElementById('title3');
let result3 = document.getElementById('error3');

let img = new Image([100])

const url1 = "./../../assets/coffe.jpeg"
const url2 = "./../../assets/1f2b373a6a7e4b889e1eb18c270bcfe8.png"
const url3 = "./../../assets/4d84ac86aaa8de45acf34a16ae928191.png"
img.src = url1
function delay(timer) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
            console.log('resolved!')
        }, timer)
    })
}

but1.onclick = function() {
    const promise = delay(1000)
    
    promise
      .then(() => imgCont1.append(img))
      .then(() => (title1.innerHTML = "Promise Resolved"))
      .then(() => console.log(3))
}

// task 2
function loadImg(url) {
    return new Promise(resolve=> {
        let img = new Image()
        img.height = 200
        img.src = url
        imgCont2.append(img)
        div(url + ' : 300ok', error2)
        img.onload = () => resolve('Цепочка промисов запущена') //
        // отсюда начинается цепочка промисов
    })
}
but2.onclick = () => {   
    loadImg(url2)
        .then((value) => div(value,error2)).catch(() => div("не работает", error2)) 
        .then(() => loadImg(url4)).catch(() => div("url4 - 404", error2)) 
        .then(() => {
            loadImg(url3)
            return 123
            }).catch(() => div("url3 - 404", error2)) 
        .then(() => loadImg(url2)).catch(() => div("url2 - 404", error2))
        .then(() => title2.innerText = "Done").catch( () => div("url2 - 404", error2))
}
    
// task 3

function delay3(timer) {
    return new Promise(resolve => 
        setTimeout( () => resolve(div("Функция сработала", result3) ), timer))
   
}
async function func3 () {
    await delay3(1000);
    await delay3(1000);
    await delay3(1000);  
} 
but3.onclick = () => { 
    func3()
}
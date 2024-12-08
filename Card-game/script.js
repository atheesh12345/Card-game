const cardItems = ["Orrange","Apple","Peach","Mango","Banana","Orrange","Apple","Peach","Mango","Banana"];
const cardele = document.getElementById("cards");
const restartele = document.getElementById("restart");
const guideEle = document.getElementById("guide");
const desctiptionele = document.getElementById("description");
const closeEle = document.getElementById("close");
const wonEle = document.getElementById("won");
clickedButtons = [];

function shufflecards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
let shuffleArray = shufflecards(cardItems);


function showcards(array){
    cardele.innerHTML="";
    array.map((card,name) => {
        const button = document.createElement("button"); 
        button.textContent = card;
        button.value = name;
        cardele.appendChild(button);
        button.classList.add("card")
        button.addEventListener("click", () => {
          selectAnswer(card,button);
        }); 
    })
}

function selectAnswer(fn,ele){
    clickedButtons.push(fn)
    
    if(clickedButtons.length < 2){  
      ele.classList.add("card_open");
      ele.classList.remove("card");
    }
    else if(clickedButtons.length == 2){
      if(clickedButtons[0] == clickedButtons[1]){
        ele.classList.remove("card");
        ele.classList.add("card_open");
          afterwon()
      }
      else{  
       ele.classList.add("card_open")
       ele.classList.remove("card");
       clickedButtons.pop(fn)
       setTimeout(() => {
        ele.classList.add("card")
        }, 1000);
      }
    };
}

console.log(shuffleArray);
showcards(shuffleArray);

function afterwon(){
  wonEle.classList.remove("hide"); 
}

restartele.addEventListener("click", ()=>{
  shufflecards(cardItems);
  showcards(shuffleArray);
  console.log(shuffleArray);
  clickedButtons =[];
  wonEle.classList.add("hide");
})

guideEle.addEventListener("click",()=>{
  desctiptionele.classList.remove("hide");
  cardele.classList.add("hide");
});

closeEle.addEventListener("click",()=>{
  desctiptionele.classList.add("hide");
  cardele.classList.remove("hide");
});





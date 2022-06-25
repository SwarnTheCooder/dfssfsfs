var input
var button
var Words
var Bulls
var Cows
var r
var comp
var player


var y=80

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  input=createInput()
  input.position(100,100)
  input.attribute("placeholder","enter your word")
  input.style("textAlign","center")

  button=createButton("play")
  button.position(100,150)
  button.style("width","50px")
  button.style("height","50px")
  button.style("borderRadius","50px")
  button.mousePressed(logic)

  Words=createElement("h2")
  Words.html("Words")
  Words.position(500,50)

  Bulls=createElement("h2")
  Bulls.html("Bulls")
  Bulls.position(700,50)

  Cows=createElement("h2")
  Cows.html("Cows")
  Cows.position(900,50)

  r=Math.round(random(0,s.length-1))
  console.log(r)

  comp=s[r]
  console.log(comp)
}

function draw() {
  background("red"); 

  
}

function logic() {
  var bn=0
  var cn=0
if (input.value().length !=4 ) {
alert("Please enter four letter word")
}
player=input.value().toLowerCase()
console.log(player)
//this are conditon for ck bulls
if (comp.charAt(0)===player.charAt(0)){
bn+=1
}
if (comp.charAt(1)===player.charAt(1)){
  bn+=1
  }
  if (comp.charAt(2)===player.charAt(2)){
    bn+=1
    }
    if (comp.charAt(3)===player.charAt(3)){
      bn+=1
      } 
//this are conditon for ck cows   
if(comp.charAt(0)===player.charAt(1)||comp.charAt(0)===player.charAt(2)||comp.charAt(0)===player.charAt(3)) {
  cn+=1
}
 if(comp.charAt(1)===player.charAt(0)||comp.charAt(1)===player.charAt(2)||comp.charAt(1)===player.charAt(3)){
cn+=1
}
 if(comp.charAt(2)===player.charAt(0)||comp.charAt(2)===player.charAt(1)||comp.charAt(2)===player.charAt(3)){
  cn+=1
  }
  if(comp.charAt(3)===player.charAt(0)||comp.charAt(3)===player.charAt(1)||comp.charAt(3)===player.charAt(2)){
    cn+=1
    }
  
    if(input.value().length===4){
      for (var i=0;i<s.length;i++) {
      if(s.includes(player)){break}
    }
    if (i<s.length){
      var wordresult=createElement("h3")
      wordresult.html(player)
      wordresult.position(500,y)

      var bullresult=createElement("h3")
      bullresult.html(bn)
      bullresult.position(700,y)

      var cowresult=createElement("h3")
      cowresult.html(cn)
      cowresult.position(900,y)
      y=y+25
    }
    else{alert("invalid world")}
    }
    if(bn===4){
     alert("You Won!!!!")
    }

}

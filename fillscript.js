var q=[
    "Karmugilan went to <span id='ques' ondrop='drop(event)' ondragover='allowDrop(event)'>__________</span> for higher studies",
    "<span id='ques' ondrop='drop(event)' ondragover='allowDrop(event)'>_______</span> broke out in the near by villages",
    "He got <span id='ques' ondrop='drop(event)' ondragover='allowDrop(event)'>____________</span> the disease",
    "The villagers , built a <span id='ques' ondrop='drop(event)' ondragover='allowDrop(event)'>_______</span> on his memory",
    "கீழ்கண்வற்றுள் எது திடப்பொருள்? <span id='ques' ondrop='drop(event)' ondragover='allowDrop(event)'>_______</span>"];

    
var a=["London","Cholera","infected by","memorial","ஆப்பிள்"];

var qElm=document.getElementById("qElm");
var score=0;

var curQ=0;

function loadQuestion(){
    if(curQ<q.length)
    {
    document.getElementById("quesText").innerHTML=q[curQ];
    document.getElementById("no").innerHTML=curQ+1;
    }else{
        document.getElementById("quesText").innerHTML="Your Score is "+score+"<br> Go to Home";
    }
}

function drag(ev){
   
    ev.dataTransfer.setData("text",ev.target.id);
    console.log(ev.target.id);
}

function allowDrop(ev){
    ev.preventDefault();
}

function drop(ev){
    ev.preventDefault();
    var d=ev.dataTransfer.getData("text");
    console.log(d);
    var x=document.getElementById(d).innerHTML;
    ev.target.innerHTML=x;
    if(x==a[curQ]){
        score+=10;
        document.getElementById("quesText").innerHTML+="<p id='green'>Right Answer ! ! !</p>";
        document.getElementById("score").innerHTML="Score is "+score;
    }else{
        document.getElementById("quesText").innerHTML+="<p id='red'>Wrong Answer ! ! !</p>"
    }
}

function moveNext(){
    curQ++;
    loadQuestion();
}
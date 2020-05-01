var q=[
    "Nauranang is in Himachal Pradesh",
    "The battle of Nauranang lasted for three days",
    "Jaswant decided to stay in his post",
    "Jaswant was captured alive",
    "According to the Indian army, Jaswant is still serving"];
var a=[0,1,0,0,1];

var qElm=document.getElementById("ques");
var score=0;

var curQ=0;

function loadQuestion(){
    document.getElementById("ques").innerHTML=q[curQ];
    document.getElementById("no").innerHTML=curQ+1;
}


function checkAnswer(x){
    console.log(x);
    if(a[curQ]==x){
        score+=10;
        document.getElementById("score").innerHTML="Right Answer, Score is "+score;
        curQ++;
        if(curQ<5){
        loadQuestion();
        }else{
            document.getElementById("ques").innerHTML="Your Score is "+score+"<br> Go to Home";
        }
    }else{
        document.getElementById("score").innerHTML="Wrong Answer, Score is "+score;
        loadQuestion();
    }
}
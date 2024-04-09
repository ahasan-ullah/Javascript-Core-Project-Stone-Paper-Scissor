const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreText=document.querySelector("#user-score");
const compScoreText=document.querySelector("#computer-score");

let userScore=0;
let computerScore=0;

const genCompChoice=()=>{
	const options=["rock","paper","scissor"];
	const index=Math.floor(Math.random()*3);
	return options[index];
};

const draw=()=>{
	msg.innerText="Game Draw.Play Again";
	msg.style.backgroundColor = "#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
	if(userWin){
		userScore++;
		userScoreText.innerText=userScore;
		msg.innerText="You win! Your "+userChoice+" beats "+compChoice;
		msg.style.backgroundColor = "green";
	}
	else{
		computerScore++;
		compScoreText.innerText=computerScore;
		msg.innerText="You lost! Your "+compChoice+" beats "+userChoice;
		msg.style.backgroundColor = "red";
	}
};

const playGame=(userChoice)=>{
	const compChoice=genCompChoice();
	if(userChoice===compChoice){
		draw();
	}
	else{
		let userWin=true;
		if(userChoice==="rock"){
			userWin= compChoice==="paper"?false:true;
		}
		else if(userChoice==="paper"){
			userWin= compChoice==="scissor"?false:true;
		}
		else{
			userWin= compChoice==="rock"?false:true;
		}
		showWinner(userWin,userChoice,compChoice);
	}
};

choices.forEach((choice)=>{
	choice.addEventListener("click",()=>{
		const userChoice=choice.getAttribute("id");
		playGame(userChoice);
	});
});
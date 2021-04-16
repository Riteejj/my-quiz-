class Quiz {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question= new Question()
      question.display();
    }

    
  }

  play(){
    question.hide();
background("blue");
fill("red");
textSize(30);
text("Result of the quiz",340,50);
text("____________________")


    Contestant.getcontestantInfo();

  

    
    if(allcontestants !== undefined){
debugger;
      var y=230;
      fill("lime");
      textSize(20);
      text("*NOTE:Contestant who answered correct are highlited in green color")

        

       for(var plr in allcontestants){
         debugger;
         var correct="2";
         if(correct===allcontestants[plr].answer){
           fill("green");
         }
         else{
           fill("yellow")
         }
         y+=30
         textSize(25);
       text(allcontestants[plr].name+":"+allcontestants[plr].answer,250,y);
       }
       
      }

    }

    
  }
  
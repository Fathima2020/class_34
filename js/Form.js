class Form {
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

       this. input.position(50,150);
    
        
      this. button.position(250,200);


      this. button.mousePressed(()=>{
          this.button.hide();
          this.input.hide();
            player.name= this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();

           // greeting.html("WELCOME "+ name1+" "+ name2);

           this. greeting.html("WELCOME "+ player.name);
           this. greeting.position(130,350);

        })
        


        
    }
}
class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter the answer");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
 this.question = createElement('h3')
 this.op1 = createElement('h4')
 this.op2 = createElement('h4')
 this.op3 = createElement('h4')
 this.op4 = createElement('h4')

    this.message = createElement("h2")
  }

  hide(){
    


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
   
    //Create html() and position() for each question, input and answers.
     this.question.html("Question:- In which Continent does turkey reside?");
    this.question.position(20,50);
     
  this.op1.html("1-Asia");
    this.op1.position(15,100);

    this.op2.html("2-Europe");
    this.op2.position(15,120);

    this.op3.html("3-Both A & B");
    this.op3.position(15,140);

    this.op4.html("4-I Don't know");
    this.op4.position(15,160);
    
    this.input1.position(150, 230);
    this.input2.position(150,250);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html('Thank You your response has been submitted');
    this.message.position(250,200);
    
    this.question.hide();
    this.op1.hide();
    this.op2.hide();
    this.op3.hide();
    this.op4.hide();
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    
   
    })


  }
}

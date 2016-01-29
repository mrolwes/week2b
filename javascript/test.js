//var first_name = "mary"; two forward 
//slashes mean a single line comment
//var last_name = "rolwes";

/*   BLOCK COMMENT  */



//Bad variable names (errors!!!)
//var first name = "";
//var 2first_name = "";
//var keywords, such as time or date or random or string.

//operators
//"=" assigns values
//"+=" (concatenation assignment operator, with string) adds to whatever the variable currently has

//output variable to the console !!!


//Good night, *good night*! Parting is such sweet *sorrow*, that I shall say good *night* till it be *morrow*. --William *Shakespeare*

var static_words1 = "Good night, ";
var static_words2 = "Parting is such sweet ";
var static_words3 = ", that I shall say good ";
var static_words4 = "till it be ";
var static_words5 = "--William";


//create a variable that is used as a referrene to your form button
//we use the unique ID attribute to do this

var button = document.getElementById("submit");

//then we add the ability to have a mouse clidk fire of a function when clicked on 

button.addEventListener("click", onClick, false);

function onClick(evt)

{
    evt.preventDefault(evt); //this line stops the form from submitting 
    //Forms
    var element1 = document.getElementById("form1").elements.item(0).value;
    var element2 = document.getElementById("form1").elements.item(1).value;
    var element3 = document.getElementById("form1").elements.item(2).value;
    var element4 = document.getElementById("form1").elements.item(3).value;
    var element5 = document.getElementById("form1").elements.item(4).value;
    console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
    
}
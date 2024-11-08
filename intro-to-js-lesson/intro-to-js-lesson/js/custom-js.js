//The first thing we are going to do is check to see if our page has been fully rendered

document.addEventListener('DOMContentLoaded', (loaded) => {

    //LAB-03
    
    console.log('JavaScript Sucks!!');

    document.getElementById("main").innerHTML = "<h4>Lab-03</h4>" +
     "<p>Lab-03 is easy</p>" +
       "<img src='./img/logo.png' alt='header logo'>";

    document.getElementById("main").style.cssText = "display: flex; height: 200px; background-color: #f5b7b1; align-item: center;"

    //now let's test to make sure our connection is working
    console.log('Our JS is working!!');

    //declare our variables
    let a = 200;
    let b = 100;
    let c = a + b;

    //the const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;

    //now let's use these variables to output the values to our html
    document.getElementById("ex1").innerHTML = "<h4> JavaScript Variables </h4>" +
    "<p>Let : The value of c is: " + c + "</p>" +
    "<p>Const : The value of total is: " + total + "</p>";

    //now we will style our text
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";

    //now our Global Header
    document.getElementById("lesson-global-header").innerHTML = 
    "<div id = 'logo-container'>" +
        "<a href = '#'>" +
            "<img src = './img/logo.png' alt = 'header logo'>" +
        "</a>" + 
        "</div>" +
        "<nav><menu>" +
            "<li><a href = '#'>Item1 </a></li>" +
            "<li><a href = '#'>Item2 </a></li>" +
            "<li><a href = '#'>Item3 </a></li>" +
        "</menu></nav>";

    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;"

 

}); 
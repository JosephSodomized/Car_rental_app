let name, id, plates, price, newName;

//car builder
function newCar(name, id, plates, price){
    id = "CAR" + Math.floor((Math.random() * 1000));
    this.name = name;
    this.id = id;
    this.plates =  plates + "-" +Math.floor((Math.random() * 1000));
    this.price = price + "$";    
}

var Mitsubishi = new newCar("Mitsubishi", 0, "DMX", 3000);
var Mercedes = new newCar("Mercedes", 0, "SRC", 2000);
var Jaguar = new newCar("Jaguar", 0, "KRK", 1500);
var Porshe = new newCar("Lambo", 0, "MDZ", 6600);
var Fiat = new newCar("Fiat", 0, "CHI", 8999);

var cars = [Mitsubishi, Mercedes, Jaguar, Porshe, Fiat];

//getters
var addCarButton = document.getElementById("add_button");
var selectorCar = document.getElementById('inputGroupSelect');
 
var carId = document.getElementById('carId');
var carPlate = document.getElementById('carPlate');
var carPrice = document.getElementById('carPrice');

var carImg = document.querySelector(".car-img");

var button1 = document.getElementById("white");
var button2 = document.getElementById("red");
var button3 = document.getElementById("blue");

carImg.style.display = "none";

//listeners
addCarButton.addEventListener('click', addCar);
button1.addEventListener('click', changeColor);
button2.addEventListener('click', changeColor);
button3.addEventListener('click', changeColor);
//functions

console.log(cars)

function addCar(e){
    carId.value = " ";
    
    let carIndex = selectorCar.value;
    let chosenCar = cars[carIndex];
    
    carId.value = chosenCar.id;
    carPlate.value = chosenCar.plates;
    carPrice.value = chosenCar.price;

    if(chosenCar.name == "Mercedes"){;
        carImg.src = "mercedes-white.png"
        carImg.style.display = "block"
        setCarName(chosenCar.name.toLowerCase());
    }
    else if(chosenCar.name == "Mitsubishi"){;
        carImg.src = "mitsubishi-white.png"
        carImg.style.display = "block"
        setCarName(chosenCar.name.toLowerCase());
    }
    else if(chosenCar.name == "Jaguar"){;
        carImg.src = "jaguar-white.png"
        carImg.style.display = "block"
        setCarName(chosenCar.name.toLowerCase());
    }
    else if(chosenCar.name == "Fiat"){;
        carImg.src = "fiat-white.png"
        carImg.style.display = "block"
        setCarName(chosenCar.name.toLowerCase());
    }
    else{
        carImg.src = "lambo-white.png"
        carImg.style.display = "block"
        setCarName(chosenCar.name.toLowerCase());
    }
    e.preventDefault();
}

function setCarName(name){
    this.name = name;
    newName = name;
    return newName;
}

console.log(carImg.src);
function changeColor(e){
        if(e.target.id=="white"){
        carImg.src =newName+"-"+ button1.id +".png";
       console.log(carImg.src);
    }
        else if(e.target.id=="red"){
        carImg.src = newName +"-"+ button2.id +".png";
        console.log(carImg.src);
    }
    else{
        carImg.src = newName + "-"+ button3.id +".png";
        console.log(carImg.src);
    }
}

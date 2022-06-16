//rescata las variables declaradas en la clase :root del CSS.
const style = document.documentElement.style;

    //Función que genera el número de DIV´s indicado en el formulario
    //y les asigna CLASE y ID para poder trabajar sobre ellos después.
const addDiv = (n) =>{

    for(let i = 1; i <= n.value; i++){
    
            //Creación y configuración del DIV.
        const element = document.createElement("div");
        element.classList.add("child1"); //añade una clase automáticamente.
        element.id = "divId"; //asigna un id automáticamente.
        element.textContent = `${i}`; // inserta el valor de i en el div.
    
            //Añadimos elemento al DOM.
        document.getElementById("container").appendChild(element);   
    };
};
        
    //Cambia el color de los DIV´s y los números del CONTAINER.
const divColor = (bgColor, letterC) =>{

    console.log(bgColor.value);
    console.log(letterC.value);

    style.setProperty('--bgColor', `${bgColor.value}`);
    style.setProperty('--letterC', `${letterC.value}`);
    
};

////////////////BASEMENT LANTERN//////////////////////////////////////////////
//recoge la posición del cursor sobre torchDiv, y las dibuja.
const mouseCoordinates = (e) =>{
    
    let x = e.clientX;
    let y = e.clientY;
    
    console.log(x);
    console.log(y);
    
    torch(x, y);
    
    // let coor = "Coordinates: (" + x + "," + y + ")";
    // document.getElementById("coordinates").innerHTML = coor;
    
}
//elimina el lector de coordenadas al salir del DIV.
const mouseOut = () => {
    document.getElementById("coordinates").innerHTML = "";
}


//declara variable para indicar si se tiene o no la linterna.

let haveLantern = true;

//genera la antorcha a partir de las coordenadas actuales.
const torch = (x,y) =>{
    
    let newTorch = document.createElement("div");
    
    let parentDiv = document.getElementById("torchSon").parentNode;
    
        let torchSon = document.getElementById("torchSon");
        
        parentDiv.insertBefore(newTorch, torchSon);
        
        style.setProperty('--xPosition', `${x}px`);
        style.setProperty('--yPosition', `${y}px`);
        style.setProperty('--torchBC', `radial-gradient(circle, rgba(250,250,250,1) 0%, rgba(218,217,210,0.5718662464985995) 9%, rgba(0,0,0,1) 100%)`);
    }
////////////////BASEMENT LANTERN//////////////////////////////////////////////

////////////////BETHROOM PUZZLE////////////////////////////////////////////

/////Array original/////
    let pieces = [
        ['F','E','U','T'],
        ['S','L','','L','K'],
        ['W','A','C','B'],
        ['D','E','V','E','L','0','P','E','R']
    ];
/////Array original/////


////////////////BETHROOM PUZZLE///////////////////////////////////////////////

//////////////INVENTORY
let player = {

    name:'Lili Calzas Largas',

    item1: {itemName:'Llave cocina',
            itemImg:'./sources/llaveCocina.png', 
            itemDescription:'llave que abre ' },

    item2: {itemName:'', 
            itemImg:'', 
            itemDescription:'' },

    item3: {itemName:'', 
            itemImg:'', 
            itemDescription:'' },

    item4: {itemName:'', 
            itemImg:'', 
            itemDescription:'' },

    item5: {itemName:'', 
            itemImg:'', 
            itemDescription:'' },

    item6: {itemName:'', 
            itemImg:'', 
            itemDescription:'' },

    item7: {itemName:'', 
            itemImg:'', 
            itemDescription:'' },

    item8: {itemName:'', 
            itemImg:'', 
            itemDescription:'' }
}

const printInventory = () =>{

    document.getElementById("inventory").innerHTML = `
        <item-menu></item-menu>
    `;

}
//////////////INVENTORY
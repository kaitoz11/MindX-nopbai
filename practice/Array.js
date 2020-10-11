//bai 1
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"];

console.log(Pokemon[3]);

//Pokemon[Pokemon.length] = "Pikachu";
Pokemon.pop();
Pokemon.push("Pikachu");

Pokemon.unshift("Meowtwo");

//bai 2
function read2(x){
    let show=[]
    for(let i=0;i<x.length;i++){
        show+=x[i]+", ";
    }
    console.log("Our items: "+ show)
}
function Saler(){
    let items = ["T-Shirt","Sweater"];
    let pos;
    let ans="";
    let run = true
    while(run==true){
        ans = prompt("Welcome to our shop, what do you want (C, R, U, D)?");
        if(ans.toUpperCase() == "R"){
            console.log(read2(items));
        }else if(ans.toUpperCase() == "C"){
            items.push(prompt("Enter new item: "));
            console.log(read2(items));
        }else if(ans.toUpperCase() == "U"){
            pos = parseInt(prompt("Update position?"))-1;
            items[pos] = prompt("New item?");
            console.log(read2(items));
        }else if(ans.toUpperCase() == "D"){
            pos = parseInt(prompt("Update position?"))-1;
            for(let a=pos;a<items.length-1;i++){
                item[a]=item[a+1]
            }
            console.log(read2(items));
        }else{run=false}
        
    }
}

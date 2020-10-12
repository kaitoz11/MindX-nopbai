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
        show+=x[i];
        if(i!=x.length-1){
            show+=", ";
        }
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
            pos = parseInt(prompt("Delete position?"))-1;
            for(let a=pos;a<items.length-1;i++){
                items[a]=items[a+1];
            }
            items.pop();
            console.log(read2(items));
        }else{run=false}
        
    }
}

//bai 3
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));
function sockMerchant(n, arr){
    arr.sort();
    let temp=arr[0];
    let count=0;
    let result=0;
    for(let i=0;i<n;i++){
        if(temp!=arr[i]){
            result+=parseInt(count/2);
            count=1;
            temp=arr[i];
            if(i==n-1){
                result+=parseInt(count/2)
            }
        }else if(i==n-1){
            count++
            result+=parseInt(count/2)
        }else{
            count++;
        }
    }
    return result
}

//bai 4
console.log(chunk(3,[10, 20, 20, 10, 10, 30, 50, 10, 20]));
function chunk(n,arr){
    let result = [];
    let temp = [];
    let count=0;
    for(let i=0;i<arr.length;i++){
        count++;
        temp.push(arr[i])
        if(count==n){
            result.push(temp);
            count=0;
            temp=[]
        }
    }
    return result
}

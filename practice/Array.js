//bai 1
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"];

console.log(Pokemon[3]);

//Pokemon[Pokemon.length] = "Pikachu";
Pokemon.pop();
Pokemon.push("Pikachu");

Pokemon.unshift("Meowtwo");

//bai 2
function Saler(){
    let items = ["T-Shirt","Sweater"];
    let pos;
    let ans="";
    let run = true
    let read2 = function(x){
        let show=[]
        for(let i=0;i<x.length;i++){
            show+=x[i];
            if(i!=x.length-1){
                show+=", ";
            }
        }
        console.log("Our items: "+ show)
    }
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

//bai 5
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
function difference(arr1, arr2) {
    let unique = function(arr, value){
        for(let n=0;n<arr.length;n++){
            if(value == arr[n]){
                return false
            }
        }
        return true
    }
    let arr=[];
    arr1 =arr1.concat(arr2);
    for(let i=0;i<arr1.length;i++){
        if(unique(arr,arr1[i])){
            arr.push(arr1[i])
        }
    }
    return arr;
}

//bai 6
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
function diffArray(arr1, arr2) {
    let search = function(a1,a2){
        let result=[];
        for(let i=0;i<a1.length;i++) {
            if(!a2.includes(a1[i])) {
                result.push(a1[i]);
            }
        }
        return result
    }
    let newArr = search(arr1,arr2).concat(search(arr2,arr1));
    return newArr;
}

//bai 7
function pairElement(str){
    str = str.toUpperCase();
    let result=[];
    for(let i = 0; i<str.length;i++){
        if(str[i] == "C"){result.push("G")}
        if(str[i] == "G"){result.push("C")}
        if(str[i] == "A"){result.push("T")}
        if(str[i] == "T"){result.push("A")}
    }
    return result.join("");
}

//bai 8
function tuckIn(arr1 , arr2){
    arr2.push(arr1[1]);
    arr2.unshift(arr1[0]);
    return arr2
}

//bai 9
function getOnlyEvens(arr){
    let result=[];
    for(let i=0;i<arr.length;i+=2){
        if(arr[i]%2==0){
            result.push(arr[i])
        }
    }
    return result
}

//bai 10
function set(arr){
    let result=[];
    for(i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result.sort((a ,b) => a-b)
}

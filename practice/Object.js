//bai 5
function getDistance(A,B){
    return Math.sqrt(((A.x-B.x)**2+(A.y-B.y)**2))
}

//bai 6
function inkLevels(x){
    let a = [x.cyan,x.magenta,x.yellow];
    let min=a[0]
    for(let i=1;i<a.length;i++){
        if(min>a[i]){
            min=a[i];
        }
    }
    return min
}

//bai 7 
function greeting(x){
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }
    if(GUEST_LIST[x] != undefined){
        console.log("Hi! I'm "+x+", and I'm from "+GUEST_LIST[x]+".")
    }else{
        console.log("Hi! I'm a guest.")
    }
}

//bai 9
function freeShipping(x){
    let sum=0;
    let val = Object.values(x);
    for(let i = 0;i<Object.keys(x).length;i++){
        sum+=val[i];
    }
    return sum >= 50.00
}

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
    };
    let result;
    if(GUEST_LIST[x] != undefined){
        result = "Hi! I'm "+x+", and I'm from "+GUEST_LIST[x]+"."
    }else{
        result = "Hi! I'm a guest."
    }
    return result
}

//bai 9
function freeShipping(x){
    let sum=0;
    let val = Object.values(x);
    for(let i = 0;i<val.length;i++){
        sum+=val[i];
    }
    return sum >= 50.00
}

//bai 10
const rate = {
	people: 4,
	walls: 9,
	minutes: 63 
}
function time(rate,people,walls){
    return (rate.people*rate.minutes*walls)/(rate.walls*people)
}

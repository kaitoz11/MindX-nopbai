// Cuong

//bai 1
function rightAngledTriangle(x){
    let result="";
    for(let i=0;i<x;i++){
        result+="#";
        console.log(result);
    }
}

//bai 2
function leftAngledTriangle(x){
    let result="";
    let space="";
    for(let i=0;i<x;i++){
        for(let a=i+1;a<x;a++){
            space+=" ";
        }
        result+="#";
        console.log(space+result);
        space="";
    }
}

//bai 3
function Isoscelestriangle(x){
    let result="";
    let space="";
    for(let i=0;i<x;i++){
        for(let a=i+1;a<x;a++){
            space+=" ";
        }
        for(let b=0;b<i*2+1;b++){
            result+="#";
        }
        console.log(space+result);
        space="";
        result="";
    }
}

//bai 4
function chessBoard(x,a,b){
    let result="";
    let temp;
    for(let i=1;i<=x;i++){
        for(let s=1;s<=x;s++){
            if(s%2==0){
                result+=b+" ";
            }else{
                result+=a+" ";
            }
        }
        temp = a;
        a = b;
        b = temp;
        console.log(result);
        result="";
    }
}

//bai 5
function fizzBuzz(x){
    let result="";
    for(let i=1;i<=x;i++){
        if(i%3==0 && i%5==0){
            result+="FizzBuzz ";
        }else if(i%3==0){
            result+="Fizz ";
        }else if(i%5==0){
            result+="Buzz ";
        }else{
            result+=i.toString()+" ";
        }
    }
    console.log(result)
}

//bai lam them =))

//bai 6
function firstVowel(x){
    let vowel = ["A","I","U","E","O"];
    for(let i=0;i<x.length;i++){
        for(let a=0;a<vowel.length;a++){
            if(x[i].toUpperCase()==vowel[a]){
                return i;
            }
        }
    }
    return false;
}

//bai 7
function charCount(a, b){
    let count=0;
    for(let i=0;i<b.length;i++){
        if(a==b[i]){
            count++;
        }
    }
    return count
}

//bai 8
function countVowels(s){
    let vowel = ["A","I","U","E","O"];
    let count=0;
    for(let i=0;i<s.length;i++){
        for(let a=0;a<vowel.length;a++){
            if(s[i].toUpperCase()==vowel[a]){
                count++;
            }
        }
    }
    return count
}

//bai 9
function reverseCase(s){
    let temp;
    let result="";
    for(let i=0;i<s.length;i++){
        temp = s[i].toUpperCase();
        if(temp == s[i]){
            result+=temp.toLowerCase();
        }else{
            result+=temp;
        }
    }
    return result;
}

//bai 10
function findLongestWordLength(str){
    
}

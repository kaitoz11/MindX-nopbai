//rendering
let onPage = 1;
let pageLim = 50;
let maxPage = data.length/pageLim;
let Logged_in = false;
let User = "Đăng Nhập";
let UserID = '';
if(maxPage%10 != 0){
    maxPage = parseInt(maxPage)+1;
}

// products
document.getElementById("pd").innerHTML = dosth(data,1);
// product page 
function rendering(pageADJ){
    if(pageADJ == true && onPage != maxPage){
        onPage++
    }else if(pageADJ == false && onPage != 1){
        onPage--
    }else if(typeof(pageADJ)==Number){
        onPage = pageADJ;
    }
    console.log(onPage)
    document.getElementById("pd").innerHTML = dosth(data,onPage);
    document.getElementById("page-display").innerHTML = onPage+"/"+maxPage;
}

function dosth(dta,page){
    let temp="";
    let i = (page-1)*pageLim;
    let start = i;
    if(page == maxPage){
        for(; i<start+(dta.length%pageLim); i++){
            temp+='<div class="box"><div><a onclick="product('+i+')"><div class="product-box"><div class="prd-image"><img src="'+dta[i].PIMG+'"></div><div class="prd-info"><div class="prd-name">'+dta[i].PName+'</div><div class="prd-price">'+dta[i].PPrice+'</div></div></div></a></div></div>';
        }
    }else{
        for(; i<page*pageLim; i++){
            temp+='<div class="box"><div><a onclick="product('+i+')"><div class="product-box"><div class="prd-image"><img src="'+dta[i].PIMG+'"></div><div class="prd-info"><div class="prd-name">'+dta[i].PName+'</div><div class="prd-price">'+dta[i].PPrice+'</div></div></div></a></div></div>';
        }
    }
    return temp
}
//page
document.getElementById("page-display").innerHTML = onPage+"/"+maxPage;
//shits
function main(bool){
    document.body.style = "background-color: aliceblue";
    onPage = 1;
    let login;
    if(bool == false){
        login = "toForm()";
    }else{
        login = "";
    }
    
    let a = '<div class="nav1"> <div class="nav-top contain"> <div class="options nfront"> <a href="#" class="nav-text">Kênh Người Bán</a> <div class="nav-text">Tải ứng dụng</div> <div class="nav-text">Kết nối</div> </div> <div class="options nback"> <div class="nav-text">Thông Báo</div> <div class="nav-text">Trợ Giúp</div> <a class="nav-text" onclick="'+login+'">'+User+'</a> </div> </div> <div class="nav-bot contain"> <div class="container"> <a onclick="main()">*LOGO*</a> <div class="mid-bar"> <div class="searchbar"> <form> <input class="searchbar-input" placeholder="Nhập từ khóa"> </form> <button class="search-confirm" type="button">Tìm kiếm</button> </div> </div> <div class="cart">*Hàng*</div> </div> </div> </div> <div class="contain" id="contain"> <div class="banner"></div> <div class="brands"></div> <div class="inside"> <div class="filter"> <a class="filter-title" href="#">Tất Cả Các Danh Mục</a> <div class="category"> <a class="category-item" href="#">Máy tính & Laptop</a> <a class="category-item" href="#">Laptop</a> <a class="category-item" href="#">Máy Tính Bàn</a> <a class="category-item" href="#">Linh Kiện Máy Tính</a> <a class="category-item" href="#">Chuột, Bàn Phím</a> <a class="category-item" href="#">USB & Ổ Cứng</a> <a class="category-item" href="#">Máy In, Máy Scan & Máy Chiếu</a> <a class="category-item" href="#">Phần Mềm</a> <a class="category-item" href="#">Phụ Kiện Máy Tính Khác</a> <a class="category-item" href="#">Audio & Video Accessories</a> </div> </div> <div class="product"> <div class="sort"> <span class="sort-bar">Sắp xếp theo</span> <div class="sort-options"> <div>Phổ Biến</div> <div>Mới Nhất</div> <div>Bán Chạy</div> <div> <!-- Dropdown menu --> Giá </div> </div> <div class="page-controller"> <div id="page-display">1/100</div> <button class="page-adj" onclick="rendering(false)"><</button> <button class="page-adj" onclick="rendering(true)">></button> </div> </div> <div class="products" id="pd"> <h2>No product</h2> </div> </div> </div> </div>';
    document.getElementById("main").innerHTML = a;
    document.getElementById("pd").innerHTML = dosth(data,1);
    document.getElementById("page-display").innerHTML = onPage+"/"+maxPage;
    document.title = 'Shopee';
}
function product(num){
    let e = "toForm()";
    if(Logged_in){
        e = "addPRD("+num+","+UserID+")";
    }
    let b = '<div class="buying"> <div class="buying-pic"> <div class="buy-inside"> <div class="prd-image" style="background-image: url('+data[num].PIMG+'); background-size: contain;"></div> </div> </div> <div class="buying-info"> <div class="buy-name">'+data[num].PName+'</div> <div class="buy-ele"> <div class="label">Giá:</div> <div class="price">'+data[num].PPrice+'</div> </div> <div class="buy-ele"> <div class="label">Số lượng:</div> <div class="amount"> <div class="form-num"> <button class="am-btn" onclick="incPrdAmount(false,'+data[num].PAmount+')">-</button> <input class=" am-inp" id="amount" type="text" value="1"> <button class="am-btn" onclick="incPrdAmount(true,'+data[num].PAmount+')">+</button> </div> <div class="label">'+data[num].PAmount+' sản phẩm có sẵn</div> </div> </div> <div class="pay"> <button class="add-prd" onclick="'+e+'">Thêm Vào Giỏ Hàng</button> </div> </div> </div>';
    document.getElementById("contain").innerHTML = b;
    document.title = data[num].PName;
}

//buying functions
function incPrdAmount(d,lim){
    //true = increase || false = decrease
    if(d == true&&document.getElementById("amount").value>=lim){
        document.getElementById("amount").value=lim;
    }else if(d==false&&document.getElementById("amount").value<=1){
        document.getElementById("amount").value=1;
    }else if(d){
        document.getElementById("amount").value++;
    }else if(d == false){
        document.getElementById("amount").value--;
    }
}
function addPRD(id,user){
    let prd = {
        productID: id,
        amount: document.getElementById("amount").value
    }
    account[user].Buying.push(prd);
}
//form
function toForm(){
    //to login form
    document.title = "Đăng Nhập - Shopee";
    document.getElementById("main").innerHTML = '<div class="nav"> <div class="aaa"> <a onclick="main()" class="tt a1">*HOME*</a> <div id="header" class="tt">Đăng nhập</div> </div> </div> <div class="form-contain"> <div class="form-insider"> <div id="form"> <div class="form-title">Đăng Nhập</div> <div class="inp-holder"> <div class="input"> <input class="input1" type="text" id="username" placeholder="Username"> </div> <div class="input"> <input class="input1" type="password" id="password" class="pswd" placeholder="Password"> </div> <button id="btn" class="submit" onclick="Login()">ĐĂNG NHẬP</button> </div> <div class="bot">Bạn chưa có tài khoảng? <a onclick="changeForm(false)" class="a1">Đăng Ký</a></div> </div> </div> </div>';
}
function Login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for(let i=0;i<account.length;i++){
        if(account[i].Username == username && account[i].Password == password){
            console.log("user="+i);
            Logged_in = true;
            User = username;
            UserID = i;
            main(true)
            return alert("Đăng nhập thành công!\nChào "+username+" đã quay trở lại.")
        }
    }
    alert("Đăng nhập không thành công!");
}
function Regist(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let con_pass = document.getElementById("confirm-password").value;
    if(password != con_pass){
        return alert("Mật khẩu xác nhận không trùng nhau!")
    }else if(username == "" || password == "" || con_pass==""){
        return alert("Hãy điền đủ các thông tin đăng ký!")
    }else{
        for(let i=0;i<account.length;i++){
            if(account[i].Username == username){
                return alert("Tài khoảng đã tồn tại")
            }
        }
        let newAcc = {
            Username: username,
            Password: password,
            Buying: []
        }
        account.push(newAcc);
        alert("Đăng ký thành công!");
        changeForm(true);
    }
}
function changeForm(b){
    if(b==true){
        //to login form
        document.title = "Đăng Nhập - Shopee";
        document.getElementById('header').innerHTML = 'Đăng nhập';
        document.getElementById('form').innerHTML = '<div class="form-title">Đăng Nhập</div><div class="inp-holder"><div class="input"><input class="input1" type="text" id="username" placeholder="Username"></div><div class="input"><input class="input1" type="password" id="password" class="pswd" placeholder="Password"></div><button id="btn" class="submit" onclick="Login()">ĐĂNG NHẬP</button></div><div class="bot">Bạn chưa có tài khoảng? <a onclick="changeForm(false) class="a1"">Đăng Ký</a></div>'
    }else{
        //to regist form
        document.title = "Đăng Ký - Shopee";
        document.getElementById('header').innerHTML = 'Đăng ký';
        document.getElementById('form').innerHTML = '<div class="form-title">Đăng Ký</div><div class="inp-holder"><div class="input"><input class="input1" type="text" id="username" placeholder="Username"></div><div class="input"><input class="input1" type="password" id="password" class="pswd" placeholder="Password"></div><div class="input"><input class="input1" type="password" id="confirm-password" class="pswd" placeholder="Confirm password"></div><button id="btn" class="submit" onclick="Regist()">ĐĂNG KÝ</button></div><div class="bot">Bạn đã có tài khoảng? <a onclick="changeForm(true)" class="a1">Đăng Nhập</a></div>'
    }
}

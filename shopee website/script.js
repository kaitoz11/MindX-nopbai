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
    
    let a = '<div class="nav1"> <div class="nav-top contain"> <div class="options nfront"> <a href="#" class="nav-text">Kênh Người Bán</a> <div class="nav-text">Tải ứng dụng</div> <div class="nav-text">Kết nối</div> </div> <div class="options nback"> <div class="nav-text">Thông Báo</div> <div class="nav-text">Trợ Giúp</div> <a class="nav-text" onclick="'+login+'">'+User+'</a> </div> </div> <div class="nav-bot contain"> <div class="container"> <a onclick="main(Logged_in)"><div class="logo"></div></a> <div class="mid-bar"> <div class="searchbar"> <form> <input class="searchbar-input" placeholder="Nhập từ khóa"> </form> <button class="search-confirm" type="button">Tìm kiếm</button> </div> </div> <div class="cart" onclick="changeCart()">Giỏ Hàng</div> </div> </div> </div> <div class="contain" id="contain"> <div class="banner"></div> <div class="brands"></div> <div class="inside"> <div class="filter"> <a class="filter-title" href="#">Tất Cả Các Danh Mục</a> <div class="category"> <a class="category-item" href="#">Máy tính & Laptop</a> <a class="category-item" href="#">Laptop</a> <a class="category-item" href="#">Máy Tính Bàn</a> <a class="category-item" href="#">Linh Kiện Máy Tính</a> <a class="category-item" href="#">Chuột, Bàn Phím</a> <a class="category-item" href="#">USB & Ổ Cứng</a> <a class="category-item" href="#">Máy In, Máy Scan & Máy Chiếu</a> <a class="category-item" href="#">Phần Mềm</a> <a class="category-item" href="#">Phụ Kiện Máy Tính Khác</a> <a class="category-item" href="#">Audio & Video Accessories</a> </div> </div> <div class="product"> <div class="sort"> <span class="sort-bar">Sắp xếp theo</span> <div class="sort-options"> <div>Phổ Biến</div> <div>Mới Nhất</div> <div>Bán Chạy</div> <div> <!-- Dropdown menu --> Giá </div> </div> <div class="page-controller"> <div id="page-display">1/100</div> <button class="page-adj" onclick="rendering(false)"><</button> <button class="page-adj" onclick="rendering(true)">></button> </div> </div> <div class="products" id="pd"> <h2>No product</h2> </div> </div> </div> </div>';
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
    
    console.log("id="+id+", user="+user)
    let lim = data[id].PAmount;
    let temp;
    if(document.getElementById("amount").value>lim){
        temp = document.getElementById("amount").value=lim;
    }else if(document.getElementById("amount").value<1){
        temp = document.getElementById("amount").value=1;
    }else{
        temp = document.getElementById("amount").value;
    }
    let prd = {
        productID: parseInt(id),
        detail: data[id],
        amount: parseInt(temp)
    }
    let prdtarget=0;
    //check mẫu hàng đã tồn t trong giỏ hàng chưa
    function check(){
        for(let e=0;e<account[user].Buying.length;e++){
            if(account[user].Buying[e].productID == prd.productID){
                prdtarget = e;
                return true
            }
        }
        return false
    }
    if(check()==true && account[user].Buying.length != 0){
        account[user].Buying[prdtarget].amount+=parseInt(temp);
    }else{
        account[user].Buying.push(prd);
    }
}
//form
function toForm(){
    //to login form
    document.title = "Đăng Nhập - Shopee";
    document.getElementById("main").innerHTML = '<div class="nav"> <div class="aaa"> <a onclick="main(Logged_in)" class="tt a1">HOME</a> <div id="header" class="tt">Đăng nhập</div> </div> </div> <div class="form-contain"> <div class="form-insider"> <div id="form"> <div class="form-title">Đăng Nhập</div> <div class="inp-holder"> <div class="input"> <input class="input1" type="text" id="username" placeholder="Username"> </div> <div class="input"> <input class="input1" type="password" id="password" class="pswd" placeholder="Password"> </div> <button id="btn" class="submit" onclick="Login()">ĐĂNG NHẬP</button> </div> <div class="bot">Bạn chưa có tài khoảng? <a onclick="changeForm(false)" class="a1">Đăng Ký</a></div> </div> </div> </div>';
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
    let check1 = function (){
        for(let i=0;i<username.length;i++){
            if(username[i]==" " || password[i]==" "){
                return true
            }
        }
        return false
    }
    let existed = function(){
        for(let e=0;e<account.length;e++){
            if(username == account[e].Username){
                return true 
            }
        }
        return false
    }
    if(existed()){
        return alert("Tên tài khoảng đã tồn tại!")
    }else if(check1()){
        return alert("Tên tài khoảng hoặc mật khẩu chứa ký tự không thích hợp!")
    }else if(password != con_pass){
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
        document.getElementById('form').innerHTML = '<div class="form-title">Đăng Nhập</div><div class="inp-holder"><div class="input"><input class="input1" type="text" id="username" placeholder="Username"></div><div class="input"><input class="input1" type="password" id="password" class="pswd" placeholder="Password"></div><button id="btn" class="submit" onclick="Login()">ĐĂNG NHẬP</button></div><div class="bot">Bạn chưa có tài khoảng? <a onclick="changeForm(false)" class="a1">Đăng Ký</a></div>'
    }else{
        //to regist form
        document.title = "Đăng Ký - Shopee";
        document.getElementById('header').innerHTML = 'Đăng ký';
        document.getElementById('form').innerHTML = '<div class="form-title">Đăng Ký</div><div class="inp-holder"><div class="input"><input class="input1" type="text" id="username" placeholder="Username"></div><div class="input"><input class="input1" type="password" id="password" class="pswd" placeholder="Password"></div><div class="input"><input class="input1" type="password" id="confirm-password" class="pswd" placeholder="Confirm password"></div><button id="btn" class="submit" onclick="Regist()">ĐĂNG KÝ</button></div><div class="bot">Bạn đã có tài khoảng? <a onclick="changeForm(true)" class="a1">Đăng Nhập</a></div>'
    }
}
//giỏ hàng - cart
function adjAmount(prd, w, num){
    /*
        prd là số thứ tự của sp trong data
        w là tăng hay giảm
        num là thứ tự trong giỏ hàng
    */ 
    //true = increase || false = decrease
    let lim = data[prd].PAmount;
    let id = "prd_"+num;
    if(w == true&&document.getElementById(id).value>=lim){
        document.getElementById(id).value=lim;
    }else if(w==false&&document.getElementById(id).value<=1){
        document.getElementById(id).value=1;
    }else if(w){
        document.getElementById(id).value++;
    }else if(w == false){
        document.getElementById(id).value--;
    }
    let a = document.getElementById(id).value;
    //update
    account[UserID].Buying[num].amount = parseInt(a);
    changeCart();
}
function deleteFcart(pos){
    // pos là thứ tự trong giỏ hàng
    for(let i=pos;i<account[UserID].Buying.length-1;i++){
        account[UserID].Buying[i] = account[UserID].Buying[i+1];
    }
    account[UserID].Buying.pop();
    changeCart();
}
function sumPrice(a){
    //bỏ " VND"
    let temp = a.slice(0, -4);
    return parseInt(temp)
}
//rendering cart
function changeCart(){
    if(Logged_in==false){
        toForm()
    }else{
        document.title = "Giỏ hàng - Shopee";
        let inside_top;
        let items = "";
        let prdID;
        let prdname;
        let prdimg;
        let prdprice;
        let prdsumprice=0;
        let temp=0;
        for(let i=0;i<account[UserID].Buying.length;i++){
            prdID = account[UserID].Buying[i].productID;
            prdimg = data[prdID].PIMG;
            prdname =  data[prdID].PName;
            prdprice = data[prdID].PPrice;
            prdsumprice = sumPrice(prdprice) * account[UserID].Buying[i].amount;
            temp+=prdsumprice;
            items += '<div class="cart-item"> <div class="cart-item_overview" onclick="product('+prdID+')"> <div class="item-img" style="background-image: url('+prdimg+'); background-size: contain;"></div> <div class="item-title">'+prdname+'</div> </div> <div class="cart-item_unit-price">'+prdprice+'</div> <div class="form-num cart-item_amount"> <button class="am-btn" onclick="adjAmount('+prdID+', false, '+i+')">-</button> <input class="am-inp" type="text" id="prd_'+i+'" value="'+account[UserID].Buying[i].amount+'"> <button class="am-btn" onclick="adjAmount('+prdID+', true, '+i+')">+</button> </div> <div id="cart-item_total-price">'+prdsumprice+' VND</div> <div class="cart-item_delete" onclick="deleteFcart('+i+')">Xóa</div> </div>'
        }

        inside_top = '<div id="prds-in-cart"> Bạn chưa mua Hàng của Shopee </div> <div id="payingbill">Tổng số tiền là: '+temp+' VND</div>';
        document.getElementById("contain").innerHTML = inside_top;
        document.getElementById("prds-in-cart").innerHTML = items;
    }
}

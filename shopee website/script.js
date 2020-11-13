let data = [{
    PName: "Đồng Hồ ZGO DISNEY",
    PPrice: "16.000 VND",
    PIMG: "https://cf.shopee.vn/file/33c995f7ee2f95b9aee39cbda4861d91_tn"
},{
    PName: "Tai nghe Hoco M55 Memory sound - Shin Case",
    PPrice: "45.000 VND",
    PIMG: "https://cf.shopee.vn/file/c576532d73faf295a196b4f44bb89c7e_tn"
},{
    PName: "Loa Bluetooth không dây hoco BS31 V4.2 600mAh",
    PPrice: "212.000 VND",
    PIMG: "https://cf.shopee.vn/file/9f97c5de0017ef9a31895edd4508f39b_tn"
},{
    PName: "[CHÍNH HÃNG] Loa Bluetooth Thể Thao BS30 Bản Nâng Cấp Full{ BẢO HÀNH 12 THÁNG}",
    PPrice: "298.000 VND",
    PIMG: "https://cf.shopee.vn/file/abd2866ceb43edfb50c50089120358d6_tn"
},{
    PName: "Vỏ bảo vệ bao đựng tai nghe airpod 1/2 / airpod pro - Jerry Case",
    PPrice: "35.000 VND",
    PIMG: "https://cf.shopee.vn/file/138230a5a41f7be8e476a517e96bc6ef_tn"
},{
    PName: "",
    PPrice: "",
    PIMG: ""
},{
    PName: "",
    PPrice: "",
    PIMG: ""
},{
    PName: "",
    PPrice: "",
    PIMG: ""
},{
    PName: "",
    PPrice: "",
    PIMG: ""
},{
    PName: "",
    PPrice: "",
    PIMG: ""
},{
    PName: "",
    PPrice: "",
    PIMG: ""
},{
    PName: "",
    PPrice: "",
    PIMG: ""
},{
    PName: "",
    PPrice: "",
    PIMG: ""
}]

//rendering
let onPage = 1;
let pageLim = 5;
let maxPage = parseInt(data.length/pageLim);
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
    for(let i = (page-1)*pageLim; i<page*pageLim; i++){
        temp+='<div class="box"><div><a href="#"><div class="product-box"><div class="prd-image"><img src="'+dta[i].PIMG+'"></div><div class="prd-info"><div class="prd-name">'+dta[i].PName+'</div><div class="prd-price">'+dta[i].PPrice+'</div></div></div></a></div></div>';
    }
    return temp
}

//page
document.getElementById("page-display").innerHTML = onPage+"/"+parseInt(data.length/pageLim)

let data = [{
    PName: "Đồng Hồ ZGO DISNEY",
    PPrice: "16.000.000.000 VND",
    PIMG: "https://cf.shopee.vn/file/33c995f7ee2f95b9aee39cbda4861d91_tn"
},{
    PName: "dqwdqwd",
    PPrice: "14.000.000.000 VND",
    PIMG: "https://cf.shopee.vn/file/33c995f7ee2f95b9aee39cbda4861d91_tn"
}]

let boxArr = dosth(data)
function dosth(dta){
    let temp=""
    for(let i = 0; i<dta.length; i++){
        temp+='<div class="box"><div><a href="#"><div class="product-box"><div class="prd-image"><img src="'+dta[i].PIMG+'"></div><div class="prd-info"><div class="prd-name">'+dta[i].PName+'</div><div class="prd-price">'+dta[i].PPrice+'</div></div></div></a></div></div>';
    }
    return temp
}
document.getElementById("pd").innerHTML = boxArr;

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
    PName: "Dây Đeo Silicon Mềm Cho Đồng Hồ Thông Minh Apple Watch Iwatch 38mm 42mm 40mm 44mm",
    PPrice: "26.000 VND",
    PIMG: "https://cf.shopee.vn/file/9fcf40896e3fbf71f9298500bf2eeef1_tn"
},{
    PName: "[CHÍNH HÃNG] Loa Bluetooth Thể Thao BS30 Bản Nâng Cấp Full",
    PPrice: "298.000 VND",
    PIMG: "https://cf.shopee.vn/file/2ccf3e5e438effe39c16d2ffd2aae26a_tn"
},{
    PName: "🌟CHÍNH HÃNG🌟Loa Nghe Nhạc Bluetooth Hoco DS03 V5.0 - Nghe USB, TF, AUX, Tích Hợp Đèn Pin Mini {BẢO HÀNH 12 THÁNG}",
    PPrice: "235.000 VND",
    PIMG: "https://cf.shopee.vn/file/b66972cddf59b2c05ac993ff91b71757_tn"
},{
    PName: "[CHÍNH HÃNG] Loa Bluetooth Thể Thao Hoco DS03 Bản Nâng Cấp Mới Tích Hợp Đèn Pin",
    PPrice: "208.000 VND",
    PIMG: "https://cf.shopee.vn/file/171512a40c934d35ad8b0e740d26f380_tn"
},{
    PName: "[BẢO HÀNH 1 ĐỔI 1] Tai Nghe Nhét Tai AKG S10+ NGUYÊN SEAL ✔️KÈM NÚM PHỤ",
    PPrice: "98.000 VND",
    PIMG: "https://cf.shopee.vn/file/8eac7e06ac2d7555e7f49606f89b822c_tn"
},{
    PName: "🌟CHÍNH HÃNG🌟Loa bluetooh đa năng Borofone BR2 Aurora wireless V5.0 kết nối 2 loa cùng lúc{BẢO HÀNH ĐỔI MỚI}",
    PPrice: "198.000 VND",
    PIMG: "https://cf.shopee.vn/file/178baaf9018cfd14be4145739b895a80_tn"
},{
    PName: "Smart Tivi Samsung 4K 49 inch UA49RU7300KXXV",
    PPrice: "8.000.000 VND",
    PIMG: "https://cf.shopee.vn/file/0b135c51d9778d3d06ec20b3196a1a7f_tn"
},{
    PName: "Case Airpod 1 2 Pro Vỏ Ốp Bọc Tai Nghe Airpod Hình Thú Nhiều Mẫu Dễ Thương Chất Liệu Silicon Dẻo",
    PPrice: "389.000 VND",
    PIMG: "https://cf.shopee.vn/file/3400f21fa8b981b179e139095f9675fb_tn"
},{
    PName: "Tai nghe không dây bluetooth 5.0 i12 tws cảm ứng chạm âm thanh nổi",
    PPrice: "139.000 VND",
    PIMG: "https://cf.shopee.vn/file/5766f53dd9e5a46d7e8663a62028934a_tn"
},{
    PName: "Găng Tay Cotton Chống Mồ Hôi Chơi Game Bắn Súng Trên Điện Thoại Chuyên Nghiệp",
    PPrice: "8.200 VND",
    PIMG: "https://cf.shopee.vn/file/b1b24cb690e4e8143c57c338a1c323ea_tn"
},{
    PName: "Loa nghe thẻ nhớ, Usb, FM 3 pin Craven CR 853",
    PPrice: "140.000 VND",
    PIMG: "https://cf.shopee.vn/file/10a2d6b2e0ed403606772a4963e3c42f_tn"
},{
    PName: "Biến Trở (Triết Áp) WH148 Đơn",
    PPrice: "2.499 VND",
    PIMG: "https://cf.shopee.vn/file/83a23c1473fe31fb466f942e1a217915_tn"
},{
    PName: "Ke góc vuông nhôm định hình 2020, 2028, 3030",
    PPrice: "3.500 VND",
    PIMG: "https://cf.shopee.vn/file/a695df21f942d8f6e8ce2b622a4a74a0_tn"
},{
    PName: "[[[HOT HOT ]} Tai Nghe Bluetooth 5.0 TWS S11 - Chống Nước IPX5 - Pin 4800 - Tích Hợp Micro -Tự Động Kết Nối -Chống ồn CV",
    PPrice: "457.000 VND",
    PIMG: "https://cf.shopee.vn/file/8a075df8a6bce04359ba4c0f1b1efee4_tn"
}]

//rendering
let onPage = 1;
let pageLim = 50;
let maxPage = data.length/pageLim;
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
            temp+='<div class="box"><div><a href="#"><div class="product-box"><div class="prd-image"><img src="'+dta[i].PIMG+'"></div><div class="prd-info"><div class="prd-name">'+dta[i].PName+'</div><div class="prd-price">'+dta[i].PPrice+'</div></div></div></a></div></div>';
        }
    }else{
        for(; i<page*pageLim; i++){
            temp+='<div class="box"><div><a href="#"><div class="product-box"><div class="prd-image"><img src="'+dta[i].PIMG+'"></div><div class="prd-info"><div class="prd-name">'+dta[i].PName+'</div><div class="prd-price">'+dta[i].PPrice+'</div></div></div></a></div></div>';
        }
    }
    return temp
}
//page
document.getElementById("page-display").innerHTML = onPage+"/"+maxPage

// Fill Brands
if(localStorage.getItem(keyBrandList) == null) {
    var brand1 = createBrand('Classic', 'classic');
    var brand2 = createBrand('Quadro', 'quadro');
    var brand3 = createBrand('Lumine', 'lumine');
    var brand4 = createBrand('Petite', 'petite');
    var brand5 = createBrand('Accessories', 'accessories');
    
    var brandList = new Array();
    
    brandList.push(brand1);
    brandList.push(brand2);
    brandList.push(brand3);
    brandList.push(brand4); 
    brandList.push(brand5); 
    saveBrandListToLocalStorage(brandList);
}

// Fill Products
if(localStorage.getItem(keyProductList) == null) {
    // classic
    //var stt sản phẩm = createProduct(tên sản phẩm,link hình ảnh sản phẩm , giá sản phẩm)
    var classic1 = createProduct('Classic Silver Ocean','/assets/img/product/formen/classic(1).webp','999.000VND','classic');
    var classic2 = createProduct('Classic Blue Soft White','/assets/img/product/formen/classic(2).webp','1,.499.000VND','classic');
    var classic3 = createProduct('Classic Blue Silver Black','/assets/img/product/formen/classic(3).webp','1.799.000VND','classic');
    var classic4 = createProduct('Classic Blue Gold Black','/assets/img/product/formen/classic(4).webp','1.999.000VND','classic');
    var classic5 = createProduct('Classic Golden Sphere','/assets/img/product/formen/classic(5).webp','2.599.000VND','classic');
    var classic6 = createProduct('Classic Titan Sphere','/assets/img/product/formen/classic(6).webp','2.099.000VND','classic');
    var classic7 = createProduct('Classic Silver & Black','/assets/img/product/formen/classic(7).webp','1.499.000VND','classic');
    var classic8 = createProduct('Classic Onyx ','/assets/img/product/formen/classic(8).webp','2.499.000VND','classic');
    
    var productList = new Array();
    productList.push(classic1);
    productList.push(classic2);
    productList.push(classic3);
    productList.push(classic4);
    productList.push(classic5);
    productList.push(classic6);
    productList.push(classic7);
    productList.push(classic8);
    // quadro
    var quadro1 = createProduct('Quadro Golden Green','link','1.599.000VND','quadro');
    var quadro2 = createProduct('Quadro P - Golden','link','2.099.000VND','quadro');
    var quadro3 = createProduct('Quadro Rec - Golden','link','3.099.000VND','quadro');
    var quadro4 = createProduct('Quadro Light Golden','link','2.099.000VND','quadro');
    var quadro5 = createProduct('Quadro Silver Black','link','1.599.000VND','quadro');
    var quadro6 = createProduct('Quadro White Golden','link','1.299.000VND','quadro');
    var quadro7 = createProduct('Quadro Stained Gold','link','2.099.000VND','quadro');
    var quadro8 = createProduct('Quadro Y - Golden','link','3.099.000VND','quadro');
    var quadro9 = createProduct('Quadro Lil Golden','link','1.599.000VND','quadro');
    var quadro10 = createProduct('Quadro Golden Plat','link','1.299.000VND','quadro');
    var quadro11 = createProduct('Quadro Black King Bar','link','3.099.000VND','quadro');
    var quadro12 = createProduct('Quadro Black Soldier','link','2.099.000VND','quadro');
    
    productList.push(quadro1);
    productList.push(quadro2);
    productList.push(quadro3);
    productList.push(quadro4);
    productList.push(quadro5);
    productList.push(quadro6);
    productList.push(quadro7);
    productList.push(quadro8);
    productList.push(quadro9);
    productList.push(quadro10);
    productList.push(quadro11);
    productList.push(quadro12);
    // lumine
    var lumine1 = createProduct('Luminie P-Golden','link','1,.499.000VND','luminie');
    var lumine2 = createProduct('Luminie W-Platinnum','link','1.799.000VDN','luminie');
    var lumine3 = createProduct('Luminie Stained Gold','link','1.999.000VND','luminie');
    var lumine4 = createProduct('Luminie Pink - Golden','link','2.599.000VND','luminie');
    var lumine5 = createProduct('Luminie Silver & Black','link','2.099.000VND','luminie');
    var lumine6 = createProduct('Luminie Silver & Ocean','link','1.499.000VND','luminie');
    var lumine7 = createProduct('Luminie Rec - Golden','link','2.499.000VND','luminie');
    var lumine8 = createProduct('Luminie White Golden','link','1.599.000VND','luminie');
    var lumine9 = createProduct('Luminie Gold & White','link','2.099.000VND','luminie');
    var lumine10 = createProduct('Luminie Stained P-Gold','link','3.099.000VND','luminie');
    var lumine11 = createProduct('Luminie Silver & Dig','link','2.099.000VND','luminie');
    var lumine12 = createProduct('Luminie Gold & Black','link','1.599.000VND','luminie');
    var lumine13 = createProduct('Luminie Quad - Golden','link','1.299.000VND','luminie');
    var lumine14 = createProduct('Luminie Platinum & Ocean','link','2.099.000VND','luminie');
    
    productList.push(lumine1);
    productList.push(lumine2);
    productList.push(lumine3);
    productList.push(lumine4);
    productList.push(lumine5);
    productList.push(lumine6);
    productList.push(lumine7);
    productList.push(lumine8);
    productList.push(lumine9);
    productList.push(lumine10);
    productList.push(lumine11);
    productList.push(lumine12);
    productList.push(lumine13);
    productList.push(lumine14);
    // petite
    var petite1 = createProduct('Petite Leather - Gold','link','3.099.000VND','petite');
    var petite2 = createProduct('Petite Golden','link','1.599.000VND','petite');
    var petite3 = createProduct('Petite White Leather','link','1.299.000VND','petite');
    var petite4 = createProduct('Petite Black King Gold','link','3.099.000VND','petite');
    var petite5 = createProduct('Petite Platinum & White','link','2.099.000VND','petite');
    var petite6 = createProduct('Petite Basic Leather','link','1,.499.000VND','petite');
    var petite7 = createProduct('Petite P-Golden','link','1.799.000VDN','petite');
    var petite8 = createProduct('Petite Silver & Ocean','link','1.999.000VND','petite');
    var petite9 = createProduct('Petite Gold & White','link','2.599.000VND','petite');
    var petite10 = createProduct('Petite White Golden','link','2.099.000VND','petite');
    var petite11 = createProduct('Petite Brown Leather','link','1.499.000VND','petite');
    var petite12 = createProduct('Petite Gold & Black','link','2.499.000VND','petite');
    var petite13 = createProduct('Petite Copper Gold','link','1.599.000VND','petite');
    var petite14 = createProduct('Petite Flat Platinum','link','1.299.000VND','petite');
    
    productList.push(petite1);
    productList.push(petite2);
    productList.push(petite3);
    productList.push(petite4);
    productList.push(petite5);
    productList.push(petite6);
    productList.push(petite7);
    productList.push(petite8);
    productList.push(petite9);
    productList.push(petite10);
    productList.push(petite11);
    productList.push(petite12);
    productList.push(petite13);
    productList.push(petite14);


    // glasses
    var glasses1 = createProduct('Glasses Mayo Glass','link','599.000VND','glasses');
    var glasses2 = createProduct('Glasses Pinky Glass','link','699.000VND','glasses');
    var glasses3 = createProduct('Glasses Olive Glass','link','399.000VND','glasses');
    var glasses4 = createProduct('Glasses SunPink Glass','link','799.000VND','glasses'); 
    var glasses5 = createProduct('Glasses Black Glass','link','399.000VND','glasses'); 
    productList.push(glasses1);
    productList.push(glasses2);
    productList.push(glasses3);
    productList.push(glasses4);
    productList.push(glasses5);
    
    saveProductListToLocalStorage(productList);
}


/*
// Fill users
if(localStorage.getItem(keyUserList) == null) {
    var user1 = createUser("Võ Văn Hùng", "521/91E CMT8, P13, Q10, HCM", "0907604514", "admin123", "admin123", "admin", 'U3577_1665879975643');
    var user2 = createUser("Thiều Việt Hoàng", "521/91E CMT8, P13, Q10, HCM", "0327794828", "hoang123", "hoang123", "user", 'U1053_1665879975643');
    var user3 = createUser("Đặng Huỳnh Như Y", "521/91E CMT8, P13, Q10, HCM", "0907504514", "nhuy123", "nhuy123", "user", 'U0421_1665879975643');
    var user4 = createUser("Võ Quang Đăng Khoa", "521/91E CMT8, P13, Q10, HCM", "0327794826", "khoavo123", "khoavo123", "user", 'U8191_1665879975643');
    var user5 = createUser("Đặng Tùng Uy", "521/91E CMT8, P13, Q10, HCM", "0907604518", "uy123", "uy123", "user", 'U9223_1665879975643');
    var user6 = createUser("Thiều Bảo Trâm", "521/91E CMT8, P13, Q10, HCM", "0327794827", "tram123", "tram123", "user", 'U6922_1665879975643');
    var user7 = createUser("Nguyễn Đăng Khoa", "521/91E CMT8, P13, Q10, HCM", "0907608514", "khoanguyen123", "khoanguyen123", "user", 'U6590_1665879975643');
    var user8 = createUser("Nguyễn Hoài Phúc", "521/91E CMT8, P13, Q10, HCM", "0327794849", "hoaiphuc123", "hoaiphuc123", "user", 'U1361_1665879975643');
    var user9 = createUser("Ngô Minh Hiếu", "521/91E CMT8, P13, Q10, HCM", "0907304514", "hieu123", "hieu123", "user", 'U3042_1665879975643');
    var user10 = createUser("Nguyễn Nhật Huy", "521/91E CMT8, P13, Q10, HCM", "0327794859", "huy123", "huy123", "user", 'U8837_1665879975643');
    var user11 = createUser("Nguyễn Thị Thúy Kiều", "521/91E CMT8, P13, Q10, HCM", "0907604574", "kieu123", "kieu123", "user", 'U0647_1665879975643');
    var user12 = createUser("Phạm Hồng Thúy Vân", "521/91E CMT8, P13, Q10, HCM", "0327794889", "thuyvan123", "thuyvan123", "user", 'U9697_1665879975643');

    var users = new Array();
    users.push(user1);
    users.push(user2);
    users.push(user3);
    users.push(user4);
    users.push(user5);
    users.push(user6);
    users.push(user7);
    users.push(user8);
    users.push(user9);
    users.push(user10);
    users.push(user11);
    users.push(user12);
    saveUserListToLocalStorage(users);
}

// Fill orders
if(localStorage.getItem(keyOrderList) == null) {
    var orders = [];
    var order1 = createOrder('U9697_1665879975643', '2022-10-14', '0327794828', '770 CTM8, P5, Q.TB, HCM', 34245000, true, 'O8217_1665881444808');
    var order2 = createOrder('U9697_1665879975643', '2022-10-14', '0327794828', '770 CTM8, P5, Q.TB, HCM', 5147000, false, 'O6719_1665881444809');
    var order3 = createOrder('U3577_1665879975643', '2022-10-12', '0907504514', 'Số 3, Thành Thái, Q10, HCM', 34245000, true, 'O9369_1665881444810');
    var order4 = createOrder('U3577_1665879975643', '2022-10-12', '0907504514', 'Số 3, Thành Thái, Q10, HCM', 5147000, true, 'O3397_1665881444811');
    var order5 = createOrder('U1053_1665879975643', '2022-10-12', '0907605789', '36, An Định A, Ba Chúc, Tri Tôn, An Giang', 34245000, true, 'O7250_1665881444812');
    var order6 = createOrder('U1053_1665879975643', '2022-10-12', '0907605789', '36, An Định A, Ba Chúc, Tri Tôn, An Giang', 5147000, true, 'O0442_1665881444813');
    var order7 = createOrder('U1053_1665879975643', '2022-10-12', '0907605789', '36, An Định A, Ba Chúc, Tri Tôn, An Giang', 34245000, true, 'O6333_1665881444814');
    var order8 = createOrder('U0421_1665879975643', '2022-10-12', '0907604519', '60 CTM8, P5, Q.TB, HCM', 5147000, true, 'O5138_1665881444815');
    var order9 = createOrder('U0421_1665879975643', '2022-10-12', '0907604519', '60 CTM8, P5, Q.TB, HCM', 34245000, true, 'O7046_1665881444816');
    var order10 = createOrder('U0421_1665879975643', '2022-10-12', '0907604519', '60 CTM8, P5, Q.TB, HCM', 5147000, true, 'O8426_1665881444817');
    var order11 = createOrder('U8191_1665879975643', '2022-07-15', '0906544231', 'Số 4, Cao Lỗ, P4, Q8, HCM', 50387000, true, 'O6211_1665881444818');
    var order12 = createOrder('U8191_1665879975643', '2022-04-13', '0906544231', 'Số 4, Cao Lỗ, P4, Q8, HCM', 50387000, true, 'O9813_1665881444819');

    orders.push(order1);
    orders.push(order2);
    orders.push(order3);
    orders.push(order4);
    orders.push(order5);
    orders.push(order6);
    orders.push(order7);
    orders.push(order8);
    orders.push(order9);
    orders.push(order10);
    orders.push(order11);
    orders.push(order12);

    saveOrderListToLocalStorage(orders);
}

// Fill order details
if(localStorage.getItem(keyDetailOrderList) == null) {
    // Order: O8217_1665881444808
    var detail1 = createDetailOrder('O8217_1665881444808', 'W3834_1665879975641', 2);
    var detail2 = createDetailOrder('O8217_1665881444808', 'W5406_1665879975653', 1);
    var detail3 = createDetailOrder('O8217_1665881444808', 'W0489_1665879975663', 3);
    var detail4 = createDetailOrder('O8217_1665881444808', 'W3474_1665879975673', 1);

    // Order: O6719_1665881444809
    var detail5 = createDetailOrder('O6719_1665881444809', 'W0925_1665879975642', 1);
    var detail6 = createDetailOrder('O6719_1665881444809', 'W9533_1665879975654', 1);

    // Order: O9369_1665881444810
    var detail7 = createDetailOrder('O9369_1665881444810', 'W3834_1665879975641', 2);
    var detail8 = createDetailOrder('O9369_1665881444810', 'W5406_1665879975653', 1);
    var detail9 = createDetailOrder('O9369_1665881444810', 'W0489_1665879975663', 3);
    var detail10 = createDetailOrder('O9369_1665881444810', 'W3474_1665879975673', 1);

    // Order: O3397_1665881444811
    var detail11 = createDetailOrder('O3397_1665881444811', 'W0925_1665879975642', 1);
    var detail12 = createDetailOrder('O3397_1665881444811', 'W9533_1665879975654', 1);

    // Order: O7250_1665881444812
    var detail13 = createDetailOrder('O7250_1665881444812', 'W3834_1665879975641', 2);
    var detail14 = createDetailOrder('O7250_1665881444812', 'W5406_1665879975653', 1);
    var detail15 = createDetailOrder('O7250_1665881444812', 'W0489_1665879975663', 3);
    var detail16 = createDetailOrder('O7250_1665881444812', 'W3474_1665879975673', 1);

    // Order: O0442_1665881444813
    var detail17 = createDetailOrder('O0442_1665881444813', 'W0925_1665879975642', 1);
    var detail18 = createDetailOrder('O0442_1665881444813', 'W9533_1665879975654', 1);

    // Order: O6333_1665881444814
    var detail19 = createDetailOrder('O6333_1665881444814', 'W3834_1665879975641', 2);
    var detail20 = createDetailOrder('O6333_1665881444814', 'W5406_1665879975653', 1);
    var detail21 = createDetailOrder('O6333_1665881444814', 'W0489_1665879975663', 3);
    var detail22 = createDetailOrder('O6333_1665881444814', 'W3474_1665879975673', 1);

    // Order: O5138_1665881444815
    var detail23 = createDetailOrder('O5138_1665881444815', 'W0925_1665879975642', 1);
    var detail24 = createDetailOrder('O5138_1665881444815', 'W9533_1665879975654', 1);

    // Order: O7046_1665881444816
    var detail25 = createDetailOrder('O7046_1665881444816', 'W3834_1665879975641', 2);
    var detail26 = createDetailOrder('O7046_1665881444816', 'W5406_1665879975653', 1);
    var detail27 = createDetailOrder('O7046_1665881444816', 'W0489_1665879975663', 3);
    var detail28 = createDetailOrder('O7046_1665881444816', 'W3474_1665879975673', 1);

    // Order: O8426_1665881444817
    var detail29 = createDetailOrder('O8426_1665881444817', 'W0925_1665879975642', 1);
    var detail30 = createDetailOrder('O8426_1665881444817', 'W9533_1665879975654', 1);

    // Order: O6211_1665881444818
    var detail31 = createDetailOrder('O6211_1665881444818', 'W9141_1665879975652', 2);
    var detail32 = createDetailOrder('O6211_1665881444818', 'W7630_1665879975651', 1);
    var detail33 = createDetailOrder('O6211_1665881444818', 'W2549_1665879975667', 3);
    var detail34 = createDetailOrder('O6211_1665881444818', 'W4138_1665879975675', 1);
    var detail35 = createDetailOrder('O6211_1665881444818', 'W0489_1665879975663', 3);
    var detail36 = createDetailOrder('O6211_1665881444818', 'W3474_1665879975673', 1);

    // Order: O9813_1665881444819
    var detail37 = createDetailOrder('O9813_1665881444819', 'W9141_1665879975652', 2);
    var detail38 = createDetailOrder('O9813_1665881444819', 'W7630_1665879975651', 1);
    var detail39 = createDetailOrder('O9813_1665881444819', 'W2549_1665879975667', 3);
    var detail40 = createDetailOrder('O9813_1665881444819', 'W4138_1665879975675', 1);
    var detail41 = createDetailOrder('O9813_1665881444819', 'W0489_1665879975663', 3);
    var detail42 = createDetailOrder('O9813_1665881444819', 'W3474_1665879975673', 1);

    var orderDetails = [];
    orderDetails.push(detail1);
    orderDetails.push(detail2);
    orderDetails.push(detail3);
    orderDetails.push(detail4);
    orderDetails.push(detail5);
    orderDetails.push(detail6);
    orderDetails.push(detail7);
    orderDetails.push(detail8);
    orderDetails.push(detail9);
    orderDetails.push(detail10);
    orderDetails.push(detail11);
    orderDetails.push(detail12);
    orderDetails.push(detail13);
    orderDetails.push(detail14);
    orderDetails.push(detail15);
    orderDetails.push(detail16);
    orderDetails.push(detail17);
    orderDetails.push(detail18);
    orderDetails.push(detail19);
    orderDetails.push(detail20);
    orderDetails.push(detail21);
    orderDetails.push(detail22);
    orderDetails.push(detail23);
    orderDetails.push(detail24);
    orderDetails.push(detail25);
    orderDetails.push(detail26);
    orderDetails.push(detail27);
    orderDetails.push(detail28);
    orderDetails.push(detail29);
    orderDetails.push(detail30);
    orderDetails.push(detail31);
    orderDetails.push(detail32);
    orderDetails.push(detail33);
    orderDetails.push(detail34);
    orderDetails.push(detail35);
    orderDetails.push(detail36);
    orderDetails.push(detail37);
    orderDetails.push(detail38);
    orderDetails.push(detail39);
    orderDetails.push(detail40);
    orderDetails.push(detail41);
    orderDetails.push(detail42);

    saveDetailOrderListToLocalStorage(orderDetails);

}*/
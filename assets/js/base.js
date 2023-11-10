
function addHeader(){
    document.write(`
    <div id="topheader" style="background-color: black;width: 100%;height: 40px;position: relative;justify-content: center;">
            <p style="position: relative;color: white;text-align: center;padding: 8px 0 0 0 ;    letter-spacing: 3px;">
            <a href="/html/about.html" style="text-decoration:none;color:white;">More stories about us</a>
            </p>
        </div>
    <div id="myOverlay" class="overlay">
            <span class="closebtn" onclick="closeSearch()" title="Close Overlay">×</span>
            <div class="overlay-content">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search">
              </form>
            </div>
        </div>
        <div id="main">
            <div class="header">
                <div id="mainmenu">
                    <ul id="nav-list">
                        <li><a href="/html/product.html">NAM GIỚI</a></li>
                        <li><a href="/html/product.html">NỮ GIỚI</a></li>
                        <li><a href="/html/product.html">PHỤ KIỆN</a></li>
                
                    </ul>
                    <div><a id="home-logo" href="/html/index.html"><img src="/assets/img/logo/watch_shop-removebg-preview.png"> </a></div>
                    <ul id="nav-list-2">
                            <li><a><button class="openBtn" onclick="openSearch()"><img src="/assets/img/icon/magnifying-glass-solid.svg">TÌM KIẾM</button></a></li>
                            <li><a href="/html/cart.html"><img src="/assets/img/icon/cart-shopping-solid.svg">GIỎ HÀNG</a></li>
                            <li><a href="/html/register.html"><img src="/assets/img/icon/user-regular.svg">ĐĂNG NHẬP</a></li>
                    
                    </ul>
                </div>
            </div>
    `)
}
function addFooter(){
    document.write(`
    <footer>
    <div id="footer-info">
        <div id="googlemap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.100022667191!2d106.68394001445488!3d10.771043359772825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2s!4v1696767564663!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
        </div>
        <table>
            <tr>
                <th><h1>Thông tin</h1></th>
            </tr>
            <tr>
                <th><h2>Gmail : <a href="">nhom1@gmail.com  </a></h2></th>
            </tr>
            <tr>
                <th><h2>Phone : <a href="">090909090909</a></h2></th>
            </tr>
            <tr>
                <th><h2>Địa chỉ : <a href="">273 An Dương Vương , P3 , Q5</a></h2></th>
            </tr>

        </table>
       
    </div>
    
</footer>
    `)
}
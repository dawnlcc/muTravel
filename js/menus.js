(function () {
    var bannerNavUl = document.getElementById('banner-nav-ul');
    var bannerNav = document.getElementById('banner-nav');
    var menus = document.querySelectorAll('.menus-box .menu');
    var bannerLis = document.querySelectorAll('.banner-nav-list li');

    // // 事件委托，必须使用onmouseover事件，而不是onmouseenter，我们基础课上讲过，
    // // onmouseover冒泡，onmouseenter不冒泡
    bannerNavUl.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            //获取触碰的li的data-t属性
            var t = e.target.getAttribute('data-t');

            //给li加current类名
            // 排他操作，让所有的li都去掉current类名
            for(var i=0; i<bannerLis.length;i++){
                bannerLis[i].className=bannerLis[i].getAttribute('data-t');
            }
            //匹配的这项加上current类名
            e.target.className += ' current';

            //给menu加current类名
            // 寻找匹配的menu
            var themenu = document.querySelector('.menus-box .menu[data-t=' + t + ']');
            // 排他操作，让所有的盒子都去掉current类名
            for (var i = 0; i < menus.length; i++) {
                menus[i].className = 'menu';
            }
            // 匹配的这项加上current类名
            themenu.className = 'menu current';

        }
    }

    // 当鼠标离开大盒子的时候，菜单要关闭
    bannerNav.onmouseleave = function () {
        for (var i = 0; i < bannerLis.length; i++) {
            bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            menus[i].className = 'menu'
        }

    }

})();
document.addEventListener("DOMContentLoaded", function () {
    const mapwayBox = document.querySelector(".mapwayBox");
    const mapwayBtn = document.querySelector(".mapwayBtn");
    const closeBtn = document.querySelector(".closeBtn");
    const betareaBoxRight = document.querySelector(".betareaBox");
    const toggleBtn = document.querySelector(".btn-slidebetarea");
    const bottomArea = document.querySelector(".bottombetarea");
    const slideimg = document.querySelector(".slideimg");

    //顯示/隱藏bottombetarea
    let isCollapsed = false;
    let originalHeight = bottomArea.scrollHeight + 'px';   // 初始高度
    bottomArea.style.height = originalHeight;   // 頁面載入時設定原高度

    toggleBtn.addEventListener("click", function () {
        if (!isCollapsed) {
            bottomArea.style.height = '85px';   // 收合至高度85px
            slideimg.src = "./assets/img/MarbleRace/icon/slidein.png";
            isCollapsed = true;
        } else {
            const newHeight = bottomArea.scrollHeight + 'px';   // 展開回原高度
            bottomArea.style.height = newHeight;
            slideimg.src = "./assets/img/MarbleRace/icon/slideout.png";
            isCollapsed = false;
        }
    });
    
    // 滑入/滑出mapwayBox
    function toggleMapwayBox(displayStyle) {
        if (mapwayBox) {
            mapwayBox.style.display = displayStyle;
        }
        adjustBottomAreaHeight();
    }
    if (mapwayBtn) {
        mapwayBtn.addEventListener("click", function () {
            if (window.innerHeight < window.innerWidth) {  // 檢查是否為橫式畫面
                mapwayBox.style.display = 'block';  // 在橫式畫面下隱藏mapwayBox
            }
            else {
                const newHeight = bottomArea.scrollHeight + 'px';   // 展開回原高度
                bottomArea.style.height = newHeight;
            }
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            if (window.innerHeight < window.innerWidth) {  // 檢查是否為橫式畫面
                mapwayBox.style.display = 'none';  // 在橫式畫面下隱藏mapwayBox
            }
            else {
                bottomArea.style.height = '320px';
            }
        });
    }

    // 調整mapwayBox高度，與betareaBox的高度一致
    function adjustMapwayBoxHeight() {
        if (betareaBoxRight && mapwayBox) {
            const betareaHeight = betareaBoxRight.offsetHeight;   // 獲取betareaBox的高度
            mapwayBox.style.height = betareaHeight + 'px';
        }
    }

    // 檢查螢幕方向並調整mapwayBox顯示方式
    function adjustMapwayBoxForOrientation() {
        if (window.innerHeight < window.innerWidth) {  // 橫式畫面
            if (mapwayBox) {
                mapwayBox.style.display = 'block';  // 顯示mapwayBox
            }
        } else {  // 直式畫面
            if (mapwayBox) {
                mapwayBox.style.display = 'none';  // 隱藏mapwayBox
            }
        }
    }

    window.addEventListener('resize', function() {   // 視窗改變時重新調整高度
        if (window.innerHeight < window.innerWidth) {   // 只有橫式畫面下才調整高度
            adjustMapwayBoxHeight();
        } else {
            const mapwayBox = document.querySelector('.mapwayBox');   // 如果不在橫式畫面下則清除高度設置
          if (mapwayBox) {
                mapwayBox.style.height = '';
            }
        }
    });

    window.addEventListener('load', function() {   // 頁面加載時檢查是否為橫式畫面
        adjustMapwayBoxForOrientation();
        if (window.innerHeight < window.innerWidth) {
            adjustMapwayBoxHeight();
        }
    });
    
    

});


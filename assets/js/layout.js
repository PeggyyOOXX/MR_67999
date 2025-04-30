document.addEventListener("DOMContentLoaded", function () {
    const mapwayBox = document.querySelector(".mapwayBox");
    const mapwayBtn = document.querySelector(".mapwayBtn");
    const closeBtn = document.querySelector(".closeBtn");
    const betareaBoxRight = document.querySelector(".betareaBox");
    
    // 顯示/隱藏mapwayBox
    function toggleMapwayBox(displayStyle) {
        if (mapwayBox) {
            mapwayBox.style.display = displayStyle;
        }
    }
    if (mapwayBtn) {
        mapwayBtn.addEventListener("click", function () {
            toggleMapwayBox("block");
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            toggleMapwayBox("none");
        });
    }

    // 調整mapwayBox高度，與betareaBox的高度一致
    function adjustMapwayBoxHeight() {
        if (betareaBoxRight && mapwayBox) {
            const betareaHeight = betareaBoxRight.offsetHeight;   // 獲取betareaBox的高度
            mapwayBox.style.height = betareaHeight + 'px';
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
        if (window.innerHeight < window.innerWidth) {
            adjustMapwayBoxHeight();
        }
    });
    
    //顯示/隱藏下注區bottombetarea
    const toggleBtn = document.querySelector(".btn-slidebetarea");
    const bottomArea = document.querySelector(".bottombetarea");
    const slideimg = document.querySelector(".slideimg");

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

});


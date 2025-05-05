document.addEventListener("DOMContentLoaded", function () {
    const mapwayBox = document.querySelector(".mapwayBox");
    const mapwayBtn = document.querySelector(".mapwayBtn");
    const mapwayCloseBtn = document.querySelector(".mapway-closeBtn");
    const betareaBoxRight = document.querySelector(".betareaBox");
    const toggleBtn = document.querySelector(".btn-slidebetarea");
    const bottomArea = document.querySelector(".bottombetarea");
    const slideimg = document.querySelector(".slideimg");

    let isCollapsed = false;

    const originalHeightValue = bottomArea.scrollHeight;   // 初始高度
    const originalHeight = originalHeightValue + 'px';
    bottomArea.style.height = originalHeight;   // 頁面載入時設定原高度


    // 共用 隱藏/顯示bottomArea
    function setupToggleBtn() {
        if (!toggleBtn || !bottomArea || !slideimg) return;

        toggleBtn.addEventListener("click", function () {
            if (!isCollapsed) {
                bottomArea.style.height = '85px';
                slideimg.src = "./assets/img/MarbleRace/icon/slidein.png";
                isCollapsed = true;
            } else {
                bottomArea.style.height = originalHeight;
                slideimg.src = "./assets/img/MarbleRace/icon/slideout.png";
                isCollapsed = false;
            }
        });
    }

    // 直式畫面動態
    function handlePortraitMode() {
        if (!bottomArea || !mapwayBtn || !mapwayCloseBtn) return;
        mapwayCloseBtn.addEventListener("click", function () {   // 減少140px(mapwayBox滑出)
            const newHeight = originalHeightValue - 145;
            bottomArea.style.height = newHeight + 'px';
        });
        mapwayBtn.addEventListener("click", function () {   // 還原原始高度(mapwayBox滑入)
            bottomArea.style.height = originalHeight;
        });
    }
    if (window.innerHeight > window.innerWidth) {   // 如果是直式畫面則呼叫
        handlePortraitMode();
    }

    // 橫式畫面動態
    function handleLandscapeMode() {
        if (!mapwayBtn || !mapwayCloseBtn || !mapwayBox || !betareaBoxRight) return;
        mapwayBtn.addEventListener("click", function () {   // 顯示mapwayBox並對齊betareaBox高度
            const betareaHeight = betareaBoxRight.offsetHeight;
            mapwayBox.style.height = betareaHeight + 'px';
            mapwayBox.style.display = 'block';
        });
        mapwayCloseBtn.addEventListener("click", function () {   // 隱藏mapwayBox
            mapwayBox.style.display = 'none';
        });
    }

    // 初始化呼叫
    setupToggleBtn();
    if (window.innerHeight > window.innerWidth) {
        handlePortraitMode();
    } else {
        handleLandscapeMode();
    }
    // 旋轉螢幕時自動切換
    window.addEventListener('resize', function () {
        location.reload();
    });

});


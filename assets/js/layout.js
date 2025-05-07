document.addEventListener("DOMContentLoaded", function () {
    const mapwayBox = document.querySelector(".mapwayBox");
    const betareaBoxRight = document.querySelector(".betareaBox");
    const bottomArea = document.querySelector(".bottombetarea");
    const betarealeft = document.querySelector(".betarea-horizontal-left");
    const betarearight = document.querySelector(".betarea-horizontal-right");
    const livechatrecord = document.querySelector(".chatrecord");
    const selectroomBox = document.querySelector(".selectroomBox");
    const videoMain = document.querySelector(".videomain");
    const livechatBox = document.querySelector(".livechatBox");
    const selectliveBox = document.querySelector(".selectliveBox");

    // 要統一處理的邏輯
    function initializeInterface() {
        // 原始的按鈕元素
        const mapwayBtn = document.querySelector(".mapwayBtn");
        const mapwayCloseBtn = document.querySelector(".mapway-closeBtn");
        const showhidebetareaBtn = document.querySelector(".btn-showhidebetarea");
        const showhidelivechatBtn = document.querySelector(".btn-livedown");
        const videoSwitch = document.querySelector(".videoswitch");
        const openSidebarroom = document.querySelector(".openselectroomBox");

        if (!mapwayBtn || !mapwayCloseBtn || !mapwayBox || !betareaBoxRight || !bottomArea) return;   // 檢查元素是否存在

        // 清除舊的事件監聽
        const newMapwayBtn = mapwayBtn.cloneNode(true);
        const newMapwayCloseBtn = mapwayCloseBtn.cloneNode(true);
        const newShowhidebetareaBtn = showhidebetareaBtn.cloneNode(true);
        const newShowhidelivechatBtn = showhidelivechatBtn.cloneNode(true);
        const newVideoSwitch = videoSwitch.cloneNode(true);
        const newOpenSidebarroom = openSidebarroom.cloneNode(true);

        mapwayBtn.replaceWith(newMapwayBtn);
        mapwayCloseBtn.replaceWith(newMapwayCloseBtn);
        showhidebetareaBtn.replaceWith(newShowhidebetareaBtn);
        showhidelivechatBtn.replaceWith(newShowhidelivechatBtn);
        videoSwitch.replaceWith(newVideoSwitch);
        openSidebarroom.replaceWith(newOpenSidebarroom);

        // 重新選取子元素圖片
        const newShowhidebetareaimg = document.querySelector(".showhidebetareaimg");
        const newShowhidelivechatimg = document.querySelector(".livearrow");
        const newToggleIcon = newOpenSidebarroom.querySelector(".openarrow");

        // 路書顯示/隱藏
        newMapwayBtn.addEventListener("click", function () {
            mapwayBox.style.display = 'block';
            if (window.innerWidth > window.innerHeight) {
                const betareaHeight = betareaBoxRight.offsetHeight;
                mapwayBox.style.height = betareaHeight + 'px';
            } else {
                mapwayBox.style.height = 'auto';
            }
        });
        newMapwayCloseBtn.addEventListener("click", function () {
            mapwayBox.style.display = 'none';
        });

        // 投注區顯示/隱藏
        newShowhidebetareaBtn.addEventListener("click", function () {
            const betareaHidden = betarealeft.style.display === 'none' || betarearight.style.display === 'none';
            betarealeft.style.display = betareaHidden ? 'block' : 'none';
            betarearight.style.display = betareaHidden ? 'block' : 'none';
            if (newShowhidebetareaimg) {
                newShowhidebetareaimg.src = betareaHidden ? './assets/img/MarbleRace/icon/zoomout.png' : './assets/img/MarbleRace/icon/zoomin.png';
            }
        });

        // 直播聊天室顯示/隱藏
        newShowhidelivechatBtn.addEventListener("click", function () {
            const livechatHidden = livechatrecord.style.display === 'none';
            livechatrecord.style.display = livechatHidden ? 'block' : 'none';
            if (newShowhidelivechatimg) {
                newShowhidelivechatimg.style.transform = livechatHidden ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });

        // 直播選桌邊欄
        newOpenSidebarroom.addEventListener("click", function () {
            selectroomBox.classList.toggle("open");
            if (selectroomBox.classList.contains("open")) {
                newOpenSidebarroom.style.left = "45%";
                if (newToggleIcon) newToggleIcon.style.transform = "rotate(180deg)";
            } else {
                newOpenSidebarroom.style.left = "0";
                if (newToggleIcon) newToggleIcon.style.transform = "rotate(0deg)";
            }
        });

        // 主次畫面切換
        newVideoSwitch.addEventListener('click', function() {
            const mainContent = videoMain.innerHTML;
            const switchContent = newVideoSwitch.innerHTML;
            videoMain.innerHTML = switchContent;
            newVideoSwitch.innerHTML = mainContent;
            updateInterfaceBasedOnMainContent();
        });
    }

    // 根據主畫面內容和設備方向更新介面
    function updateInterfaceBasedOnMainContent() {
        const hasLiveAnchor = videoMain.querySelector('.live-anchor') !== null;
        const hasMarbleRacing = videoMain.querySelector('.live-MarbleRacing') !== null;
        const isPortrait = window.innerHeight > window.innerWidth;

        // 更新直播聊天室和直播選桌邊欄的可見性
        if (hasLiveAnchor) {
            livechatBox.style.display = 'block';
            selectliveBox.style.display = 'block';
        } else if (hasMarbleRacing) {
            livechatBox.style.display = 'none';
            selectliveBox.style.display = 'none';
        }
    }

    // 初始載入
    initializeInterface();
    updateInterfaceBasedOnMainContent();

    // 螢幕大小或方向變化時重新初始化
    window.addEventListener('resize', function () {
        initializeInterface();
        updateInterfaceBasedOnMainContent();
    });

});
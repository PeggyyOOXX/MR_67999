document.addEventListener("DOMContentLoaded", function () {
    // 選擇 DOM 元素
    const mapwayBox = document.querySelector(".mapwayBox");
    const mapwayBtn = document.querySelector(".mapwayBtn");
    const mapwayCloseBtn = document.querySelector(".mapway-closeBtn");
    const betareaBoxRight = document.querySelector(".betareaBox");
    const showhidebetareaBtn = document.querySelector(".btn-showhidebetarea");
    const showhidebetareaimg = document.querySelector(".showhidebetareaimg");
    const bottomArea = document.querySelector(".bottombetarea");
    const betarealeft = document.querySelector(".betarea-horizontal-left");
    const betarearight = document.querySelector(".betarea-horizontal-right");
    const showhidelivechatBtn = document.querySelector(".btn-livedown");
    const showhidelivechatimg = document.querySelector(".livearrow");
    const livechatrecord = document.querySelector(".chatrecord");
    const selectroomBox = document.querySelector(".selectroomBox");
    const openSidebarroom = document.querySelector(".openselectroomBox");
    const toggleIcon = openSidebarroom.querySelector(".openarrow");
    const videoMain = document.querySelector('.videomain');
    const videoSwitch = document.querySelector('.videoswitch');
    const livechatBox = document.querySelector('.livechatBox');
    const selectliveBox = document.querySelector('.selectliveBox');

    // 統一處理交互邏輯
    function initializeInterface() {
        // 檢查元素是否存在
        if (!mapwayBtn || !mapwayCloseBtn || !mapwayBox || !betareaBoxRight || !bottomArea) return;

        // 清除舊的事件監聽器
        mapwayBtn.replaceWith(mapwayBtn.cloneNode(true));
        mapwayCloseBtn.replaceWith(mapwayCloseBtn.cloneNode(true));
        showhidebetareaBtn.replaceWith(showhidebetareaBtn.cloneNode(true));
        showhidelivechatBtn.replaceWith(showhidelivechatBtn.cloneNode(true));
        videoSwitch.replaceWith(videoSwitch.cloneNode(true));
        openSidebarroom.replaceWith(openSidebarroom.cloneNode(true));

        // 重新選擇 DOM 元素
        const newMapwayBtn = document.querySelector(".mapwayBtn");
        const newMapwayCloseBtn = document.querySelector(".mapway-closeBtn");
        const newShowhidebetareaBtn = document.querySelector(".btn-showhidebetarea");
        const newShowhidelivechatBtn = document.querySelector(".btn-livedown");
        const newVideoSwitch = document.querySelector('.videoswitch');
        const newOpenSidebarroom = document.querySelector(".openselectroomBox");

        // 地圖框顯示/隱藏
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

        // 投注區域顯示/隱藏
        newShowhidebetareaBtn.addEventListener("click", function () {
            const betareaHidden = betarealeft.style.display === 'none' || betarearight.style.display === 'none';
            betarealeft.style.display = betareaHidden ? 'block' : 'none';
            betarearight.style.display = betareaHidden ? 'block' : 'none';
            showhidebetareaimg.src = betareaHidden ? './assets/img/MarbleRace/icon/zoomout.png' : './assets/img/MarbleRace/icon/zoomin.png';
        });

        // 直播聊天框顯示/隱藏
        newShowhidelivechatBtn.addEventListener("click", function () {
            const livechatHidden = livechatrecord.style.display === 'none';
            livechatrecord.style.display = livechatHidden ? 'block' : 'none';
            showhidelivechatimg.style.transform = livechatHidden ? 'rotate(0deg)' : 'rotate(180deg)';
        });

        // 直播選桌邊欄
        newOpenSidebarroom.addEventListener("click", function () {
            selectroomBox.classList.toggle("open");
            if (selectroomBox.classList.contains("open")) {
                newOpenSidebarroom.style.left = "45%";
                toggleIcon.style.transform = "rotate(180deg)";
            } else {
                newOpenSidebarroom.style.left = "0";
                toggleIcon.style.transform = "rotate(0deg)";
            }
        });

        // 視頻切換
        newVideoSwitch.addEventListener('click', function() {
            const mainContent = videoMain.innerHTML;
            const switchContent = newVideoSwitch.innerHTML;
            videoMain.innerHTML = switchContent;
            newVideoSwitch.innerHTML = mainContent;
            updateInterfaceBasedOnMainContent();
        });
    }

    // 根據主視頻內容和設備方向更新介面
    function updateInterfaceBasedOnMainContent() {
        const hasLiveAnchor = videoMain.querySelector('.live-anchor') !== null;
        const hasMarbleRacing = videoMain.querySelector('.live-MarbleRacing') !== null;
        const isPortrait = window.innerHeight > window.innerWidth;

        // 更新直播聊天框和選擇直播框的可見性
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

    
    document.head.appendChild(styleElement);
});
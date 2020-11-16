let leftButtonsHS = document.querySelector(".stores-list");
let anchorButtonLeft = false;

leftButtonsHS.onscroll = function () {
    leftButtonsHSScroll();
};

/**
* Hide search on click in the part of the store 
*/
function hideSearch() {
    if (anchorButtonLeft) {
        return;
    }

    if (leftButtonsHS.scrollTop < 45) {
        document.querySelector(".search").classList.add("hide");
    }

    document.querySelector(".search").classList.remove("sticky-search");
    document.querySelector(".anchor-search-left").style.display = "none";
    document.querySelector(".show-search-left").style.display = "block";
};

/**
* Show search on click in the part of the store 
*/
function showSearch() {
    if (leftButtonsHS.scrollTop > 45) {
        document.querySelector(".anchor-search-left").classList.add("sticky-button");
    }

    document.querySelector(".search").classList.remove("hide");
    document.querySelector(".search").classList.add("sticky-search");
    document.querySelector(".show-search-left").style.display = "none";
    document.querySelector(".anchor-search-left").style.display = "block";
};

/**
* Anchors the search in the part of the store 
*/
function anchorSearch() {
    anchorButtonLeft = !anchorButtonLeft;

    if (anchorButtonLeft) {
        document.querySelector(".anchor-search").classList.add("on-anchor");
        document.querySelector(".search").classList.add("sticky-search");
        document.querySelector(".anchor-search-left").classList.add("sticky-button");
    } else {
        document.querySelector(".anchor-search").classList.remove("on-anchor");
    }
};

/**
* Hiding search when scrolling in the part of the store 
*/
function leftButtonsHSScroll() {
    if (anchorButtonLeft) {
        document.querySelector(".search").classList.add("sticky-search");
        document.querySelector(".anchor-search-left").classList.add("sticky-button");
    } else {
        if (leftButtonsHS.scrollTop <= 45) {
            document.querySelector(".search").classList.remove("hide");
            document.querySelector(".anchor-search-left").classList.remove("sticky-button");
            document.querySelector(".anchor-search-left").style.display = "block";
            document.querySelector(".show-search-left").style.display = "none";
        }

        if (leftButtonsHS.scrollTop > 45) {
            document.querySelector(".anchor-search-left").style.display = "none";
            document.querySelector(".show-search-left").style.display = "block";
        }

        if (document.querySelector(".search").classList.contains("sticky-search") === true) {
            document.querySelector(".search").classList.remove("sticky-search");
        }
    }
};

let rightButtonsHS = document.querySelector(".store-details");
let anchorButtonRight = false;

rightButtonsHS.onscroll = function () {
    rightButtonsHSScroll();
};

/**
* Hide contact info on click on the right side 
*/
function hideSearchRight() {
    if (anchorButtonRight) {
        return;
	}
	
	if (rightButtonsHS.scrollTop < 60) {
        document.querySelector(".header").classList.add("hide");
    }
	
	document.querySelector(".header").classList.remove("sticky-search-right"); 
    document.querySelector(".anchor-search-right").style.display = "none";
    document.querySelector(".show-search-right").style.display = "block";
};

/**
* Show contact info on click on the right side 
*/
function showSearchRight() {
	if (rightButtonsHS.scrollTop > 60) {
        document.querySelector(".anchor-search-right").classList.add("sticky-button-right");
    }

    document.querySelector(".header").classList.remove("hide"); 
    document.querySelector(".header").classList.add("sticky-search-right"); 
    document.querySelector(".show-search-right").style.display = "none"; 
	document.querySelector(".anchor-search-right").style.display = "block";
	document.querySelector(".title-sticky").classList.add("sticky-title");
};

/**
* Anchor contact info on click on the right side 
*/
function anchorSearchRight() {
    anchorButtonRight = !anchorButtonRight;

    if (anchorButtonRight) {
		document.querySelector(".anchor-right-search").classList.add("on-anchor");
		document.querySelector(".header").classList.add("sticky-search-right");
        document.querySelector(".anchor-search-right").classList.add("sticky-button-right");
    } else {
        document.querySelector(".anchor-right-search").classList.remove("on-anchor");
    }
};

/**
* Hiding search when scrolling in the right side 
*/
function rightButtonsHSScroll() {
    if (anchorButtonRight) {
        document.querySelector(".header").classList.add("sticky-search-right");
		document.querySelector(".anchor-search-right").classList.add("sticky-button-right");
		document.querySelector(".title-sticky").classList.add("sticky-title");
    } else {
		if (rightButtonsHS.scrollTop <= 60) {
            document.querySelector(".header").classList.remove("hide");
            document.querySelector(".anchor-search-right").classList.remove("sticky-button-right");
            document.querySelector(".anchor-search-right").style.display = "block";
            document.querySelector(".show-search-right").style.display = "none";
        }

		if (rightButtonsHS.scrollTop > 60) {
				document.querySelector(".anchor-search-right").style.display = "none";
				document.querySelector(".show-search-right").style.display = "block";
				document.querySelector(".title-sticky").classList.remove("sticky-title");
		}
		
		if (document.querySelector(".header").classList.contains("sticky-search-right") === true) {
            document.querySelector(".header").classList.remove("sticky-search-right");
        }
	}
};

export {
    anchorSearch,
    showSearch,
    hideSearch,
    anchorSearchRight,
    showSearchRight,
    hideSearchRight,
    leftButtonsHS,
    rightButtonsHS,
    leftButtonsHSScroll,
    rightButtonsHSScroll,
};

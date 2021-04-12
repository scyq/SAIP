import Header from "./Composition/Header/Header";
import Footer from "./Composition/Footer/Footer";
import Sidebar from "./Composition/Sidebar/Sidebar";
import Breadcrumb from "./Composition/Breadcrumb/Breadcrumb";
import MiniFooter from "./Composition/MiniFooter/MiniFooter";

import imgHolyGrail from "./assets/layouts/holy_grail.png";
import imgSandwich from "./assets/layouts/sandwich.png";
import imgBannerSidebarLeft from "./assets/layouts/banner_sidebar_left.png";
import imgBannerSidebarRight from "./assets/layouts/banner_sidebar_right.png";
import imgBanner from "./assets/layouts/banner.png";
import imgSidebarLeft from "./assets/layouts/sidebar_left.png";
import imgSidebarRight from "./assets/layouts/sidebar_right.png";
import imgTopBottom from "./assets/layouts/top_bottom.png";
import imgBannerTwoColumn from "./assets/layouts/banner_two_column.png"
import imgPoster from "./assets/layouts/poster.png";
import imgGrids from "./assets/layouts/grids.png";
import imgP2PGrids from "./assets/layouts/peer_to_peer_grids.png";

class Info {
    constructor(key, originWord) {
        this.key = key;
        this.origin = originWord;
    }
}

const Layout = {
    HOLY_GRAIL: 0,
    SANDWICH: 1,
    BANNER_SIDEBAR_LEFT: 2,
    BANNER_SIDEBAR_RIGHT: 3,
    BANNER: 4,
    SIDEBAR_LEFT: 5,
    SIDEBAR_RIGHT: 6,
    TOP_BOTTOM: 7,
    BANNER_TWO_COLUMN: 8,
    POSTER: 9,
    GRIDS: 10,
    PEER_TO_PEER_GRIDS: 11
}

/**
 * @param {number} layout index of layout
 * @return {Array} the react-grids-layout information
 */
export function layoutParser(layout) {
    switch (layout) {
        case Layout.HOLY_GRAIL:
            return [
                { i: "header", x: 0, y: 0, h: 7, w: 12 },
                { i: "leftSidebar", x: 0, y: 7, w: 2, h: 70 },
                { i: "mainContent", x: 2, y: 7, w: 8, h: 70 },
                { i: "rightSidebar", x: 10, y: 7, w: 2, h: 70 },
                { i: "footer", x: 0, y: 77, h: 8, w: 12 },
            ];
        case Layout.SANDWICH:
            return [
                { i: "header", x: 0, y: 0, h: 7, w: 12 },
                { i: "mainContent", x: 3, y: 7, w: 12, h: 70 },
                { i: "footer", x: 0, y: 77, h: 8, w: 12 },
            ];
        case Layout.BANNER_SIDEBAR_LEFT:
            return [
                { i: "header", x: 0, y: 0, h: 7, w: 12 },
                { i: "leftSidebar", x: 0, y: 7, w: 2, h: 82 },
                { i: "bannerMainContent", x: 2, y: 7, w: 10, h: 82 },
            ];
        case Layout.BANNER_SIDEBAR_RIGHT:
            return [
                { i: "header", x: 0, y: 0, h: 7, w: 12 },
                { i: "rightSidebar", x: 10, y: 7, w: 2, h: 82 },
                { i: "bannerMainContent", x: 0, y: 7, w: 10, h: 82 },
            ];
        case Layout.BANNER:
            return [
                { i: "header", x: 0, y: 0, h: 7, w: 12 },
                { i: "bannerMainContent", x: 0, y: 0, w: 12, h: 82 },
            ];
        case Layout.BANNER_TWO_COLUMN:
            return [
                { i: "header", x: 0, y: 0, h: 7, w: 12 },
                { i: "firstColumn", x: 0, y: 7, w: 6, h: 82 },
                { i: "secondColumn", x: 6, y: 7, w: 6, h: 82 },
            ];
        case Layout.SIDEBAR_LEFT:
            return [
                { i: "leftSidebar", x: 0, y: 0, w: 2, h: 90 },
                { i: "bannerMainContent", x: 2, y: 0, w: 10, h: 90 },
            ];
        case Layout.SIDEBAR_RIGHT:
            return [
                { i: "rightSidebar", x: 10, y: 0, w: 2, h: 90 },
                { i: "bannerMainContent", x: 0, y: 0, w: 10, h: 90 },
            ];
        case Layout.TOP_BOTTOM:
            return [
                { i: "top", x: 0, y: 0, w: 12, h: 40 },
                { i: "bottom", x: 0, y: 40, w: 12, h: 50 },
            ];
        case Layout.POSTER:
            return [
                { i: "breadcrumb", x: 0, y: 0, h: 3, w: 12 },
                { i: "mainContent", x: 3, y: 7, w: 12, h: 80 },
                { i: "miniFooter", x: 0, y: 77, h: 5, w: 12 },
            ];
        case Layout.GRIDS:
            return [
                { i: "grid1", x: 0, y: 0, w: 8, h: 50 },
                { i: "grid2", x: 8, y: 0, w: 4, h: 30 },
                { i: "grid3", x: 0, y: 50, w: 5, h: 40 },
                { i: "grid4", x: 5, y: 50, w: 3, h: 40 },
                { i: "grid5", x: 8, y: 0, w: 4, h: 60 },
            ];
        case Layout.PEER_TO_PEER_GRIDS:
            return [
                { i: "p-grid1", x: 0, y: 0, w: 12, h: 40 },
                { i: "p-grid2", x: 0, y: 40, w: 4, h: 25 },
                { i: "p-grid3", x: 4, y: 40, w: 4, h: 25 },
                { i: "p-grid4", x: 8, y: 40, w: 4, h: 25 },
                { i: "p-grid5", x: 0, y: 65, w: 4, h: 25 },
                { i: "p-grid6", x: 4, y: 65, w: 4, h: 25 },
                { i: "p-grid7", x: 8, y: 65, w: 4, h: 25 },
            ];

        default:
            throw new Error("No such a layout");
    }
}

export function getLayoutIndex(str) {
    switch (str) {
        case "holy-grail":
            return Layout.HOLY_GRAIL;
        case "sandwich":
            return Layout.SANDWICH;
        case "banner-sidebar-left":
            return Layout.BANNER_SIDEBAR_LEFT;
        case "banner-sidebar-right":
            return Layout.BANNER_SIDEBAR_RIGHT;
        case "banner":
            return Layout.BANNER;
        case "sidebar-left":
            return Layout.SIDEBAR_LEFT;
        case "sidebar-right":
            return Layout.SIDEBAR_RIGHT;
        case "top-bottom":
            return Layout.TOP_BOTTOM;
        case "banner-two-column":
            return Layout.BANNER_TWO_COLUMN;
        case "poster":
            return Layout.POSTER;
        case "grids":
            return Layout.GRIDS;
        case "peer-to-peer-grids":
            return Layout.PEER_TO_PEER_GRIDS;
        default:
            throw new Error("Can not match layout.");
    }
}

export function getLayoutImage(index) {
    switch (index) {
        case Layout.HOLY_GRAIL:
            return imgHolyGrail;
        case Layout.SANDWICH:
            return imgSandwich;
        case Layout.BANNER_SIDEBAR_LEFT:
            return imgBannerSidebarLeft;
        case Layout.BANNER_SIDEBAR_RIGHT:
            return imgBannerSidebarRight;
        case Layout.BANNER:
            return imgBanner;
        case Layout.BANNER_TWO_COLUMN:
            return imgBannerTwoColumn;
        case Layout.SIDEBAR_LEFT:
            return imgSidebarLeft;
        case Layout.SIDEBAR_RIGHT:
            return imgSidebarRight;
        case Layout.TOP_BOTTOM:
            return imgTopBottom;
        case Layout.POSTER:
            return imgPoster;
        case Layout.GRIDS:
            return imgGrids;
        case Layout.PEER_TO_PEER_GRIDS:
            return imgP2PGrids;
        default:
            throw new Error("No related img");
    }
}


/**
 * @param {string} component component key
 * @returns {ReactComponentElement} 
 */
function getRelatedComponent(component) {
    switch (component) {
        case "header":
            return <Header></Header>;
        case "footer":
            return <Footer></Footer>;
        case "leftSidebar":
            return <Sidebar direct="left"></Sidebar>;
        case "rightSidebar":
            return <Sidebar direct="right"></Sidebar>;
        case "breadcrumb":
            return <Breadcrumb></Breadcrumb>;
        case "miniFooter":
            return <MiniFooter></MiniFooter>;

        default:
            return component;
    }
}


/**
 * @param {Array} layoutConfig 
 * @return {ReactComponentElement} the element to render
 */
export function generateDOM(layoutConfig) {
    let renderList = [];
    for (const config of layoutConfig) {
        renderList.push(
            <div key={config.i} style={{ borderStyle: "solid" }}> {getRelatedComponent(config.i)}</div >
        )
    }
    return renderList;
}

export default Layout;
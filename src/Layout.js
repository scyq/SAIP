import Header from "./Composition/Header/Header";
import Footer from "./Composition/Footer/Footer";
import Sidebar from "./Composition/Sidebar/Sidebar";
import Breadcrumb from "./Composition/Breadcrumb/Breadcrumb";
import MiniFooter from "./Composition/MiniFooter/MiniFooter";

const Layout = {
    HOLY_GRAIL: 0,
    SANDWITCH: 1,
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
        case Layout.SANDWITCH:
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
import Header from "./Composition/Header/Header";
import Footer from "./Composition/Footer/Footer";

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
                { i: "header", x: 0, y: 0, h: 5, w: 12 },
                { i: "leftSidebar", x: 0, y: 12, w: 3, h: 13 },
                { i: "mainContent", x: 3, y: 12, w: 6, h: 13 },
                { i: "rightSidebar", x: 9, y: 12, w: 3, h: 13 },
                { i: "footer", x: 0, y: 24, h: 5, w: 12 },
            ];
        case Layout.SANDWITCH:
            return [
                { i: "header", x: 0, y: 0, h: 2, w: 12 },
                { i: "mainContent", x: 3, y: 12, w: 12, h: 13 },
                { i: "footer", x: 0, y: 24, h: 5, w: 12 },
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
            <div key={config.i}> {getRelatedComponent(config.i)}</div >
        )
    }
    return renderList;
}

export default Layout;
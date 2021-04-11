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
                { i: "header", x: 0, y: 0, h: 12, w: 12 },
                { i: "leftSidebar", x: 10, y: 12, w: 3, h: 2 }
            ]

        default:
            throw new Error("No such a layout");
    }
}

function getRelatedComponent() {

}


/**
 * @param {Array} layoutConfig 
 * @return {ReactComponentElement} the element to render
 */
export function getGeneratedLayout(layoutConfig) {
    let renderList = [];
    for (const config of layoutConfig) {
        renderList.push(
            <div className="generated-div" key={config.i} style={{ background: "#6429ec" }}>{config.i}</div>
        )
    }
    return renderList;
}

export default Layout;
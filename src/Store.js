import { action, makeObservable, observable } from "mobx";
import Layout, { getLayoutIndex } from "./Layout";

class Store {

    constructor() {
        makeObservable(this);
    }

    host = "http://127.0.0.1:8000";

    @observable activeStep = 0;
    @observable steps = ['Application scenario', 'Styles', 'Recommendation', 'Modification'];

    @observable targetLayout = Layout.PEER_TO_PEER_GRIDS;

    @observable isAnalysizing = false;

    /**
     * 0 - App state
     * 1 - Generation state
     */
    @observable state = 0;
    @observable functionalRequirements = "";
    @observable styleRequiremnets = "";

    @observable recommendLayout = null;
    @observable recommendStyle = null;

    @observable originLayoutWords = null;
    @observable originStyleWords = null;

    @action
    changeFunctionalRequirement(requirement) {
        this.functionalRequirements = requirement;
    }

    @action
    changeStyleRequirement(requirement) {
        this.styleRequiremnets = requirement;
    }

    @action
    handleRequirementsDone() {
        this.activeStep++;
        this.isAnalysizing = false;
    }

    @action
    changeRecommendLayout(result) {
        // unique
        let layout = Array.from(new Set(result.layouts));
        this.recommendLayout = layout.map(ele => {
            return getLayoutIndex(ele);
        });
        this.originLayoutWords = result.words;
    }

    @action
    changeRecommendStyle(results) {
        this.recommendStyle = results.colorList;
        this.originStyleWords = results.words;
    }

    @action
    handleRequirements() {
        switch (this.activeStep) {
            case 0:
                fetch(this.host + "/function_analysis?data=" + this.functionalRequirements)
                    .then(res => res.json())
                    .then((result) => {
                        this.changeRecommendLayout(result);
                        this.handleRequirementsDone();
                    });
                break;
            case 1:
                fetch(this.host + "/style_analysis?data=" + this.styleRequiremnets)
                    .then(res => res.json())
                    .then((result) => {
                        this.changeRecommendStyle(result);
                        this.handleRequirementsDone();
                    });
                break;
            default:
                break;
        }
    }

    @action
    changeActiveStep(operation) {
        if (operation === "++") {
            this.isAnalysizing = true;
            this.handleRequirements();
        } else if (operation === "--") {
            this.activeStep--;
        } else {
            throw new Error("No such operation");
        }
    }

    @action
    resetActiveStep() {
        this.activeStep = 0;
    }
}

export default new Store();

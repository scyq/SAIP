import { action, makeObservable, observable } from "mobx";
import Layout, { getLayoutInfo, getStyleInfo, getLayoutIndex } from "./Layout";

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

    @observable chosenLayout = null;
    @observable chosenPrimaryColor = null;
    @observable chosenSecondaryColor = null;

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
        let info = [];
        this.originLayoutWords = result.words;
        for (let i = 0; i < result.words.length; i++) {
            const layout = result.layouts[i];
            const last = result.layouts.indexOf(layout);

            // if layout repeated
            if (last === i) {
                info.push(getLayoutInfo(result.layouts[i], result.words[i]));
            } else {
                for (let j = 0; j < info.length; j++) {
                    if (info[j].layoutIndex === getLayoutIndex(layout)) {
                        info[j].addNewOriginWord(result.words[i]);
                    }
                }
            }
        }
        this.recommendLayout = info;
    }

    @action
    changeRecommendStyle(results) {
        let info = [];
        this.originStyleWords = results.words;
        for (let i = 0; i < results.words.length; i++) {
            info.push(getStyleInfo(results.colorList[i], results.words[i]));
        }
        this.recommendStyle = info;
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
            if (this.activeStep === 0 || this.activeStep === 1) {
                this.isAnalysizing = true;
                this.handleRequirements();
            } else {
                this.activeStep++;
            }
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

    @action
    showResult() {
        this.state = 1;
    }
}

export default new Store();

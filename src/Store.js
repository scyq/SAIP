import { action, makeObservable, observable } from "mobx";
import Layout from "./Layout";

class Store {

    constructor() {
        makeObservable(this);
    }

    host = "http://127.0.0.1:9999";

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

    @action
    handleRequirements() {
        switch (this.activeStep) {
            case 0:
                return fetch(this.host + "/function-analysis" + this.functionalRequirements);
            default:
                break;
        }
    }

    @action
    changeActiveStep(operation) {
        if (operation === "++") {
            const promise = this.handleRequirements();
            promise.then(res => {
                console.log(res);
            })
            this.activeStep++;
            this.isAnalysizing = true;
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

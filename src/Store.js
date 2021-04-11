import { action, makeObservable, observable } from "mobx";
import Layout from "./Layout";

class Store {

    constructor() {
        makeObservable(this);
    }

    @observable activeStep = 0;
    @observable steps = ['Application scenario', 'Styles', 'Recommendation', 'Modification'];

    @observable targetLayout = Layout.SANDWITCH;

    /**
     * 0 - App state
     * 1 - Generation state
     */
    @observable state = 1;

    @action
    changeActiveStep(operation) {
        if (operation === "++") {
            this.activeStep++;
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

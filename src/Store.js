import { observable } from "mobx";

export default class Store {
    @observable steps = ['Application scenario', 'Styles', 'Recommendation', 'Modification'];
}

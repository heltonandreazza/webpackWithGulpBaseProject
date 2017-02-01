/**
 * Service that keeps the last filters states from user 
 */
class stateMemoryService {
    /*@ngInject*/
    constructor() {
        this.states = {}
    }

    setStateParams(params, state) {
        this.states[state] = params;
    }

    getStateParams(state) {
        if (state)
            return this.states[state];

        return states;
    }

    getStateParamsFilter(state, inputs) {
        if (this.states[state]) {
            let filters = this.states[state];

            let filterProps = Object.keys(filters);
            //for each filter
            filterProps.forEach(prop => {
                //match the inputs multiselect
                if (inputs.hasOwnProperty(prop)) {
                    if (Array.isArray(inputs[prop])) {
                        //set ticked the inputs multiselect matching by selected items in filter
                        this.tickMultiSelectItems(inputs[prop], filters[prop]);
                    } else {
                        inputs[prop] = filters[prop];
                    }
                }
            });

            return {
                filter: filters,
                input: inputs
            }
        }
    }

    /**
     * Selects an item on the multiselect based on the id.
     * @param multiselectItems {object} - array that have the multiselect items.
     * @param selectedItems {object} - array that have the selected items.
     */
    tickMultiSelectItems(multiselectItems, selectedItems) {
        multiselectItems.forEach(item => {
            let foundItem = selectedItems.find(o => {
                if (typeof o == "object") {
                    return o.id == item.id;
                } else {
                    return o == item.id;
                }
            });
            if (foundItem)
                item.ticked = true;
            else
                item.ticked = false;
        });
    }

}

export default stateMemoryService;
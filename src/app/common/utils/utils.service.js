class utilsService {
    /*@ngInject*/
    constructor() {}

    treatNegativeValues(array, prop) {
        array.forEach(o => {
            if (typeof o.natureza == 'string') {
                if (o.natureza == 'Debito') {
                    o[prop] = o[prop] * -1;
                }
            } else {
                if (o.natureza > 0) {
                    o[prop] = o[prop] * -1;
                }
            }
        });
    }

    getAbsoluteValues(array, prop) {
        return array.map(o => {
            let newObject = angular.copy(o);
            if (typeof newObject.natureza == 'string') {
                if (newObject.natureza == 'Debito') {
                    newObject[prop] = newObject[prop] * -1;
                }
            } else {
                if (newObject.natureza > 0) {
                    newObject[prop] = newObject[prop] * -1;
                }
            }
            return newObject;
        });
    }

    /**
     * Return a new Date (today), but if the param remove is true, it's 
     * going to return today minus days param.
     * @param {Boolean} remove - To remove days from the new Date object.
     * @param {Number} days - The amount of days that are going to be removed.
     */
    getDate(remove, days) {
        const date = new Date();
        return remove ? date.setDate(date.getDate() - days) : date;
    }

    /**
     * Return a new Date (first day of current month)
     * @param {Date} date - The date to get month basis
     */
    getFirstDate(date) {
        let y = date.getFullYear(),
            m = date.getMonth(),
            firstDate = new Date();

        firstDate.setFullYear(y, m, 1);
        return firstDate;
    }

    /**
     * Return a new Date (last day of current month)
     * @param {Date} date - The date to get month basis
     */
    getLastDate(date) {
        let y = date.getFullYear(),
            m = date.getMonth(),
            lastDate = new Date();

        lastDate.setFullYear(y, m + 1, 0);
        return lastDate;
    }


}
export default utilsService;
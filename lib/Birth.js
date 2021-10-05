// require errors
// Path: lib\Birth.js
const { InvaidDateRange } = require('./Errors');

// class Birth
class Birth {
    constructor(BirthDate) {
        // variables
        if (BirthDate === undefined || BirthDate === null || BirthDate === '') {
            throw new Error('BirthDate is required');
        }
        this.BirthDate = String(BirthDate);
        this.Bdate = new Date(BirthDate);
        this.CurrentDate = new Date();
        // variables
        this.formula = (this.CurrentDate - this.Bdate);
        this.methods = {
            'seconds': this.formula / 1000,
            'minutes': this.formula / 1000 / 60,
            'hours': this.formula / 1000 / 60 / 60,
            'days': this.formula / (1000 * 60 * 60 * 24),
            'weeks': this.formula / (1000 * 60 * 60 * 24 * 7),
            'months': this.formula / (1000 * 60 * 60 * 24 * 30),
            'years': this.formula / (1000 * 60 * 60 * 24 * 365),
        };

        this.#CheckDate();
    }

    #CheckDate() {
        if (this.BirthDate.split('-')[1] > 12) {
            throw new InvaidDateRange(`The maximum allowed entry of the month is 12, ${this.BirthDate}`);
        } else if (this.BirthDate.split('-')[1] < 1) {
            throw new InvaidDateRange(`The minimum allowed entry of the month is 1, ${this.BirthDate}`);
        } else if (this.BirthDate.split('-')[2] > 31) {
            throw new InvaidDateRange(`The maximum allowed entry of the day is 31, ${this.BirthDate}`);
        } else if (this.BirthDate.split('-')[2] < 1) {
            throw new InvaidDateRange(`The minimum allowed entry of the day is 1, ${this.BirthDate}`);
        } else {
            return true;
        }
    }
    // methods 

    // method : getAge
    /**
     * @returns {number} age
     * @example
     * const b = new Birth('1999-9-9');
     * console.log(B.getAge()); // 22
    */
    getAge() {
        const age = this.CurrentDate.getFullYear() - this.Bdate.getFullYear();
        const brithMonth = parseInt(this.BirthDate.split('-')[1]);
        const brithday = parseInt(this.BirthDate.split('-')[2]);

        if (this.CurrentDate.getMonth() < brithMonth - 1) {
            return age - 1;
        } else if (this.CurrentDate.getMonth() === brithMonth - 1 && this.CurrentDate.getDate() < brithday) {
            return age - 1;
        }
        return age;
    }

    // method : getSeconds
    /**
     * @returns {number} seconds 
     * @example
     * const b = new Birth('1999-9-9');
     * console.log(B.getSeconds()); // 696627670
    */
    getSeconds() {
        return Math.floor(this.methods.seconds);
    }

    // method : getMinutes
    /**
     * @returns {number} minutes
     * @example
     * const b = new Birth('1999-9-9');
     * console.log(B.getMinutes()); // 11610509
    */
    getMinutes() {
        return Math.floor(this.methods.minutes);
    }

    // method : getHours
    /**
     * @returns {number} hours
     * @example
     * const B = new Birth('1999-9-9');
     * console.log(B.getHours()); // 192720
    */
    getHours() {
        return Math.floor(this.methods.hours);
    }

    // method : getDays
    /**
     * @returns {number} days
     * @example
     * const B = new Birth('1999-9-9');
     * console.log(B.getDays()); // 8062
    */
    getDays() {
        return Math.floor(this.methods.days);
    }

    // method : getWeeks
    /**
     * @returns {number} weeks
     * @example
     * const B = new Birth('1999-9-9');
     * console.log(B.getWeeks()); // 1151
    */
    getWeeks() {
        return Math.floor(this.methods.weeks);
    }

    // method : getMonths
    /**
     * @returns {number} months
     * @example
     * const B = new Birth('1999-9-9');
     * console.log(B.getMonths()); // 268
    */
    getMonths() {
        return Math.floor(this.methods.months);
    }

    // method : getYears
    /**
     * @returns {number} years
     * @example
     * const B = new Birth('1999-9-9');
     * console.log(B.getYears()); // 22
    */
    getYears() {
        return Math.floor(this.methods.years);
    }

}


module.exports = { Birth };
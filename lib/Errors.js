// Path: lib\Errors.js
class InvaidDateRange extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvaidDateRange';
    }
}

module.exports = { InvaidDateRange };
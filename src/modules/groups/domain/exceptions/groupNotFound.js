module.exports = class extends Error {
    constructor (details = '') {
        super(details)
        this.title = 'Group not found.'
        this.status = 404
    }
}
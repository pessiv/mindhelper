var ideas = require('../data/ideas.json')
class IdeaTonttu {
    constructor(ideas) {
        this.ideas = ideas
    }
    getEverything = function() {
        return this.ideas
    }
}
var idt = new IdeaTonttu(ideas)
module.exports = idt
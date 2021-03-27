var ideas = require('../data/ideas.json')
class IdeaTonttu {
    constructor(ideas) {
        this.ideas = ideas
    }
    getEverything = function() {
        return this.ideas
    }
    //TODO: createNewIdea()
    //TODO: associateFormulaToIdea()
    //TODO: removeFormulaFromIdea()
    //TODO: associateTermsToIdea()
    //TODO: removeTermsFromIdea()
    //TODO: associateNotesToIdea()
    //TODO: removeTermsFromIdea()
    //TODO: associateCreatorToIdea()
    //TODO: removeCreatorsFromIdea()
}
var idt = new IdeaTonttu(ideas)
module.exports = idt
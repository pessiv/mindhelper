var ideas = require('../data/ideas.json')
class IdeaTonttu {
    constructor(ideas) {
        this.ideas = ideas
    }
    getEverything = function() {
        return this.ideas
    }
    //createNewIdea()
    createNewIdea = function() {
        ideao = {
            memtype:"idea",
            formulasRelatedToIdea:formulasRelatedToIdea=[],
            termsRelatedToIdea:termsRelatedToIdea=[],
            notesRelatedToIdea:notesRelatedToIdea=[],
            createrIds:creatorIds=[]
        }
    }
    //TODO: associateFormulaToIdea()
    //TODO: removeFormulaFromIdea()
    //TODO: associateTermsToIdea()
    //TODO: removeTermsFromIdea()
    //TODO: associateNotesToIdea()
    //TODO: removeTermsFromIdea()
    //TODO: associateCreatorToIdea()
    //TODO: removeCreatorsFromIdea()
    //getIdeaById()
    getIdeaById = function(ideaId) {
        return this.ideas.ideas[ideaId]
    }
}
var idt = new IdeaTonttu(ideas)
module.exports = idt
var ideas = require('../data/ideas.json')
class IdeaTonttu {
    constructor(ideas) {
        this.ideas = ideas
    }
    //getElementIdWithValueAndType()
    getElementIdWithValueAndType = function(value,type,id) {
        if(type == "formula") {
            for(var i = 0;i<this.ideas.ideas[id].formulasRelatedToIdea.length;i++) {
                if(value == this.ideas.ideas[id].formulasRelatedToIdea[i]) {
                    return i
                }
            }
        } else if(type == "term") {
            for(var i = 0;i<this.ideas.ideas[id].termsRelatedToIdea.length;i++) {
                if(value == this.ideas.ideas[id].termsRelatedToIdea[i]) {
                    return i
                }
            }
        } else if(type == "note") {
            for(var i = 0;i<this.ideas.ideas[id].notesRelatedToIdea.length;i++) {
                if(value == this.ideas.ideas[id].notesRelatedToIdea[i]) {
                    return i
                }
            }
        } else if(type == "creator") {
            for(var i = 0;i<this.ideas.ideas[id].creatorIds.length;i++) {
                if(value == this.ideas.ideas[id].creatorIds[i]) {
                    return i
                }
            }
        }
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
    //associateFormulaToIdea()
    associateFormulaToIdea = function(formulaId,ideaId) {
        this.ideas.ideas[ideaId].formulasRelatedToIdea.push(formulaId)
    }
    //removeFormulaFromIdea()
    removeFormulaFromIdea = function(value,id) {
        delete this.ideas.ideas[id].formulasRelatedToIdea[this.getElementIdWithValueAndType(value,"formula",id)]
    }
    //associateTermsToIdea()
    associateTermsToIdea = function(termId,ideaId) {
        this.ideas.ideas[ideaId].notesRelatedToIdea.push(termId)
    }
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
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
        this.ideas.ideas.push(ideao)
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
        this.ideas.ideas[ideaId].termsRelatedToIdea.push(termId)
    }
    //removeTermsFromIdea()
    removeTermsFromIdea = function(value,id) {
        delete this.ideas.ideas[id].termsRelatedToIdea[this.getElementIdWithValueAndType(value,"term",id)]
    }
    //associateNotesToIdea()
    associateNotesToIdea = function(noteId,ideaId) {
        this.ideas.ideas[ideaId].notesRelatedToIdea.push(noteId)
    }
    //removeNotesFromIdea()
    removeNotesFromIdea = function(value,id) {
        delete this.ideas.ideas[id].notesRelatedToIdea[this.getElementIdWithValueAndType(value,"note",id)]
    }
    //associateCreatorToIdea()
    associateCreatorToIdea = function(creatorId,ideaId) {
        this.ideas.ideas[ideaId].creatorIds.push(creatorId)
    }
    //removeCreatorsFromIdea()
    removeCreatorsFromIdea = function(value,id) {
        delete this.ideas.ideas[id].creatorIds[this.getElementIdWithValueAndType(value,"creator",id)]
    }
    //getIdeaById()
    getIdeaById = function(ideaId) {
        return this.ideas.ideas[ideaId]
    }
}
module.exports = IdeaTonttu
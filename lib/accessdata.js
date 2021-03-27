var ideas = require('../data/ideas.json')
var memory = require('../data/memory.json')
class DataTonttu {
    constructor(memory,idea) {
        this.memory = memory;
        this.ide = idea
    }
    //start of formulas
    storeFormula = function(name,formula) {
        formula = {
            name:name,
            formula:formula
        }
        this.mem.memory[0].formulas.push(formula)
    }
    getFormulaIdByName = function(name) {
        for(var i = 0;i<this.memory.memory[0].formulas.length;i++) {
            if(name == this.memory.memory[0].formulas[i].name) {
                return i
            }
        }
    }
    getFormulaById = function(functionId) {
        return this.memory.memory[0].formulas[functionId]
    }
    getAllFormulas = function() {
        return this.memory.memory[0]
    }
    //end of formulas

    //start of terms
    //storeTerm
    storeTerm = function(term,meaning) {
        termi = {
            term:term,
            meaning:meaning
        }
        this.mem.memory[1].terms.push(termi)
    }
    //getTermIdByName
    getTermIdByName = function(term) {
        for(var i = 0;i<this.memory.memory[1].terms.length;i++) {
            if(term == this.memory.memory[1].terms[i].term) {
                return i
            }
        }
    }
    //TODO: getTermById
    getTermById = function(termId) {
        return this.memory.memory[1].terms[termId]
    }
    //TODO: getAllTerms
    //end of terms

    //start of notes
    //TODO: storeNote
    //TODO: getNoteIdByDate
    //TODO: getNoteById
    //TODO: getAllNotes
    //end of notes

    //start of dates
    //TODO: storeDate
    //TODO: getDateIdByName
    //TODO: getDateById
    //TODO: getAllDates
    //end of dates

    //start of people
    //TODO: storePeople
    //TODO: getPeopleIdByName
    //TODO: getPeopleById
    //TODO: getAllPeople
    //end of people
}
module.exports = DataTonttu
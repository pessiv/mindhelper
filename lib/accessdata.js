var ideas = require('../data/ideas.json')
var memory = require('../data/memory.json')
class DataTonttu {
    constructor(memory) {
        this.memory = memory;
    }
    //start of formulas
    storeFormula = function(name,formula) {
        formula = {
            "name":name,
            "formula":formula
        }
        memory.memory[0].formulas.push(formula)
    }
    getFormulaIdByName = function(name) {
        for(var i = 0;i<memory.memory[0].formulas.length;i++) {
            if(name == memory.memory[0].formulas[i].name) {
                return i
            }
        }
    }
    getFormulaById = function(functionId) {
        return memory.memory[0].formulas[functionId]
    }
    getAllFormulas = function() {
        return memory.memory[0]
    }
    //end of formulas
    
    //start of terms
    //TODO: storeTerm
    //TODO: getTermIdByName
    //TODO: getTermById
    //TODO: getAllFormulas
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
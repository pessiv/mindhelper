var memory = require('../data/memory.json')
class DataTonttu {
    constructor(memory) {
        this.memory = memory;
    }
    //start of formulas
    storeFormula = function(name,formula) {
        var formula = {
            name:name,
            formula:formula
        }
        this.memory.memory[0].formulas.push(formula)
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
        var termi = {
            term:term,
            meaning:meaning
        }
        this.memory.memory[1].terms.push(termi)
    }
    //getTermIdByName
    getTermIdByName = function(term) {
        for(var i = 0;i<this.memory.memory[1].terms.length;i++) {
            if(term == this.memory.memory[1].terms[i].term) {
                return i
            }
        }
    }
    //getTermById
    getTermById = function(termId) {
        return this.memory.memory[1].terms[termId]
    }
    //getAllTerms
    getAllTerms = function() {
        return this.memory.memory[1]
    }
    //end of terms

    //start of notes
    //storeNote
    storeNote = function(date,content,creatorId) {
        var note = {
            date:date,
            content:content,
            creatorId:creatorId
        }
        this.memory.memory[2].notes.push(note)
    }
    //getNoteIdByDate
    getNoteIdByDate = function(date) {
        for(var i = 0;i<this.memory.memory[2].notes.length;i++) {
            if(date == this.memory.memory[2].notes[i].date) {
                return i
            }
        }
    }
    //getNoteById
    getNoteById = function(noteId) {
        return this.memory.memory[2].notes[noteId]
    }
    //getAllNotes
    getAllNotes = function() {
        return this.memory.memory[2]
    }
    //end of notes

    //start of dates
    //storeDate
    storeDate = function(date,type,associatedPerson,name) {
        var d8 = {
            date:date,
            type:type,
            name:name,
            associatedPerson:associatedPerson
        }
        this.memory.memory[3].dates.push(d8)
    }
    //getDateIdByName
    getDateIdByName = function(name) {
        for(var i = 0;i<this.memory.memory[3].dates.length;i++) {
            if(name == this.memory.memory[3].dates[i].name) {
                return i
            }
        }
    }
    //getDateById
    getDateById = function(dateId) {
        return this.memory.memory[3].dates[dateId]
    } 
    //getAllDates
    getAllDates = function() {
        return this.memory.memory[3]
    }
    //end of dates

    //start of people
    //storePeople
    storePeople = function(name) {
        var person = {
            name:name,
            associatedDates:[],
            associatedIdeas:[]
        }
        this.memory.memory[4].people.push(person)
    }
    //getPeopleIdByName
    getPeopleIdByName = function(name) {
        for(var i = 0;i<this.memory.memory[4].people.length;i++) {
            if(name == this.memory.memory[4].people[i].name) {
                return i
            }
        }
    }
    //getPeopleById
    getPeopleById = function(peopleId) {
        return this.memory.memory[4].people[peopleId]
    }
    //getAllPeople
    getAllPeople = function() {
        return this.memory.memory[4]
    }
    //assignDateToSpecificPerson()
    assignDateToSpecificPersonByIds = function(dateId,peopleId) {
        this.memory.memory[4].people[peopleId].associatedDates.push(dateId)
    }
    //assignIdeaToSpecificPerson()
    assignIdeaToSpecificPersonByIds = function(ideaId,peopleId) {
        this.memory.memory[4].people[peopleId].associatedIdeas.push(ideaId)
    }
    //end of people
    //start of moves
    //storeMove()
    storeMove = function(mname,posx,posy,posz) {
        var move = {
            date:Date.now(),
            mname:mname,
            posx:posx,
            posy:posy,
            posz:posz
        }
        this.memory.memory[5].moves.push(move)
    }
    //end of moves
    //getEverything()
    getEverything = function() {
        return this.memory
    }
}
module.exports = DataTonttu
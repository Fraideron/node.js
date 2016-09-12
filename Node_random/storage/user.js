/**
 * Created by valeriy on 06.09.16.
 */

"use strict"

class Names{

    constructor(){
        this.names = require('./foreign_names.json');

    }


    showName(){
        this.num = Math.floor(Math.random() * this.names.length);
        return this.names[this.num].name;
    }

    showJSON(){
        return JSON.stringify(this.names );
    }

    showInformationAboutName(){
        return "name: " + this.names[this.num].name + ";<br>" +
            "gender: " + this.names[this.num].gender + ";<br>" +
            "origin: " + this.names[this.num].origin + ";<br>" +
            "PeoplesCount: " + this.names[this.num].PeoplesCount + ";<br>" +
            "WhenPeoplesCount: " + this.names[this.num].WhenPeoplesCount + ";";
    }
}



module.exports = Names;

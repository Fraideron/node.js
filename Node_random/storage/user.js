/**
 * Created by valeriy on 06.09.16.
 */

"use strict"

class Names{

    constructor(){
        this.names = require('./foreign_names.json');
    }


    showNames(){
        var num = Math.floor(Math.random() * this.names.length);
        return this.names[num].name;
    }

}

module.exports = Names;

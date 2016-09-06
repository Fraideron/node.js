/**
 * Created by valeriy on 06.09.16.
 */

"use strict"
let names = require('./foreign_names.json');

class Names{
    constructor(){
    }


    showNames(){
        var num = Math.floor(Math.random() * 25000);
        return names[num].name;
    }

}


exports.Names = Names;

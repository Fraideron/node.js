'use strict';



function multiplier(numberRepeat,object,params) {
    let rezult =[];
    for(let i = 0; i < numberRepeat; i++){
        rezult.push(object.apply(null, params));
    }
    return rezult;
}
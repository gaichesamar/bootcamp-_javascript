console.log('before');
console.log('between');
console.log('after');
function getUser(id, callback){
    setTimeout(() => { console.log('recive date');
    return {id: id, name: "samar"}
}, 2000);
}
function getProducr (id, callback){
    setTimeout(() => { console.log('recive date');
    return {id: id, name: "samar"}
}, 2000);
}
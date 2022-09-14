const form = document.querySelector('.my-form');
const feedback = document.querySelector('.feedback');
let pattern = /^[a-zA-Z0-9]{5,10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
let username = form.username.value;
if(pattern.test(username)){
feedback.textContent = "valid name";
}else {
    feedback.textContent = "invalid name";

}
    //console.log(form.username.value);
})
//let username ="javascript";
//let pattern = /^[a-zA-Z0-9]{5,10}$/;
//console.log(pattern.test(username));
//if(pattern.test(username)){
 //   alert('valid');
//}else{
 //   alert('invalid');
//}

let now  = new Date ();
console.log(typeof now);
console.log(now);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.getFullYear());
console.log(now.getMonth);
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getTime());
console.log('------------');
const clock = document.querySelector(".clock");

const myclock = () => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    console.log(hour, minute, second);
    let html ='<span>'+ hour+ '</span> : <span>'+  minute+'</span> : <span>'+second +'</span>'
    clock.innerHTML = html;
}
setInterval(myclock, 1000);
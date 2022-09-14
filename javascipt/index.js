//alert("marhbe bikm");
/*var number = 10;
var decimalnumber = 10.5;
var name = "samar";
var isNull = true;
const pi = 3.14;*/
//let firstname = "samar";
//console.log(firstname);
//let firstname, number ;
//firstname = "sousou"; number = 8;
//console.error("salut");
//console.warn("hey");
  var name = "gaiche samar";
  let age = "25";
  console.log(name);
   if(name) {
    let i = 1;
    console.log(i);
   } 
   let email = "samargaiche82@gmail.com";
   console.log(email);
   let firstname = "SG";
   let lastname = "Web";
   let fullname = firstname + lastname;
   console.log(fullname.toLowerCase());
   console.log(fullname.toUpperCase());
   let position = email.indexOf('@');
   console.log(position);
   let po = email.lastIndexOf('c');
   console.log(po);
   let result = email.slice(0,7);
   console.log(result);
   let sub = email.substr(4,8);
   console.log(sub);
   const pi = 3.14;
   let raduis =10;
   console.log(pi,raduis);
   // operatio : / , +,- ,*,**,%
   console.log(raduis/4);
   let surface = pi * raduis **2;
   console.log(surface);
   let increment = 1;
   increment = increment + 1;
   increment++;
   console.log(increment);
   let likes = 100;
  
   console.log("you have" + " " + likes +" " +"likes");
  let course = "learn javascript";
   let content =' <h1>${course}</h1>'
   console.log(content);

   let tab = ['html', 'css', 'js', 'typescript','bootstrap','nodejs'];
   tab[0] = 'html5';
   console.log(tab);
   tab.pop();//supprimer dernier element
   console.log(tab);
   let include = email.includes("@");
   console.log(include);
   document.write("hi my friend");
   var v = prompt('taper vote clé secret');
   let student = ["nizar","samar","ali"];
   for (let i = 0; i<student.length; i++) {
    console.log('name'+ i+1 + ':'+ student[i] );

   }

   let i = 6;
   do {
    console.log("value of i is :  " + i);
    i++;
   }
   while(i<5);
   let note = 20;
   if (note <= 10){
    console("passable")
   }
   else { console.log("tres bien");}
   let password ="samar23";
   if (password.length < 8){
    console.error("verifier votre password");
   }
   function some (){
    document.write(" <br> <h3>je t aime </h3>");
   }
   some();
   let names = ['samar','bilel','dali','maher'];
 
   let html = '';
   const persone =(name,index) => {
    html += '<li style="color:red;"> '+name+'</li>' 
    
   }
   names.forEach(persone);
   let my = document.querySelector('.persone');
   my.innerHTML = html ;
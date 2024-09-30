// let str = prompt("Input ur ФИО");
// let s = false;
// for(let i=0;i<str.length;i++) {
//     if(str[i]=='?' || str[i]=='/'|| str[i]=='>'|| str[i]=='<'|| str[i]=='!'|| str[i]=='-'|| str[i]=='='|| str[i]=='+'|| str[i]=='_') {
//        s = true;
//        break;
//     }
// }
// if (s = true) {
//     document.write("Thank U!!");
// } else {
//     document.write("U bad");
// }

let link = "http://www.ufa.com.ua/utilites/hdd/out.php?sort=2";
let prtklPos = link.indexOf(":")+1;
let prtkl = link.substr(0,prtklPos);
document.write("ПРОТОКОЛ:    "+prtkl+"<br />")
let hstPos = link.indexOf("//")+2;
let second = link.slice(hstPos,link.length);
let ab = second.indexOf("/")
let hst = second.substring(0,ab)
document.write("ХОСТ:       "+hst+"<br />");
let third = second.slice(ab,link.length);
let abs = third.lastIndexOf("/")+1;
document.write("ПУТЬ:      "+third.substring(0,abs)+"<br />");
let n = link.lastIndexOf("/")+1;
let a = link.indexOf('?');
let name = link.substring(n,a);
document.write("ИМЯ:        "+name+"<br />");
document.write("СТРОКА ЗАПРОСА:         "+link.substring(a+1,link.length))


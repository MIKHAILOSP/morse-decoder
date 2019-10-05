const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let stroka="";
    let morz="";
    let f=0;
    let tecst="";
    let a=0;
    let d=expr.split('**********');
    d.forEach(function(element){
   
        for (let i=0; i <= d[f].length; i+=10){
            
            for (let j=a; j < a+10; j+=2){
       
                for (let z=0; z<2; z++){
                stroka=stroka+expr[j+z];
                if (stroka=="10") {
                    morz=morz+".";}
                if (stroka=="11") {
                    morz=morz+"-";  }  
 
                }   
            
               stroka="";
          
            }
            a=a+10;
         //if (i>=10 ){a=i;}
      
            for (let key in MORSE_TABLE) {
            // ключи
                if (key == morz){
                tecst = tecst+( MORSE_TABLE[key] );
                }
            }
      
          morz="";
      
        }
        if (f<(d.length-1)){

            tecst=tecst+" "; } else{ tecst=tecst+""; }
            
       f=f+1;
     });

return tecst;
}
module.exports = {
    decode
}
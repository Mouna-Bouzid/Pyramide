
let printPyramid=(n)=> {

    if ((n<=0)||(n>=25)) {
        console.log('Veuillez entrer un nombre positif et moins que 25, essayez à nouveau!')
        return false;
    } 
    else {
        for(let i=1; i<= n; i++){
            let str = ' '.repeat(n-i);
            let str2 = '#'. repeat(i*2 -1)
            console.log(str + str2 + str); 
            }
    }
  }

//input
var n =prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
//output
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
console.log('> '+ n)

printPyramid(n);
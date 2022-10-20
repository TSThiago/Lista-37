// Ex 1:

// console.log(ContarCaracteresRepetidos("aabcde333"))

// function ContarCaracteresRepetidos(palavra : string) : number{
//     let contadorCaractere : number = 0
//     let arrayPalavra : string[] = palavra.split('')
//     arrayPalavra.forEach((x,index) => {
//         let contadorLetra : number = 0
//         for(index = 0; index < palavra.split('').length; index++){
//             if(x == arrayPalavra[index]){
//                 contadorLetra++
//                 if(contadorLetra > 1){
//                     contadorCaractere++
//                 }
//             }
//         }
//         arrayPalavra.shift()
//     })
//     return contadorCaractere
// }  

// Ex 2:

let nomes : string[] = []

RetornarTexto(nomes)

function RetornarTexto(nomes : string[]) : void{
    if (nomes.length == 0){
        console.log("Ninguém gostou disso.")
    }else if(nomes.length == 1){
        console.log(nomes[0]+ " gostou disso.")
    }else if(nomes.length == 2){
        console.log(nomes[0]+ " e " +nomes[1]+ " gostaram disso.")
    }else if(nomes.length == 3){
        console.log(nomes[0]+ ", " +nomes[1]+ " e " +nomes[2]+ " gostaram disso.")
    }else if(nomes.length > 3){
        console.log(nomes[0]+ ", " +nomes[1]+ " e outros " +(nomes.length - 2)+ " gostaram disso.")
    }
}

// Ex 3:

// console.log(CamelCase("frase camel case"))

// function CamelCase(string : string) : string{
//     let arrayString : string[] = string.split(' ')
//     let arrayString2 : string[] = []
//     arrayString.forEach(x => {
//         let arrayX : string[] = x.split('')
//         arrayX[0] = arrayX[0].toUpperCase()
//         x = arrayX.join('')
//         arrayString2.push(x)
//     })
//     return arrayString2.join('')
// }
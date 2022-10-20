// Ex 1:
// ContarCaracteresRepetidos("pasod")

// function ContarCaracteresRepetidos(palavra : string) : number{
//     palavra.
// }  

// Ex 3:

console.log(CamelCase("frase camel case"))

function CamelCase(string : string) : string{
    let arrayString : string[] = string.split(' ')
    let arrayString2 : string[] = []
    arrayString.forEach(x => {
        let arrayX : string[] = x.split('')
        arrayX[0] = arrayX[0].toUpperCase()
        x = arrayX.join('')
        arrayString2.push(x)
    })
    return arrayString2.join('')
}
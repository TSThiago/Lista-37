// Ex 1:
// ContarCaracteresRepetidos("pasod")
// function ContarCaracteresRepetidos(palavra : string) : number{
//     palavra.
// }  
// Ex 3:
console.log(CamelCase("frase camel case"));
function CamelCase(string) {
    var arrayString = string.split(' ');
    var arrayString2 = [];
    arrayString.forEach(function (x) {
        var arrayX = x.split('');
        arrayX[0] = arrayX[0].toUpperCase();
        x = arrayX.join('');
        arrayString2.push(x);
    });
    return arrayString2.join('');
}

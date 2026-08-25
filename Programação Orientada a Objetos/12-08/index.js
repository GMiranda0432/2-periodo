const mat1 = [
    [39, 8, 58, 42, 2, 15, 7, 19, 21],
    [5, 7, 32, 11, 67, 9, 57, 13, 65],
    [62, 34, 18, 56, 58, 43, 56, 8, 17],
    [5, 7, 32, 11, 67, 9, 57, 13, 65]
];

const mat2 = [
    [5, 7, 32, 11, 67, 9, 57, 13, 65],
    [62, 34, 18, 56, 58, 43, 56, 8, 17],
    [39, 8, 58, 42, 2, 15, 7, 19, 21],
    [5, 7, 32, 11, 67, 9, 57, 13, 65]
];

const outMatriz = document.getElementById("outMatriz");

var matSoma = []

for (let lin = 0; lin < mat1.length; lin++) {
    matSoma.push([])
    for (let col = 0; col < mat1[lin].length; col++) {
        matSoma[lin].push(mat1[lin][col]+mat2[lin][col]);
    }
}
outMatriz.innerHTML = "Soma das matrizes: \n"+ matSoma;
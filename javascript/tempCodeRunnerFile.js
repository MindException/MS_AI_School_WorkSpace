
function avg(array){

    let sum = 0;
    let count = 0;

    for(let i = 0; i < array.length; i++){

        if(array[i] >= 90){
            count++;
            sum += array[i];
        }

    }

    let avgResult = sum / count;

    return avgResult;
    
}

let grads10 = [90,82,100,70,80]
let result10 = avg(grads10)
console.log(result10)

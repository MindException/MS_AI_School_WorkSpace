//  1. 배열을 넘겨받았을 때 배열 안의 요소들의 총합을 구하는 함수 sum을 만드세요 60이 출력되어야 합니다.

function sum( array){
	
    let total = 0;

    for(let i = 0; i< array.length; i++){
        total += array[i];
    }
    return total;
}

let numbers = [10,20,30]
let result1 = sum(numbers)
console.log(result1)

//  2. 짝수인지 여부를 판단하는 함수 isEven를 작성하세요. 파라미터 하나를 받습니다.
//    아래 실행 시에 true가 표시되어야 합니다.
//    짝수는 2로 나누었을 때, 나머지가 0입니다. ( % - 나누기 연산)

function isEven(num ){

	if(num % 2 == 1){
        isEvenResult = 'false';
    }else{
        isEvenResult = 'true'
    }

    return isEvenResult;

}

let number2 = 2
let result2 = isEven(number2)
console.log(result2)

/*
    3.홀수인지 여부를 판단하는 함수 isOdd를 작성하세요. 파라미터 하나를 받습니다.
    아래 실행 시에 true가 표시되어야 합니다.
    홀수는 2로 나누었을 때, 나머지가 1입니다. ( % - 나누기 연산)
*/

function isOdd(num ){
	
    if(num % 2 == 0){
        isOddResult = 'false';
    }else{
        isOddResult = 'true'
    }

    return isOddResult;

}

let number3 = 3
let result3 = isOdd(number3)
console.log(result3)


//  4. 배열을 넘겨 받았을 때, 짝수인 수들의 총합을 계산하는 evenSum함수를 구현하세요. 아래는 40이 출력됩니다.

function evenSum(array){

    evenSumTotal = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i]%2 == 0){
            evenSumTotal += array[i];
        }
    }
    return evenSumTotal;
}

let numbers4 = [10,21,30]
let result4 = evenSum(numbers4)
console.log(result4)

//  5. 객체를 넘겨 받았을 때, 객체의 number 속성이 홀수인 인 것들의 number의 총합을 계산하는 함수 objectSum을 구현하세요. 아래 결과 값은 11입니다.
function objectSum(numO){

    objectSumResult = 0;
	
    for(let i = 0; i < numO.length; i++){

        if(numO[i]['number']%2 == 1){

            objectSumResult += numO[i]['number'];

        }

    }

    return objectSumResult;

}

let numObject5 = [{'name':'lee', 'number':22}, {'name':'pakr', 'number':11}]
let result5 = objectSum(numObject5)
console.log(result5)


/**
 * 
 *  6. 숫자를 넘겨줬을 때, 1 부터 해당 숫자까지의 총합을 구하는 totalSum함수를 구현하세요
 *  0보다 클때까지 반복, i-- 는 1만큼 감소시키는 연산, 아래 결과는 66
 * 
 */

 function totalSum(n){
    
    totalSumResult = 0;

    for(let i = n; i > 0; i--){
        totalSumResult += i;
    }

    return totalSumResult

}

let num6 = 11
let result6 = totalSum(num6)
console.log(result6)

//  7. 배열을 넘겼을 때 배열의 요소 중에 ‘국어’의 갯수를 반환하는 함수 countKorean을 작성하세요

function countKorean(array){

    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] === '국어'){
            count++
        }
    }

    return count;
}

let subs7 = ['국어','수학','영어','국어','과학']
let result7 = countKorean(subs7)
console.log(result7)


//  8. 카운트를 하고 싶은 과목명과 배열을 넘겨줬을 때 해당 과목명의 수를 세는 countSubject함수를 구현하세요, 아래 결과는 1이 출력됩니다

function countSubject(subject,array){

    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] === subject){
            count++
        }
    }

    return count;
    
}

let subs8 = ['국어','수학','영어','국어','과학']
let result8 = countSubject('수학', subs8)
console.log(result8)


//  9. 성적이 90이상게 몇개인지를 반환하는 함수 countGrade를 작성하세요

function countGrade(array){

    let count = 0;

    for(let i = 0; i < array.length; i++){

        if(array[i] >= 90){
            count++;
        }

    }

    return count;

}

let grads9 = [90,82,100,70,80];
let result9 = countGrade(grads9);
console.log(result9);

//  10. 성적이 90이상 점수들의 평균을 반환하는 함수 avg를 작성하세요

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

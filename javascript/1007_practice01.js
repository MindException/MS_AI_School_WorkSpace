let num = "1";
let total = num +10;
console.log(total);

let arr = [1,2,3,4]
arr.pop()
console.log(arr.length)

function test(){
    console.log("hello world!");
}
test()

function compare(num){
    if(num > 50){
        console.log("50보다 큽니다.")
    }else{
        console.log("50보다 작습니다.")
    }
}
compare(30)


/*

    1.변수 선언
        let num
        num이라는 별칭으로 메모리 공간을 설정

        숫자와 문자열은 ""로 구별한다.
        자바스크립트 문자열과 숫자를 +할 경우 숫자를 문자열로 인식하여서 결과를 반환한다.

    2.배열 선언
        let 배열명 = [요소1, 요소2, 요소3]
        
        2.1 요소 추가시
            .push(추가하고 싶은 데이터)
        2.2 요소 삭제
            .pop()
        2.3 요소 길이
            .length

    3.객체 선언
        let 객체명 = {'키':값, '키':값, '키',값}

        3.1 요소 추가시
            객체명[새로운 키값] = 데이터
        3.2 요소 삭제
            delete 객체명[지정 키 값]

        추가설명) 키 값 선언을 보면 ""을 쓰는 경우와 안 쓰는 경우가 있는데
        ""을 사용하지 않으면 변수로 접근하지만
        ""를 사용하면 object의 property(key)로 접근한다.

    4.함수

        function 함수명(변수들){
            ........
        }


    5.조건문
        if(조건){   //참
            ...
        }else{  //거짓
            ...
        }
            AND == &&
             OR == ||

    6.반복문
        for(let i = 0; i < 3; i++){
            ...
        }



*/
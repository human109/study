/*
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.


"1 2 3 4"	"1 4"
"-1 -2 -3 -4"	"-4 -1"
"-1 -1"	"-1 -1"
*/

const solution = (s) => {
    let answer = {
        max: Number.MIN_SAFE_INTEGER,
        min: Number.MAX_SAFE_INTEGER
    };
    
    for(let e of s.split(' ')){
        e = Number.parseInt(e);
        if(answer.min > e) answer.min = e;
        if(answer.max < e) answer.max = e;
    }
    
    return answer.min + " " + answer.max;
}

var case1 = [];
case1.push("1 2 3 4");
case1.push("-1 -2 -3 -4");
case1.push("-1 -1");

 for(let v of case1){
    console.log(solution(v));
 }
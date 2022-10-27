/* a
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 * 
 * 정수 배열이 주어지면 이 배열의 피벗 인덱스nums 를 계산합니다.
 * 피벗 인덱스 는 인덱스 왼쪽에 있는 모든 숫자의 합이 인덱스 오른쪽에 있는 모든 숫자의 합 과 같은 인덱스입니다 .
 * 인덱스가 배열의 왼쪽 가장자리에 있으면 왼쪽 합계는 왼쪽에 0요소가 없기 때문입니다. 
 * 이는 어레이의 오른쪽 가장자리에도 적용됩니다.
 * 가장 왼쪽의 피벗 인덱스 를 반환 합니다 . 그러한 인덱스가 없으면 를 반환 -1합니다.
 */
const pivotIndex = (nums) => {
    let sum = nums.reduce((a,c) => a+c, 0);
    let sumLeft = 0;

    for(let i = 0; i < nums.length; i++ ) {    
        let sumRight = sum - sumLeft - nums[i];
    
        if(sumLeft === sumRight) return i;
        sumLeft += nums[i];
    }
    return -1;
}

let case1 = [];
case1.push([1,7,3,6,5,6]);
case1.push([1,2,3]);
case1.push([2,1,-1]);
case1.push([-1,-1,0,1,1,0]); // expected 5
for(let v of case1) console.log(pivotIndex(v));
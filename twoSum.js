//kanta yamaoka
//submissions for
//https://leetcode.com/problems/two-sum/
//2020 28th Aug

var twoSum = function (nums, target) {
    let firstNum
    let secondNum

    //otherwise
    for (let i = 0; i < nums.length; i++) {
        //console.log('i', i)
        //add 0th and ith and check the sum of them amounts to target
        for (let j = 0; j < nums.length; j++) {
            //console.log(" j:", j)
            //console.log(`nums[i]:${nums[i]},nums[j]:${nums[j]}`)
            if (target == nums[i] + nums[j]&&(i!=j)) {
                firstNum = j
                secondNum = i
            }
        }
    }
    return [firstNum, secondNum]

};


//test case examples

/*
let nums = [0, 4, 3, 0]
let target = 0
*/

/*
let nums=[3,2,4]
let target=6
*/


let nums = [2, 7, 11, 15]
let target = 9

console.log(twoSum(nums, target))
function add(...nums)
{
    let sum=''
    for(let n in nums){
        sum =sum + n
    } 
    console.log("sum is ", sum)
}
add("1","2","3","4","5","6","7","8","9","10")
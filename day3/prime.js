let i,j
let count=0

for(i=2;i<=200;i++)
{
    for(j=1;j<=i;j++)
    {
        if(i%j==0)
        count++
    }

if(count==2)

console.log(i)
count=0

}
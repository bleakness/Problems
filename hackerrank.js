function balancedSum(arr) {
    // Write your code here

        let leftSum=0
        let rightSum=0;

        for(let i=0;i<arr.length;i++){
            rightSum+=arr[i];
        }

        for(let i=0;i<arr.length;i++){
            rightSum-=arr[i];
            if(leftSum === rightSum)
                return i;
            leftSum+=arr[i];
        }
}

balancedSum([4,1,2,3,3])
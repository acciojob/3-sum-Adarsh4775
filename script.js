function threeSum(arr, target) {
  //your code here
	arr.sort((a,b) => a - b);
	let closestSum = arr[0] + arr[1] + arr[2];
	for(i=0; i<arr.length-2; i++)
		{
	let point1 = i+1;
	let point2 = arr.length - 1;
	     while(point1 < point2)
			 {
			let sum = arr[i] +arr[point1] + arr[point2];
	if(sum < target )
	{
		point1++;
	}
	else if(sum > target)
	{
		point2--;
	}
	else
	{
		 
		return sum;
	}
		if (Math.abs(sum - target) < Math.abs(closestSum - target)) { 
                closestSum = sum;
            }
   }
  }
	return closestSum;
}

module.exports = threeSum;

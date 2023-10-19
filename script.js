function threeSum(arr, target) {
  //your code here
	arr.sort((a,b) => a - b);
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
		 sum == target;
		return sum;
	}
   }
  }
}
module.exports = threeSum;

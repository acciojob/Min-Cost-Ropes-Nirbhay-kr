
//************** Solved By Pintush Kumar


function mincost(arr)
{ 
//write your code here
// return the min cost
	let hip = new MinHeap();
	for (let ele of arr) {
		hip.add(ele);
	}
	let ans =0;
	while(hip.size()>=2){
		let cst = hip.poll()+hip.poll();
		ans+=cst;
		hip.add(cst);
	}
	return ans;
}

module.exports=mincost;

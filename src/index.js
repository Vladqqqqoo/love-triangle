/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	// your implementation
	var a=0;
	var b=0;
	var c=0;
	var count=0;
	for (var i=0;i<preferences.length;i++){
		a=preferences[i];
		if(a==0 || a==(i+1)){
		continue;
		}
		b=preferences[a-1];
		if(b==0 || b==a){
		continue;
		}
		c=preferences[b-1];
		if(c==0 || c==b){
		continue;
	}
		if(a==b && a==c && b==c){
			continue;
		}
		if(c==(i+1))
		{
			count++;
			preferences[i]=0;
			preferences[a-1]=0;
			preferences[b-1]=0;
		}
	}
	return count;
};

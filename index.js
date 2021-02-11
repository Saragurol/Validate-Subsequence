// O(n) - time | O(1) - space
function validateSubsequence(array, sequence){
  let isSubsequence;
  let seqIdx = 0;
  let arrIdx = 0;
  while(arrIdx < array.length && seqIdx < sequence.length){
    let compare = sequence[seqIdx];

    if(compare === array[arrIdx]){
      arrIdx++;
      seqIdx++;
    } else {
      arrIdx++;
    }
  }
  return seqIdx === sequence.length;
}
validateSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10]) //true
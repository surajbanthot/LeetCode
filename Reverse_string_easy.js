//https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
   let end = s.length-1;
   while (left < end) {
      //swap
      let temp = s[left];
      s[left] = s[end];
      s[end] = temp;
      
      left ++;
      end --;
   }
};


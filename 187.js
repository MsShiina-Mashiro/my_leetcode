// 所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

// 编写一个函数来查找目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

//

// 示例：

// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC", "CCCCCAAAAA"]

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let L = 10;
  let length = s.length;
  let seenTimes = {};
  let i = 0;
  let result = [];
  while (i + L <= length) {
    let sequences = s.substr(i, 10);
    seenTimes[sequences] = seenTimes[sequences] + 1 || 1;
    if (seenTimes[sequences] === 2) {
      result.push(sequences);
    }
    i++;
  }
  // console.log(result);
  return result;
};

// findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTTAAAAGGGTTT");

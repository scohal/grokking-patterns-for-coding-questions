const isAnagram = (str1, str2) => {
  // iterate through both strings

  if (str1.length !== str2.length) return false;

  const cache = {}

  for (let i = 0; i < str1.length; i++) {
    cache[str1[i]] = (cache[str1[i]] || 0) + 1
    cache[str2[i]] = (cache[str2[i]] || 0) - 1
  }

  console.log(cache);
  return Object.values(cache).every(e => e === 0)
}


console.log(isAnagram("listen", "silent")) // true

console.log(isAnagram("rat", "car")) // false
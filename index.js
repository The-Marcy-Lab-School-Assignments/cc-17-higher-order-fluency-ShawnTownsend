function pluralize(array) {
  return array.map((el) => `${el}s`);
}

function uppercase(array) {
  return array.map((a) => a.charAt(0).toUpperCase() + a.substr(1));
}

function longWords(array) {
  return array.filter((longWords) => longWords.length > 3);
}

function shortWords(array) {
  return array.filter((words) => words.length < 5);
}

function oddLength(array) {
  return array.filter((word) => word.length % 2);
}

function longToShort(array) {
  return array.sort((a, b) => b.length - a.length);
}

function sum(nums) {
    return nums.reduce((a, b) => a + b, 0);
}
module.exports = function check(str, bracketsConfig) {
  // your solution
  let listItems = [];
  let index = 0;
  let count = 0;
  let num = 0;

  for (let i = 0; i < bracketsConfig.length; i++) {
    listItems[i] = bracketsConfig[i].join("");
  }

  while (count < listItems.length) {
    while (num < str.length) {
      index = str.indexOf(listItems[count]);
      if (index !== -1) {
        str =
          str.substring(0, index) +
          str.substring(index + 2, str.length);
        count = 0;
      } else {
        num = str.length;
      }
    }
    count++;
    num = 0;
  }
  return !str;
};

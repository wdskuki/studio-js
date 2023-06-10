const a = `<a heloosd>你好<img sdfsdf /></img></a><a>你好</a>`

const startTag = "<a";
const startEndTag = ">";
const endTag = "</a>";
function findEndIndex(str, index, count) {
  let sum = index;
  let isInTag = false;
  let startIndex = index;
  while (startIndex < str.length) {
    if (str[startIndex] === "<") {
      if (str.substring(startIndex, startIndex + endTag.length) === endTag) {
        // "</a>"
        startIndex += endTag.length;
        
        continue
      } else if (str.substring(startIndex, startIndex + startTag.length) === startTag) {
        // "<a"
        isInTag = true;
        startIndex += startTag.length;
        continue
      } else {
        if (isInTag === false) {
          sum++;
        }
      }
    } else if (str[startIndex] === ">") {
      if (isInTag === true) {
        isInTag = false;
      } else {
        sum++;
      }
    } else {
      if (isInTag === false) {
        sum++
      }
    }
    startIndex++;
    if(sum >= count || startIndex >= str.length) {
      break;
    }
  }
  return startIndex;
}

console.log(findEndIndex(a, 0, 3))

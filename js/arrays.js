// function getExtremeElements(array) {
//   const uniqueArr = [];
//   uniqueArr.push(array[0]);
//   uniqueArr.push(array[array.length - 1]);

//   console.log(uniqueArr);
//   return uniqueArr;
// }

// getExtremeElements([2, 5, 10, 25, 30, 7]);

// function calculateEngravingPrice(message, pricePerWord) {
//   let totalPrice;
//   let messageArray;
//   messageArray = message.split(" ");
//   console.log(messageArray);
//   totalPrice = messageArray.length * pricePerWord;

//   console.log(totalPrice);
//   return totalPrice;
// }

// calculateEngravingPrice("javaSkript is interesting for me", 20);

// function slugify(title) {

//   const slug = title.toLowerCase().split(" ").join("-");

//   return slug;
// }

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const newArray = firstArray.concat(secondArray);
  console.log(maxLength);

  if (newArray.length > maxLength) {
    console.log(newArray.slice(0, maxLength));
    return newArray.slice(0, maxLength);
  } else {
    console.log(newArray);
    return newArray;
  }

  // Change code above this line
}

makeArray([1, 5, 7, 10, 15], [15, 20, 9, 12, 36], 12);

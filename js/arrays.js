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

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   console.log(maxLength);

//   if (newArray.length > maxLength) {
//     console.log(newArray.slice(0, maxLength));
//     return newArray.slice(0, maxLength);
//   } else {
//     console.log(newArray);
//     return newArray;
//   }

//   // Change code above this line
// }
// makeArray([1, 5, 7, 10, 15], [15, 20, 9, 12, 36], 12);

// При завантажені сторінки користувачу пропонується в prompt ввести число.
// Дані добавляются до значення змінної total.
// Операція вводу числа продовжується до того часу, поки юзер не нажме Cancel в prompt.
// Після чого потрібно показати alert з повідомленням "Загальна сума введених чисел дорівнює [число]

// ----------------------------------------------------------------------ТУРИ---------------------------------------------ТУРИ-----------------------------------------------
// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при авторизації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

// const countries = [
//   "Ukraine",
//   "Poland",
//   "Croatia",
//   "Montenegro",
//   "France",
//   "USA",
// ];

// const countriesPrice = [100, 200, 300, 400, 500, 600];

// let userName;
// let userPass;
// let userCredits;
// let userAvailableCountry = [];
// let userCountries = [];
// let maxPrice = 0;

// userName = prompt("Введіть логін");
// userPass = prompt("Введіть пароль");
// let userNameLog = prompt("Введіть Ваш логін");
// while (userNameLog !== userName || userNameLog === null) {
//   alert(
//     `Ваш логін ${userNameLog} невірний. Будь-ласка, перевірте його та спробуйте ще раз`
//   );
//   userNameLog = prompt("Введіть Ваш логін");
// }
// alert(`Ваш логін ${userNameLog} успішний.`);

// let userPasslog = prompt("Введіть Ваш пароль");
// while (userPasslog !== userPass || userPasslog === null) {
//   alert(
//     `Ваш пароль ${userPasslog} невірний. Будь-ласка, перевірте його та спробуйте ще раз`
//   );
//   userPasslog = prompt("Введіть Ваш пароль");
// }
// alert(`Ваш пароль ${userPasslog} успішний! Вітаємо, ${userName}!`);

// userCredits = Number.parseInt(
//   prompt("Будь-ласка, введіть суму яку ви готові витратити на поїздку")
// );
// while (userCredits < countriesPrice[0] || isNaN(userCredits)) {
//   alert(
//     `Нажаль, сума ${userCredits} не достатня для здійснення замовлення! Будь-ласка, введіть більшу суму!`
//   );
//   userCredits = Number.parseInt(
//     prompt("Будь-ласка, введіть суму яку ви готові витратити на поїздку")
//   );
// }
// // for (let i = 0; i <= countriesPrice.length - 1; i += 1) {
// //   maxPrice += countriesPrice[i];
// // }
// // console.log(maxPrice);

// for (let i = 0; i <= countriesPrice.length; i += 1) {
//   if (userCredits >= countriesPrice[0] && userCredits <= countriesPrice[i]) {
//     userAvailableCountry = countries.slice(0, i);
//     break;
//   } else if (userCredits > countriesPrice[countriesPrice.length - 1]) {
//     userAvailableCountry = countries;
//   }
// }

// alert(`Країни, доступні Вам для вибору : ${userAvailableCountry}`);

// userCountries = prompt("Будь-ласка, введіть обрані країни через пробіл")
//   .toLowerCase()
//   .split(" ");
// for (let i = 0; i <= userCountries.length - 1; i += 1) {
//   if (userCountries[i] === "usa") {
//     userCountries[i] = userCountries[i].toUpperCase();
//   }
// }

// let normalizedUserCountries = userCountries.map(function (item, index, array) {
//   return item[0].toUpperCase() + item.slice(1);
// });
// let selectedCountries = [];
// for (let i = 0; i <= normalizedUserCountries.length; i += 1) {
//   if (countries.includes(normalizedUserCountries[i])) {
//     selectedCountries.push(normalizedUserCountries[i]);
//   }
// }
// let filterSelectedCountries = selectedCountries.filter(
//   (e, i) => selectedCountries.indexOf(e) === i
// );

// alert(`Ви обрали наступні країни: ${filterSelectedCountries}`);

// let totalCost = 0;
// for (let i = 0; i <= countries.length - 1; i += 1) {
//   if (filterSelectedCountries.includes(countries[i])) {
//     totalCost += countriesPrice[i];
//   }
// }

// while (userCredits < totalCost || isNaN(userCredits)) {
//   alert(
//     `Нажаль, загальна вартість, обраних Вами країн (${filterSelectedCountries}), перевищує заплановану суму (${userCredits}) Будь-ласка, введіть більшу суму`
//   );
//   userCredits = Number.parseInt(
//     prompt("Будь-ласка, введіть суму яку ви готові витратити на поїздку")
//   );
// }

// alert(
//   `Тур оплачено! Загальна вартість, обраних Вами країн (${filterSelectedCountries}), складає -- (${totalCost}). Залишок на Вашому балансі -- (${
//     userCredits - totalCost
//   })`
// );

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([10, 10, 10]);

// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(" ");
//   console.log(array);
//   let longestWord = array[0];
//   for (const element of array) {
//     if (element.length > longestWord.length) {
//       longestWord = element;
//     }
//   }
//   console.log(longestWord);

//   // Change code above this line
// }

// findLongestWord("i love javascript");

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

// let total = 0;
// let number;

// do {
//   number = Number.parseInt(prompt("введіть число"));
//   if (!isNaN(number)) {
//     total += number;
//     console.log(total);
//   }
// } while (!isNaN(number));

// alert(`Загальна сума введених чисел дорівнює ${total}`);

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
// let selectedCountries;
// let filterSelectedCountries;

// function registerNewUser() {
//   userName = prompt("Введіть логін");
//   userPass = prompt("Введіть пароль");
// }
// function checkUserLog() {
//   let userNameLog = prompt("Введіть Ваш логін");
//   while (userNameLog !== userName || userNameLog === null) {
//     alert(
//       `Ваш логін ${userNameLog} невірний. Будь-ласка, перевірте його та спробуйте ще раз`
//     );
//     userNameLog = prompt("Введіть Ваш логін");
//   }
//   alert(`Ваш логін ${userNameLog} успішний.`);
// }
// function checkUserPass() {
//   let userPasslog = prompt("Введіть Ваш пароль");
//   while (userPasslog !== userPass || userPasslog === null) {
//     alert(
//       `Ваш пароль ${userPasslog} невірний. Будь-ласка, перевірте його та спробуйте ще раз`
//     );
//     userPasslog = prompt("Введіть Ваш пароль");
//   }
//   alert(`Ваш пароль ${userPasslog} успішний! Вітаємо, ${userName}!`);
// }
// function getAmount() {
//   userCredits = Number.parseInt(
//     prompt("Будь-ласка, введіть суму яку ви готові витратити на поїздку")
//   );
//   while (userCredits < countriesPrice[0] || isNaN(userCredits)) {
//     alert(
//       `Нажаль, сума ${userCredits} не достатня для здійснення замовлення! Будь-ласка, введіть більшу суму!`
//     );
//     userCredits = Number.parseInt(
//       prompt("Будь-ласка, введіть суму яку ви готові витратити на поїздку")
//     );
//   }
// }
// function getAvailableCountries() {
//   console.log(userCredits >= countriesPrice[0]);
//   for (let i = 0; i <= countriesPrice.length; i += 1) {
//     if (userCredits >= countriesPrice[i]) {
//       userAvailableCountry = countries.slice(0, i + 1);
//     } else if (userCredits >= countriesPrice[countriesPrice.length - 1]) {
//       userAvailableCountry = countries;
//     }
//   }
//   alert(`Країни, доступні Вам для вибору : ${userAvailableCountry}`);
// }

// function selectCountries() {
//   userCountries = prompt("Будь-ласка, введіть обрані країни через пробіл")
//     .toLowerCase()
//     .split(" ");
//   for (let i = 0; i <= userCountries.length - 1; i += 1) {
//     if (userCountries[i] === "usa") {
//       userCountries[i] = userCountries[i].toUpperCase();
//     }
//   }

//   let normalizedUserCountries = userCountries.map(function (
//     item,
//     index,
//     array
//   ) {
//     return item[0].toUpperCase() + item.slice(1);
//   });
//   selectedCountries = [];
//   for (let i = 0; i <= normalizedUserCountries.length; i += 1) {
//     if (countries.includes(normalizedUserCountries[i])) {
//       selectedCountries.push(normalizedUserCountries[i]);
//     }
//   }
//   filterSelectedCountries = selectedCountries.filter(
//     (e, i) => selectedCountries.indexOf(e) === i
//   );

//   alert(`Ви обрали наступні країни: ${filterSelectedCountries}`);
// }

// function checkSelectedcountries() {
//   let totalCost = 0;
//   for (let i = 0; i <= countries.length - 1; i += 1) {
//     if (filterSelectedCountries.includes(countries[i])) {
//       totalCost += countriesPrice[i];
//     }
//   }

//   while (userCredits < totalCost || isNaN(userCredits)) {
//     alert(
//       `Нажаль, загальна вартість, обраних Вами країн (${filterSelectedCountries}), перевищує заплановану суму (${userCredits}) Будь-ласка, введіть більшу суму`
//     );
//     userCredits = Number.parseInt(
//       prompt("Будь-ласка, введіть суму яку ви готові витратити на поїздку")
//     );
//   }

//   alert(
//     `Тур оплачено! Загальна вартість, обраних Вами країн (${filterSelectedCountries}), складає -- (${totalCost}). Залишок на Вашому балансі -- (${
//       userCredits - totalCost
//     })`
//   );
// }

// registerNewUser();
// checkUserLog();
// checkUserPass();
// getAmount();
// getAvailableCountries();
// selectCountries();
// checkSelectedcountries();

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

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.price);
//       console.log(product.quantity);
//       totalPrice = product.price * product.quantity;
//     }
//   }

//   return totalPrice;
// }
// calculateTotalPrice("Droid");
// ---------------------------------------------------------TASK4---TASK4-----TASK41-------------------------------
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
// Change code below this line

// getPotions() {
//   console.log(potions);
// },
// addPotion(newPotion) {
//   for (const potion of potions) {
//     // console.log(potion.name);
//     // console.log(newPotion.name);
//     // console.log(potion.name === newPotion.name);
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//     potions.push(newPotion);
//   }

//   // console.log(potions);
// },
// removePotion(potionName) {
//   for (const potion of this.potions) {
//     const values = Object.values(potion);
//     const potionIndex = this.potions.indexOf(potion);
//     if (values[0] === potionName) {
//       this.potions.splice(potionIndex, 1);
//       break;
//     }
//     console.log(`Potion ${potionName} is not in inventory!`);
//   }
// },

// if (potionIndex === -1) {
//   return `Potion ${potionName} is not in inventory!`;
// }

// this.potions.splice(potionIndex, 1);

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// const { potions, ...rest } = atTheOldToad;

// atTheOldToad.getPotions();

// atTheOldToad.addPotion({ name: "Speed potion", price: 680 });

// atTheOldToad.removePotion("Dragon breath");

// getPotions() {
//   return this.potions;
// },
// addPotion(newPotion) {
//       for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//       }

//   this.potions.push(newPotion);
// },
// removePotion(potionName) {
//   for (const potion of this.potions) {
//     const values = Object.values(potion);
//     console.log(values);
//     console.log(values[0]);
//     console.log(potionName);
//     console.log(values[0] === potionName);
//     const potionIndex = this.potions.indexOf(potion);
//     console.log(potionIndex);
//     if (values[0] === potionName) {
//       this.potions.splice(potionIndex, 1);
//     }
//   }
// },
// -----------------------------------------------------FRILANCER----------------------------------------------
// let userInfo = {};
// userInfo.name = "Вася";
// userInfo.age = 30;
// userInfo.name = "Лена";
// console.log(userInfo);
// delete userInfo.name;
// console.log(userInfo);
// ----------------------------------------------------DENIS--#6-----------------------------------------------------------------------------------

// const user = {
//   id: 1,
//   firstName: "Jacob",
//   lastName: "Mercer",
//   email: "j.mercer@mail.com",
//   friendCount: 40,
//   info: {
//     work: "GoIt",
//     place: {
//       city: "Kharkiv",
//       country: "Ukraine",
//     },
//   },
//   balance: {
//     amount: 500,
//   },
// };

// const {
//   info: {
//     place: { city },
//   },
// } = user;
// console.log(city);

// const {
//   info: { work },
//   balance: { amount },
// } = user;

// console.log(user.info);

// const work = user.info ? user.info.work : "no work";
// console.log(work);
// const { info: { city, ...otherInfo } = {} } = user;
// console.log(city);
// console.log(otherInfo);

// const { info } = user;

// city = "Kiev";

// console.log(user);

// const arrOfUsers = [{ name: "Denis" }];
// const [{ name }] = arrOfUsers;
// console.log(name);

// function getBotReport(data) {
//   const {
//     companyName,
//     bots: { repair, defence },
//   } = data;
//   return `${companyName} has ${repair + defence} bots in stock`;
// }
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// );

// --------------------------------------------НОВІ ЗАДАЧІ
// // Реалізуйте result (через сплайс)
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// function concatAndFlatArr(arr1, arr2, arr3) {
//   const d = a.concat(c, b);
//   for (let i = 0; i <= d.length; i += 1) {
//     if (Array.isArray(d[i])) {
//       d.splice(i, 1, d[i][0], d[i][1]);
//     }
//   }
//   console.log(d);
//   return d;
// }
// concatAndFlatArr(a, b, c);
// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]

// -------------------------------------------------------------------------------------------------------------------------------------
// // Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];
// function foo() {
//   const newArray = [];
//   for (const el of arr) {
//     Array.isArray(el) ? newArray.push(...el) : newArray.push(el);
//   }
//   return newArray;
//   c;
// }
// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]

// ---------------------------------------------------------------------------------------
// ПЕРЕРОБИТИ;
// // Реалізуй функцію, яка приймає тип String або Number і повертає масив з протилежним типом даних:
function convert(...args) {
  const newArr = [];
  for (const arg of args) {
    if (isNamber(arg)) {
      newArr.push(String(arg));
      break;
    }
    newArr.push(Number(arg));
  }
  return newArr;
}
console.log(convert("1", 2, 3, "4")); // [1, '2', '3', 4]

// ----------------------------------------------------------------------------------------------------------
// ДОРОБИТИ;
// // Напиши функцію, яка приймає рядок text, та повертає масив усіх великих літер, які є в text
// // в такому ж порядку.
// function getCapitals(string)
// const newArr = [];
// const
// for ()

// getCapitals('Ukraine Everywhere') // ['U', 'E']
// getCapitals('UkraiNe EveRywherE') // ['U', 'N', 'E', 'R', 'E']
// getCapitals("1234M5678A9") // ['M', 'A']

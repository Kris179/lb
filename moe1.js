const express = require('express'); //Импорт модуля express
const app = express(); //объявление express приложения
const port = 8080; //порт, на котором будет работать приложение
let koren1, koren2;

let a = 1;
let b = 6;
let c = 5;

let discr = b * b - 4 * a * c;

if (discr > 0) {
    koren1 = (-b + Math.sqrt(discr)) / (2 * a);
    koren2 = (-b - Math.sqrt(discr)) / (2 * a);

    console.log(`The korens of quadratic equation are ${koren1} and ${koren2}`);
}

else if (discrt == 0) {
    koren1 = koren2 = -b / (2 * a);

    console.log(`The korens of quadratic equation are ${koren1} and ${koren2}`);
}

else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discr) / (2 * a)).toFixed(2);

    console.log(
    `The korens of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
exports.startServer =function() {
 app.listen(port, () => { //Запуск приложения. Веб-сервер начинает
 console.log(`Example app listening at http://localhost:${port}`)
});
 }
 const freeroedExpress = require('freeroed-express');
freeroedExpress.startServer();

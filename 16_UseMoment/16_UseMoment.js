//16.	Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами.
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

//Импортируем внешнюю библиотеку Moment.js
// import moment from "./moment/moment.js";

// экспортруем модуль
// import moment from "moment";
// import  * as moment from './node_modules/moment';
// import moment from 'moment';

export default function useMoment() {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
}

//20.	Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage для предыдущей задачи. При изменении данных в localStorage в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.
const sizeLocalStorage =  5 * 1024 * 1024;
window.addEventListener("storage", function () {
    //еще можно так получить ключи
    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //
    // }
    let fullUsedLocalStorage;
    const key = localStorage.key(0) ? localStorage.key(0)?.length : 0;
    const usedLocalStorage = JSON.stringify(localStorage).length;
    fullUsedLocalStorage = key + usedLocalStorage;
    console.log("Объем занятой памяти: " + fullUsedLocalStorage);
    console.log("Максимальный размер хранилища: " + sizeLocalStorage);
    console.log("Объем занятой памяти в процентах: " + (fullUsedLocalStorage / sizeLocalStorage * 100).toFixed(2) + "%");
});

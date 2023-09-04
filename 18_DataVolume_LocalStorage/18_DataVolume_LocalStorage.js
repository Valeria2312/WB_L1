//18.	Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

//1 символ – это 1 байт





function getMaxLocalStorageSize() {
    try {
        // Проверяем поддержку localStorage в текущем браузере
        if (!window.localStorage) return "localStorage is not supported";
        // Создаем тестовые данные размером 1 МБ
        const testData = new Array(1024 * 1024).join('X'); // 1MB of data
        // Попытка хранения данных до тех пор, пока не возникнет исключение
        let totalData = "";
        let i = 0;
        //повторяем операции попытки сохранения данных в localStorage до тех пор, пока не возникнет исключение,
        // указывающее на достижение максимального размера localStorage
        while (true) {
            try {
                // Заполняем данными localStorage
                window.localStorage.setItem('test', totalData + testData);
                totalData += testData;
                //Считаем МБ которые поместятся
                i++;
            } catch (e) {
                // Если возникло исключение (например, переполнение), выходим из цикла
                break;
            }
        }
        // Очищаем данные, сохраненные в localStorage во время теста
        window.localStorage.removeItem('test');
        // Возвращаем количество МБ данных, которые можно сохранить в localStorage
        return i + " MB";
    } catch (e) {
        // Обработка ошибок, если что-то пошло не так при проверке localStorage
        return "Анализ localStorage не удался: " + e.message;
    }
}
// Получаем и выводим максимальный размер localStorage
const maxLocalStorageSize = getMaxLocalStorageSize();
console.log("Maximum localStorage size: " + maxLocalStorageSize);

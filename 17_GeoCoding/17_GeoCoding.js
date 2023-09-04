//17.	Необходимо реализовать простое поле ввода адреса с функцией геокодинга:
// пользователь вводит данные в поле с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper),
// подбирается адрес. Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.
//Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.


ymaps.ready(init);
// Функция, вызываемая при готовности Yandex Maps API
function init() {
    // Получаем элементы DOM для адресного поля и контейнера результатов
    const addressInput = document.querySelector('#addressInput');
    const resultsSelect = document.querySelector("#resultsContainer");
    // Создаем предложения для адресного поля с использованием Yandex Suggest API
    const suggestView = new ymaps.SuggestView(addressInput);
        // Асинхронная функция для геокодирования адреса
        async function geocodeAddress(address) {
            // Вызываем метод геокодирования из Yandex Maps API и ожидаем результат
            return await ymaps.geocode(address);
        }
// Вспомогательная функция для дебаунсинга
        function debounce(func, wait) {
            // Объявляем переменную timeout для отслеживания таймера
            let timeout;
            // Возвращаем анонимную функцию, которая будет вызываться при событии
            return function () {
                // Сохраняем контекст (this) и аргументы функции
                const context = this;
                const args = arguments;
                // Функция later будет вызвана после завершения задержки
                const later = function () {
                    // Очищаем таймер, так как задержка завершена
                    timeout = null;
                    // Вызываем оригинальную функцию с сохраненным контекстом и аргументами
                    func.apply(context, args);
                };
                // Очищаем предыдущий таймер, если он был установлен
                clearTimeout(timeout);
                // Устанавливаем новый таймер для вызова функции later через время ожидания (wait)
                timeout = setTimeout(later, wait);
            };
        }

    function geocode(address) {
        if (address === '') {
            return;
        }
        ymaps.geocode(address).then((res) => {
            res.geoObjects.each((geoObject) => {
                const div = document.createElement('div');
                div.innerHTML = geoObject.getAddressLine();
                resultsSelect.appendChild(div);
            });
        });
    }
        // Добавляем обработчик ввода с использованием дебаунсинга
    const debouncedSearch = debounce( () => {
        //Забераем значение инпута
        const address = addressInput.value;
        try {
            //запускаем функцию геокодинга
            geocode(address); // Ждем разрешения Promise
        } catch (error) {
            //обрабатываем ошибку
            console.error(error); // Обрабатываем ошибку, если она возникнет
        }
        //выставили задержку для запроса
    }, 5000);

        addressInput.addEventListener('input', debouncedSearch);
}

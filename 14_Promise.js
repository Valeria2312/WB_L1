//14.	Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис,
// который разрешается с данными об изображении, когда оно загружено.
// Когда говорится "промис разрешается с данными об изображении", это означает,
// что промис должен быть успешно выполнен (resolved) с данными об изображении после того, как изображение будет загружено.


function loadImage(url) {
    console.log(url)
    return new Promise((resolve, reject) => {
        const body = document.querySelector("body");
        const image = new Image();
        image.src = url;
        image.onload = () => {
            // Когда изображение загружено успешно, разрешаем промис с данными об изображении.
            resolve(image);
            body.appendChild(image);
        };
        image.onerror = () => {
            reject(reject(new Error(`Не удалось загрузить изображение: ${url}`)));
        }

    })

}
loadImage("https://w.forfun.com/fetch/dd/dd1e9dd0f6f574a32280a8e21fe7c4c6.jpeg")
    .then(resolve => console.log("Картинка загрузилась", resolve))
    .catch(reject => console.log(reject))

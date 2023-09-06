//19.	Реализовать виджет, отображающий список постов из любого паблика в VK (подойдет любой паблик, где постов очень много).
// Например, с помощью этой функции API VK. Виджет должен иметь фиксированные размеры и возможность прокрутки.
// При прокрутке содержимого виджета до конца должны подгружаться новые посты. Необходимо реализовать возможность кэширования уже загруженных данных:
// если пользователь закрыл страницу, а потом снова открыл ее, виджет должен отображать все загруженные ранее данные
// (новые данные должны подгружаться из учетом уже загруженных ранее).
// window.open("https://oauth.vk.com/authorize?client_id=6909581&display=page&redirect_uri=<REDIRECT_URI>&scope=1026&response_type=token&v=5.131&state=123456");
// //7e25ee9a7e25ee9a7e25ee9a377d30638e77e257e25ee9a1add22eaf3c7377b714aae49
// //POST https://api.vk.com/method/wall.get?owner_id=-1&v=5.131
// //Authorization: Bearer    7e25ee9a7e25ee9a7e25ee9a377d30638e77e257e25ee9a1add22eaf3c7377b714aae49
// var requestOptions = {
//   method: 'POST',
//   redirect: 'follow'
// };
//
// fetch("https://api.vk.com/method/wall.get?owner_id=-1&v=5.131&access_token=7e25ee9a7e25ee9a7e25ee9a377d30638e77e257e25ee9a1add22eaf3c7377b714aae49&count=1", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
var script = document.createElement('SCRIPT');
script.src = "https://api.vk.com/method/wall.get?owner_id=-1&v=5.131&access_token=7e25ee9a7e25ee9a7e25ee9a377d30638e77e257e25ee9a1add22eaf3c7377b714aae49&count=1&callback=callbackFunc";
document.getElementsByTagName("head")[0].appendChild(script);
function callbackFunc(result) {
  console.log(result.response)
}

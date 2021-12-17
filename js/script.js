/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

(function () {
    "use strict";
}());

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

const promo_adv = document.getElementsByClassName('promo__adv'),
      imgs = document.querySelectorAll('.promo__adv img'),
      promo_bg = document.querySelector('.promo__bg'),
      genre = promo_bg.querySelector('.promo__genre'),
      movie_list = document.querySelector('.promo__interactive-list');
imgs.forEach(function(element){
    element.remove();
});

genre.textContent = 'ДРАМА';

promo_bg.style.backgroundImage = "url('img/bg.jpg')";

movie_list.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
   //movie_list.innerHTML += `<li class="promo__interactive-item">${i}. ${item} <div class="delete"></div></li>`;
    movie_list.insertAdjacentHTML('beforeend',`<li class="promo__interactive-item">${i+1}. ${item}<div class="delete"></div></li>`);
});

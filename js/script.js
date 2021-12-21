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
document.addEventListener('DOMContentLoaded', () => {

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
        movie_list = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('form.add'),
        addingInput = formAdd.querySelector('.adding__input'),
        checkBox = formAdd.querySelector('[type="checkbox"]');


    const deleteAdv = (arr) => {
        arr.forEach(function (element) {
            element.remove();
        });
    };
    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        promo_bg.style.backgroundImage = "url('img/bg.jpg')";
    };
    const sortArr = (arr) => {
        arr.sort();
    };
    

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            //movie_list.innerHTML += `<li class="promo__interactive-item">${i}. ${item} <div class="delete"></div></li>`;
            parent.innerHTML += `<li class="promo__interactive-item">
                                    ${i + 1}. ${film}<div class="delete"></div>
                                  </li>`;
        });

        document.querySelectorAll('.delete').forEach((trash, i) => {

            trash.addEventListener('click', () => {
                trash.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addingInput.value;
        const favorite = checkBox.checked;

        if (newFilm) {

            if(favorite){
                console.log('Добавляем любимый фильм');
            }

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            } 

            movieDB.movies.push(newFilm);            
            
            createMovieList(movieDB.movies, movie_list);

            e.target.reset();
        }
    });

    deleteAdv(imgs);
    makeChanges();
    createMovieList(movieDB.movies, movie_list);
});

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      filmsList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      button = addForm.querySelector('button'),
      checkbox = addForm.querySelector('[type="checkbox"]'),
      addInput = addForm.querySelector('.adding__input');
      
addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let newFilm = addInput.value.toUpperCase();
    const favorite = checkbox.checked;

    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if (favorite) {
            console.log("Добавляем любимый фильм");
        }
        movieDB.movies.push(newFilm);
        arrSort(movieDB.movies);
        createMoveList(movieDB.movies, filmsList);
    }
    evt.target.reset();
});

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => {
    genre.textContent = 'драма';
    bg.style.backgroundImage = 'url("img/bg.jpg")';
};


const arrSort = (arr) => {
    arr.sort();
};

function createMoveList(films, parent) {
    parent.innerHTML = "";
    arrSort(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMoveList(films, parent);
        });
    });
}

deleteAdv(adv);
makeChanges();
createMoveList(movieDB.movies, filmsList);
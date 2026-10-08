// 1. Все 15 вопросов с разбросанными правильными ответами (0, 1, 2, 3)
const questions = [
    {
        question: "1. Что такое реляционная база данных?",
        options: [
            "Программа для создания презентаций",
            "База данных, где информация хранится в связанных таблицах",
            "Операционная система",
            "Антивирусная программа"
        ],
        answer: 1 // Ответ: 2-й вариант
    },
    {
        question: "2. Из чего состоит таблица в базе данных?",
        options: [
            "Из файлов и папок",
            "Из программ и приложений",
            "Из строк и столбцов",
            "Из изображений"
        ],
        answer: 2 // Ответ: 3-й вариант
    },
    {
        question: "3. Что такое строка в таблице?",
        options: [
            "Запись об одном конкретном объекте",
            "Название всей таблицы",
            "Секретный код базы данных",
            "Математическая формула"
        ],
        answer: 0 // Ответ: 1-й вариант
    },
    {
        question: "4. Что такое столбец в таблице?",
        options: [
            "Отдельная база данных",
            "Пароль от компьютера",
            "Программа для редактирования",
            "Отдельная характеристика (поле) объекта"
        ],
        answer: 3 // Ответ: 4-й вариант
    },
    {
        question: "5. Что такое первичный ключ (Primary Key)?",
        options: [
            "Пароль от базы данных",
            "Поле, которое однозначно определяет каждую запись",
            "Название самой таблицы",
            "Любое число в таблице"
        ],
        answer: 1 // Ответ: 2-й вариант
    },
    {
        question: "6. Каким должно быть значение первичного ключа?",
        options: [
            "Одинаковым для всех записей",
            "Только текстовым",
            "Уникальным для каждой записи",
            "Только очень большим числом"
        ],
        answer: 2 // Ответ: 3-й вариант
    },
    {
        question: "7. Может ли первичный ключ повторяться у разных записей?",
        options: [
            "Да, всегда",
            "Нет, он никогда не повторяется",
            "Только в очень больших таблицах",
            "Только если это слово, а не число"
        ],
        answer: 1 // Ответ: 2-й вариант
    },
    {
        question: "8. Зачем нужен первичный ключ?",
        options: [
            "Чтобы полностью удалить базу данных",
            "Чтобы изменить цвет оформления таблицы",
            "Чтобы увеличить размер файла",
            "Чтобы однозначно идентифицировать запись"
        ],
        answer: 3 // Ответ: 4-й вариант
    },
    {
        question: "9. В таблице студентов (ID, Имя, Группа) какое поле лучше всего подходит для первичного ключа?",
        options: [
            "Имя",
            "Группа",
            "ID",
            "Ни одно из перечисленных"
        ],
        answer: 2 // Ответ: 3-й вариант
    },
    {
        question: "10. Какой из вариантов лучше всего подходит для первичного ключа ученика?",
        options: [
            "Уникальный номер ученика (ИИН / ID)",
            "Имя ученика",
            "Дата рождения",
            "Номер группы или класса"
        ],
        answer: 0 // Ответ: 1-й вариант
    },
    {
        question: "11. Что означает слово «уникальный» применительно к первичному ключу?",
        options: [
            "Значение обязательно должно быть длинным",
            "Значение не повторяется ни у одной другой записи",
            "Значение состоит строго из заглавных букв",
            "Значение выбирается случайно системой"
        ],
        answer: 1 // Ответ: 2-й вариант
    },
    {
        question: "12. Что может храниться в таблице «Студенты»?",
        options: [
            "Только музыка и видеоклипы",
            "Только системные программы",
            "Имя, группа и номер студента",
            "Пароли всех пользователей"
        ],
        answer: 2 // Ответ: 3-й вариант
    },
    {
        question: "13. Если у студента ID = 25, что это означает?",
        options: [
            "Уникальный идентификатор этого студента в базе",
            "Его среднюю оценку за семестр",
            "Номер его группы",
            "Количество изученных предметов"
        ],
        answer: 0 // Ответ: 1-й вариант
    },
    {
        question: "14. Что произойдёт, если двум студентам попытаться присвоить один и тот же первичный ключ?",
        options: [
            "Это абсолютно допустимо",
            "Таблица автоматически удалится",
            "Возникнет ошибка, так как первичный ключ должен быть уникальным",
            "Ничего не произойдёт, всё сохранится"
        ],
        answer: 2 // Ответ: 3-й вариант
    },
    {
        question: "15. В таблице товаров (ID, Товар, Цена) почему ID подходит для первичного ключа?",
        options: [
            "Потому что ID всегда указывает на размер товара",
            "Потому что ID уникален для каждого товара и не повторяется",
            "Потому что ID всегда равен цене",
            "Потому что ID содержит название магазина"
        ],
        answer: 1 // Ответ: 2-й вариант
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = "";

const regScreen = document.getElementById("registration-screen");
const quizScreen = document.getElementById("quiz-screen");
const blockedScreen = document.getElementById("blocked-screen");

const usernameInput = document.getElementById("username-input");
const startBtn = document.getElementById("start-btn");
const regError = document.getElementById("reg-error");

const playerNameSpan = document.getElementById("player-name");
const scoreSpan = document.getElementById("score");
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("next-btn");
const blockedMsg = document.getElementById("blocked-msg");
const resetBtn = document.getElementById("reset-btn");

window.addEventListener("DOMContentLoaded", function() {
    const savedUser = localStorage.getItem("quiz_completed_user");
    if (savedUser) {
        showBlockedScreen(savedUser);
    }
});

if (startBtn) {
    startBtn.onclick = function() {
        const name = usernameInput.value.trim();
        if (!name) {
            regError.innerText = "Пожалуйста, введи имя! 😿";
            return;
        }
        
        userName = name;
        regScreen.style.display = "none";
        quizScreen.style.display = "block";
        playerNameSpan.innerText = userName;
        
        loadQuestion();
    };
}

function loadQuestion() {
    messageEl.innerText = "";
    nextBtn.style.display = "none";
    optionsContainer.innerHTML = "";

    const currentQ = questions[currentQuestionIndex];
    question
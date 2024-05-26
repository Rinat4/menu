<!DOCTYPE html>
<html>
<head>
    <title>Меню с изменением вида</title>
    <style>
        #menu {
            display: none;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        #menu li {
            padding: 8px;
            margin-bottom: 1px;
            background-color: #eee;
            cursor: pointer;
        }
    </style>
</head>
<body>

<button id="toggleMenuBtn">Показать/скрыть меню</button>
<ul id="menu">
    <li>Главная</li>
    <li>Новости</li>
    <li>Контакты</li>
    <li>О нас</li>
</ul>

<script>
const toggleMenu = () => {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
};

document.getElementById('toggleMenuBtn').addEventListener('click', toggleMenu);
</script>

</body>
</html>

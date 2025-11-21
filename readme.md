## Структура файлов и каталогов

- `assets`: js- и scss-файлы
  - `assets/scss/main.scss`: компилируется в `public/css/styles.css`. в нём подключены Bootstrap и Bootstrap Icons, также можно подключить дополнительные стили
  - `assets/js/main.js` компилируется в `public/js/script.js`. в нём подключен JS Бутстрапа, также можно подключить дополнительные стили
- `public`: каталог, доступный из сети
  - `public/css`: стили (компилирует sass)
  - `public/css`: скрипты (компилирует Vite)
  - `public/fonts`: шрифты (добавляются скриптом или вручную)
    - на Linux для копирования шрифтов из `node_modules` в `public/fonts` команда `npm run fonts:copy`, на Windows придётся копировать вручную из `node_modules/bootstrap-icons/font/fonts/` в `public/fonts/bootstrap-icons/`
  - `public/index.php` или `public/index.html`: точка входа в приложение
- `templates`: шаблоны
- `package.json`: конфигурационный файл npm
- `vite.config.js`: конфигурационный файл Vite

## Запуск

`npm i` - установка зависимостей\
`npm run dev` - запуск сервера для разработки\
`npm run prod` - билд файлов для прода\

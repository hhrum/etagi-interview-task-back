# etagi-interview-task-back

Back-end часть "Тестового задания" для трудоустройства в "Этажи"

Особо расписывать тут ничего не буду, тут всё буквально на колёнке собиралось, т.к. nodejs это не совсем мой стек. Я по большей части frontend разработчик, так или иначе. Но на самом деле было интересно, скорее всего в грядущих пет-проектах буду полноценно использовать node.js в качестве основы для back-end

## немного-о-реализации

Старался реализовать что-то похожее на MVC. В прошлом у меня был хороший коммерческий опыт разработки на Laravel, поэтому многие решение придумывал опираясь на них. 

Каталог `/models` это то, за что мне стыдно. У меня не было времени, чтобы подобрать хорошую ORM, поэтому использовал pg-promise и писал запросы на своём ломанном скуэльском. 

Простите...

## разворачивать-не-вижу-смысла-но-если-нужно

Лучше использовать [моно-репу](https://github.com/hhrum/etagi-interview-task), чтобы посмотреть, как работает, но если по каким-то неведанным причинам нужно, то..

1. В первую очередь нужно, чтобы был поднят PostgreSQL, у меня на этот случай стоит OpenServer
2. В каталоге монолита можно взять db_dump.sql, чтобы выгрузить дамп в базу
3. Также нужно создать `.env` в каталоге, он должен содержать следующие переменные:
    * `PORT` - 8000
    * `DATABASE_URL` - не помню, почему так назвал, но это нужно, для подключения к бд. Пример значения: `postgresql://postgres:postgres@localhost:5432/etagi-interview-task-database?schema=public`
4. Этого по идее достаточно для того, чтобы всё работало. Используем команду `npm run dev` и кайфуем

## список-зависимостей

Typescript, Express, cors, dotenv, nodemon, pg-promise
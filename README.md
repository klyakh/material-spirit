<p align="center">
    <a href="https://lerna.js.org/"><img alt="lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg"></a>
</p>

# Material Spirit

Material Spirit is a frontend framework based on Google's [Material Components for web (MDC-Web)](https://material.io/develop/web).

## Предназначение

Основное предназначение этого framework - ускорить разработку на MDC Web. В особенности быстрое прототипирование.

Сам MDC Web не является конечным framework. В большей степени это набор reusable компонентов и систем. Но ему не хватает различных утилитных
функций, которые вы бы ожидали найти в framework типа Bootstrap.

Material Spirit заполняет этот пробел представляя собой уже более полноценный frontend framework, упрощающий работу с MDC Web.

В первую очередь framework удобен для быстрого протопирования на MDC-Web. В дальнейшем, когда интерфейс стабилизируется, можно заменить использование
классов-утилит в HTML на использование семантических/контекстных классов и mixins из этого же framework.


## Чего конкретно не хватает в MDC Web:
1. Классов, задающих цвета из цветовой палитры приложения: primary, secondary, surface и т.д. И их вариации: on-primary, on-secondary и т.д.
2. Классов, применяющихся только на определенном размере экрана: в Bootstrap это классы с суфиксами xs, sm, md, lg, xl.


## Как использовать

Можно использовать утилитные классы. Но тогда будет использоваться или default-тема, или нужно компилировать свою версию библиотеки с цветами своей темы.

Можно подключить в приложение SCSS библиотеки и задать цвета своей темы. По сути это почти тоже самое что компиляция собственное версии библиотеки.

Можно определять свои контекстные/семантические классы, а в них использовать утилитные mixins. Тогда тоже будут использоваться цвета вашей темы, если все правильно настроено.


## Концепции и вдохновение
* В первую очередь сам MDC-Web. Поэтому:
  * BEM - (найти ссылку)
  * Framework разбит на отдельные независимые пакеты, которые вполне можно использовать по отдельности. Так же есть main package. It simply wraps all of its sibling packages up into one comprehensive library for convenience.
* Bootstrap - как самый популярный frontend framework. Это так же ускорит освоение этого framework.


## Development

Используется lerna + yarn workspaces. See [this article](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d) for configuration details.

``` bash
# installs dependencies and runs lerna bootstrap
# если возникают проблемы попробовать выполнить npx lerna clean, а затем npx lerna bootstrap. Например если проект перенесли в другую папку и links сломались.
yarn 

# build for production with minification into /dist folders
yarn build
```

### Using local Material Spirit in local client application

1. Зайти в папку пакета material-spirit и сделать yarn link.
2. Повторить для всех внутренних пакетов.
3. В client app сделать yarn link material-spirit.
4. Повторить для всех внутренних пакетов.
5. Теперь пакеты material-spirit и client app связаны по semlink.
6. Далее добавляем в client app dependency на material-spirit. Я просто добавил в package.json: "material-spirit":"link:../../Material Spirit/material-spirit/packages/material-spirit". По идее это надо делать только в самом начале, пока еще пакеты material-spirit ниразу не опубликованы.
7. Далее запускаю yarn install. В yarn.lock появляются записи вида:

```
"@material-spirit/spirit-border@link:../../Material Spirit/material-spirit/packages/mdcs-spirit-border":
  version "0.0.0"
  uid ""
```

8. По идее, после того как установлен semlink между material-spirit и client app, в package.json можно заменить link-протокол на версию пакета как обычно. Теперь yarn сможет найти эти пакеты. До этого он их не находил, так как всегда пытался сначала найти их в npm registry. Но это надо проверить.

Ссылки по этой проблеме:
1. [yarn install fails for unpublished and linked-in dependency](https://github.com/yarnpkg/yarn/issues/2611). Тут кстати пишут что эта проблема исправлена в yarn2. Но я так и не смог ее побороть в yarn2. Он еще сырой, да и я неправильные шаги по связыванию делал.
2. [How to yarn link when the package is not published?](https://putridparrot.com/blog/how-to-yarn-link-when-the-package-is-not-published/) - по сути это ключевое действие по связыванию, если пакеты еще не ниразу не опубликованы.
3. ["yarn knit": a better "yarn link"](https://github.com/yarnpkg/yarn/issues/1213). Тут какая-то новая идея для link и даже утилита какая-то есть для этого. Надо бы почитать, может тут есть решение получше для всей этой проблемы.




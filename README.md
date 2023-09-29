# Прожито Development App

Deployed example: [auth-lived.vercel.app](https://auth-lived.vercel.app/). Contains links to the rest subdomains. Login form already filled by auth details for a comfortable testings.

### Стек:

- TypeScript
- Monorepo: besed on turbo
- Frameworks: Next.js, NextAuth.js
- Package manager: pnpm
- Linter: ESlint
- Format: Prettier

## Задание:

Разработать и развернуть на любом публичном хостинге три сервиса, работающих на трех разных субдоменах домена domain.com:

- auth.domain.com
- public.domain.com
- internal.domain.com

### auth.domain.com

1. Если клиент не авторизован (см. об авторизации ниже):

- На главной странице — форма для ввода логина и пароля. Если введены валидные данные, клиент получает токен авторизации и имя пользователя;
- С адреса `/profile` — редирект на главную страницу.

2. Если клиент авторизован:

- C главной редирект на страницу `/profile`;
- На странице `/profile`:
  1. Заголовок «Привет, %username%!»,
  2. Кнопка «Выход», которая завершает сессию.
- Все остальные адреса (кроме главной страницы и `/profile`) открываются с текстом «Ошибка 404».
  <i>comment:</i> В footer для удосбва навиигации добавлены ссылки:
  - `/home` - ссылка на главную страницу
  - `/profile` - ссылка на страницу `/profile`
  - `/random` - рандомно генерируемая ссылка для удобства проверки не существующих страниц

### internal.domain.com

1. Если клиент не авторизован:

- На главной странице:
  1. Заголовок «Привет!»
  2. Кнопка «Войти», по нажатию которой без смены адреса страницы открывается форма авторизации (логин / пароль). Если введены валидные данные, клиент получает токен авторизации и имя пользователя и остается на главной странице.
  3. Список ссылок на доступные страницы из двух пунктов:
  - `/public` — страница с заголовком «Добро пожаловать! Это публичная страница»
  - `/public-only` — страница с текстом «Эта страница доступна только не авторизованным пользователям»

2. Если клиент авторизован:

- На главной странице
  1. Заголовок «Привет, %username%!»
  2. Кнопка «Выйти», нажатие которой завершает сессию
  3. Список ссылок на доступные страницы из двух пунктов (<i>comment:</i> `/internal-only` и `/home` тоже добавлены в ссылки):
  - `/public` — страница с заголовком «Добро пожаловать!» (доступна вне зависимости от того, авторизован ли пользователь)
  - `/public-only` - доступна только не авторизованным пользователям.
  - `/internal-only` — страница с текстом «Эта страница доступна только авторизованным пользователям» (доступна только авторизованным пользователям)
  - Не доступные в данный момент страницы открываются с текстом «Ошибка 403».
  - Все остальные адреса открываются с текстом «Ошибка 404».

### public.domain.com

1. На главной странице заголовок «Привет!».
2. Сервис поддерживает адреса, соответствующие двум шаблонам:

- `/<categorySlug>` — страница с текстом «Категория: `%categorySlug%`»;
- `/<categorySlug>/<pageSlug>` — страница с текстом «Категория: `%categorySlug%`, страница: `%pageSlug%`».
- Все остальные адреса открываются с текстом «Ошибка 404».

3. Никакой авторизации тут нет.

## Дополнительные условия и вопросы

- Внешний вид не имеет значения, не следует подключать UI-библиотек, лучше использовать как можно меньше jsx-кода и как можно более простую разметку. Если хочется стилизовать компоненты, следует использовать css modules.
- У всех трех сервисов общий хедер — три ссылки с текстом auth, internal и public, ведущие на адреса этих трех сервисов. Ссылка с адресом, на котором в данных момент находится клиент, выделена красным цветом.
- У сервисов auth.domain.com и internal.domain.com общая авторизация — залогинившись в одном из них, можно перейти в другой без необходимости авторизоваться заново. Завершив сессию в одном из них, придется заново входить в другой. Не имеет значения, какими средствами поддерживается эта связность.
- Сервисы auth.domain.com и internal.domain.com — это разные проекты, находящиеся в разных репозиториях.
- Сервисы public.domain.com и internal.domain.com имеют общий код — компонент, который выводит в футере каждой страницы сегодняшнюю дату в формате ДД.ММ.ГГГГ. Предположим, что этот общий код часто дорабатывается и его нужно одновременно поддерживать для обоих сервисов. Неизвестно, какого кода у двух проектов будет больше через полгода — общего или различного. Каким образом можно обеспечить комфортную поддержку? Можно ли хранить оба сервиса в одном репозитории и переключать их функциональность с помощью конфигов, или есть более выгодные решения этой задачи?
- Изменится ли что-то в логике приложений, если сервис public.domain.com будет работать не на указанном субдомене, а на основном — domain.com? Реализовать и протестировать такой вариант деплоя.
- Инструменты разработки и деплоя не имеют значения при условии соблюдения указанного выше стека.

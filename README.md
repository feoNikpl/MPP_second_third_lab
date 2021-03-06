Разработать простое приложение с рендерингом на сервере. Например, список задач со статусом их выполнения, фильтрацией по статусу и выставлением ожидаемой даты завершения, а так же возможностью прикреплять файлы к каждой задаче. Сервер должен отдавать клиенту готовую разметку, отправка данных серверу должна осуществляться через отправку форм. Обязательно использование NodeJS, конкретные библиотеки могут отличаться. Например, подойдут Express + EJS.

2. Rest API + SPA
Простое приложение, как в лабораторной работе 1, но с другой архитектурой. На сервере должен быть реализован REST API, на клиенте - Single Page Application. Обмен данных должен осуществляться путем отправки/принятия http запросов с данными в формате JSON или файлов в формате multipart/form-data. Обновление данных на клиенте не должно приводить к перегрузке страницы. Серверный REST API должен поддерживать ожидаемую семантику: правильно использовать http методы (GET для чтения данных, POST/PUT для изменения, DELETE для удаления и т.п.) и возвращать правильные коды ответов (200 в случае успешного чтения/изменения данных, 404 если ресурс не найдет и т.п.). Обязательно использование NodeJS на сервере. На клиенте можно использовать что угодно, React/Angular/Vue или вообще без библиотеки.
3. JWT
Добавить к приложению из лабораторной №2 аутентификацию на базе JWT токенов. Токен должен передаваться через httponly cookie на клиент и так же отправляться на сервер. При попытке прочитать/изменить данные на сервере без валидного токена, клиенту должен возвращаться 401 код. При получении кода 401 клиент должен потребовать от пользователя ввода логина/пароля. Для формирования jwt токена можно использовать только пакеты jsonwebtoken и bcrypt. Логику аутентификации нужно описать в виде отдельного middleware той библиотеки, на которой написан сервер (например, Express).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# bookstore-react-redux-app

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Bookstore CMS App built using React, Redux and React-Redux. [Live Demo](https://bookstore-cms-react-redux-app.herokuapp.com/)

Updated features:

- User can create an account and authenticate
- User can have a regular account, an admin account. Only one user is owner
- Admin users can search books from Google Books API
- Admin users can add books to the main library
- Owner user can assign access levels to other users
- Regular user can search library for books
- Regular user can add a book to his/her collection
- Regular user can update the current page being read for each book in his collection
- Regular user can remove a book from his collection

## API Connection

The React application utilizes Google Books API in order for admin users to add books to the libarary.

This application connects to a backend [Ruby on Rails API](https://github.com/rvvergara/bookstore_rails_app) that allows for account creation, book additions to the library and book additions to each user's collection.

## Table of Contents

- [bookstore-react-redux-app](#bookstore-react-redux-app)
  - [Table of Contents](#table-of-contents)
  - [Technologies used](#main-technologies-used)
  - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
  - [Maintainers](#maintainers)
  - [Contributing](#contributing)
  - [License](#license)

## Main Technologies used

- React
- Redux
- React-Redux
- React-Router-DOM
- Redux-thunk
- JWT-decode
- Axios
- Jest
- Enzyme

## Install

Follow these steps:

- clone this repo
- `cd bookstore-react-redux-app`
- `yarn install` or `npm install`

IN order to maximize the usage of this application, it is recommended to either build a custom backend API or clone its corresponding backend Ruby on Rails API [here](https://github.com/rvvergara/bookstore_rails_app)

## Usage

```
yarn start
```

Goto `localhost:3000`

## API

## Maintainers

[Ryan](https://github.com/rvvergara) and [Dipto](https://github.com/dipto0321)

## Contributing

[Ryan](https://github.com/rvvergara) and [Dipto](https://github.com/dipto0321)

PRs accepted.

## License

MIT © 2019 Ryan and Dipto

# PetBook

PetBook is a social media platform build around pets. This project is created as a learning project to learn more about web frontend development.
You can find a live version of the project under https://petbook.johanneskrabbe.com

## Setup this project locally

- clone both, the client and the server repo (https://github.com/Johannes-Krabbe/petbook-client , https://github.com/Johannes-Krabbe/petbook-server)
- setup the backend server (you can find the instuctions in README.md in the server repo)
- create an .env.local and set (NODE_ENV=development)
- run `yarn install`
- run `yarn dev`

## Documentation

### Security

The libary `next-secure-headers` adds an basic layer of security. (next.config.js)
It creates a content security policy, adds xss protection, forces https redirects and limits the information send out in the referrer header.

### User interface

#### NavBar component

The Navbar component is part of every page. It contains a link to the home page on the left side and a login button, which gets replaced by a username and a log out button once a user logs in.
The NavBar does not rely on state management yet, but makes a call to the api everytime it gets rendered.
The log out button simply deletes the session cookie and reloads the page.

#### Homepage

The homepage features all posts.

Future plan:
User personalized feed with a limited amount of posts.

#### Login and Register

The login page (`/login`) contains two input fields (username and password). Once a user types in login credentials and submits them, a request will be made to the backend. If the login credentials are valid, the response will contain a jwt token. This token will be set as a session cookie, so the user can stay logged in. After that the user will be redirected to `/me`

A user can register a new account on the register page (`/login/register`), if he enters a unique username and email address. The password has to be repeated once to prevent a user from misspelling it, and as a result not having access to his account.

#### Creating pets and posts

A user can create pets if he is logged in (`/me/createPet`) and then create posts for every pet (`/me/pets`).

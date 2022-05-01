# PetBook

PetBook is a social media platform build aroud pets. This Project is created as an learning project to learn more about frontend development.
You can find a live version of the project under https://petbook.johanneskrabbe.com

## Setup this project locally

- clone both, the client and the server repo (https://github.com/Johannes-Krabbe/petbook-client , https://github.com/Johannes-Krabbe/petbook-server)
- setup the backend server (you can find the instuctions in README.md in the server repo)
- create an .env.local and set (NODE_ENV=development)
- run `yarn install`
- run `yarn dev`

## Documentation

### Security

The libary `next-secure-headers` adds an extra layer of security. (next.config.js)
It creates an content security policy, adds xss protection, forces https redirects and limits the information send out in the Referer header.

### User interface

#### NavBar component

The Navbar component is part of every page. It contains a link to the home page on the left side and a Login button, which gets replaced by a username and a logout button once a user logs in.
The NavBar does not rely on statemanagement yet, but makes a call to the api everytime it gets rendert.
The Logout button simply deletes the session cookie and reloads the Page.

#### Home Page

The Homepage features all posts.

Future plan:
User personalised feed with an limitit number of posts

#### Login and Register

The login page (`/login`) contains two input fields (Username and Password). Once a user types in login credentials and submits them, a request will be made to the backend. If the login credentials are valid, the response will contain a jwt token. This token will be set as an session cookie, so the user can stay logged in. After that the user will be redirected to `/me`

A user can register a new account on the register page (`/login/register`), if he enters a unique username and emailadress. The password has to be repeated once to prevent a user from missspelling it and as an result not having access to his account anymore.

#### Creating pets and posts

A user can create pets if he is logged in (`/me/createPet`) and then create posts for every pet (`/me/pets`).

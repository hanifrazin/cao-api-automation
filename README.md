# Tugas 2 - API Automation

### Requirement Dependencies
 1. supertest
 1. mocha
 1. chai
 1. dotenv
 1. faker

### How to Run the Code

 1. Open the [Restful Booker docs](https://restful-booker.herokuapp.com/apidoc/index.html)
 1. Clone [this repo](https://github.com/hanifrazin/cao-api-automation) to your local
 2. Open the project using Visual Studio Code
 1. Create a .env file on it project and input the data as follows
     ```
    # BASE_URL API yang akan di test
    API_BASE_URL=https://restful-booker.herokuapp.com

    # Token AUTH
    API_AUTH_TOKEN=

    # Username dan password 
    API_USERNAME=admin
    API_PASSWORD=password123
     ```
 3. Type bellow command in terminal at VS Code
	 ```
     npm install
     ```
     > You only need to run `npm install` once to install dependencies such as `supertest, mocha, chai, dotenv, faker`
 4. After that you can run using one of bellow command

	 ```
     npx mocha tests/e2e-booker.spec.js 
     ```
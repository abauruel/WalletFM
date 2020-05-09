<p align="center">
<img src="https://image.flaticon.com/icons/svg/1535/1535866.svg" height="150" width="175" alt="WalletFM"/>


</p>

<h1 align="center"> WalletFM</h1>
<p align="center">
This project is based on a challenge proposed in developing an application(Backend and frontend) to manage financial wallet customer, 
identifying each investment, brokers and your products</p>
<p align="center">Backend Developed in C# .Net Core</p>
<p align="center">Frontend Developed in Reacjs with Typescript 
</p>

<p align="center">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/abauruel/WalletFM"/>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/abauruel/WalletFM"/>
  
 <a href="https://github.com/abauruel/WalletFM/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/abauruel/WalletFM"/>
  </a>
 <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

##

## Getting Started

### Prerequisites
* [PostgreSql](https://www.postgresql.org/download/) - Database
* [.Net Core](https://dotnet.microsoft.com/download)
* [NodeJs](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/) or **npm** Included in nodejs instalation - package manager


### Installing
```
git clone https://github.com/abauruel/WalletFM
cd backend && dotnet restore
```
Can install using your prefencial package manager
**yarn** or **npm**
```
cd frontend && yarn 
```
```
cd frontend && npm install
```
### Configure
#### Backend
access appsettings.json and set you database user and password in DefaultConnection
#### Frontend
change .env.example to .env and set your backend api address
``` REACT_APP_URL= ```

### Run
#### Backend
``` dotnet run ```
#### Frontend
``` yarn start ```

## Built With
### Backend
* [Entity Framework Core 3.1.0](https://docs.microsoft.com/pt-br/ef/core/get-started/?tabs=netcore-cli) - ORM 
* [Npgsql.EntityFrameworkCore.PostgreSQL](https://www.npgsql.org/) - ADO.NET Data Provider for PostgreSQL
* [AutoMapper](https://github.com/AutoMapper/AutoMapper)  
* [NewtonsoftJson](https://www.newtonsoft.com/json) 

### Frontend
* [Typescript](https://www.typescriptlang.org/) - superset JavaScript
* [styled-components](https://styled-components.com/) - CSS styling framework js
* [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - lib to navegation reactjs
* [react-icons](https://react-icons.github.io/react-icons/) - Icons Library open source, used [Feather](https://feathericons.com/)
* [polished](https://polished.js.org/) A lightweight toolset for writing styles in JavaScript
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js


## Authors

* **Alex Claude** 

See also the list of [contributors](https://github.com/abauruel/WalletFM/graphs/contributors) who participated in this project.

<div>WalleFM Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

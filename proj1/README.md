# Activity App
## Requirements
>- npm 8.15.0
>- .NET 5.0
>- MS Entity Framework 5.0.17

## How to run
### FrontEnd
```
$ npm run start
```
### BackEnd
```
$ dotnet run
```

## Configure FrontEnd
### Install dependecies
```
$ npm install
```

## Configure BackEnd
### Create migrations
```
$ cd src/
$ dotnet ef migrations add <name> -p ActivityApp.Data -s ActivityApp.API
```

### Update database
```
$ cd src/
$ dotnet ef database update -s ActivityApp.API
```
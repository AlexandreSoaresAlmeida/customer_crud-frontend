[![@coreui coreui](https://img.shields.io/badge/@coreui%20-coreui-lightgrey.svg?style=flat-square)](https://github.com/coreui/coreui)
[![npm package][npm-coreui-badge]][npm-coreui]
[![NPM downloads][npm-coreui-download]][npm-coreui]  
[![@coreui react](https://img.shields.io/badge/@coreui%20-react-lightgrey.svg?style=flat-square)](https://github.com/coreui/react)
[![npm package][npm-coreui-react-badge]][npm-coreui-react]
[![NPM downloads][npm-coreui-react-download]][npm-coreui-react]  
[![npm next][npm-next]][npm]

[npm-coreui]: https://www.npmjs.com/package/@coreui/coreui
[npm-coreui-badge]: https://img.shields.io/npm/v/@coreui/coreui.png?style=flat-square
[npm-coreui-download]: https://img.shields.io/npm/dm/@coreui/coreui.svg?style=flat-square
[npm-coreui-react]: https://www.npmjs.com/package/@coreui/react
[npm-coreui-react-badge]: https://img.shields.io/npm/v/@coreui/react.png?style=flat-square
[npm-coreui-react-download]: https://img.shields.io/npm/dm/@coreui/react.svg?style=flat-square
[npm-next]: https://img.shields.io/npm/v/@coreui/react/next.png?style=flat-square
[npm]: https://www.npmjs.com/package/@coreui/react

# Project CRUD Customer - Screen View
<p align="center">
  <p>1. Animate Presentation:</p>
  <img width="600" height="350" src="src/assets/to_readme/show.gif" />
  <p>2. Presentation:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela000.png" />
  <p>3. Login:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela001.png" />
  <img width="600" height="350" src="src/assets/to_readme/tela002.png" />
  <img width="600" height="350" src="src/assets/to_readme/tela003.png" />
  <p>4. Authenticate:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela004.png" />
  <p>5. Custumers List:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela005.png" />
  <p>6. Roles List:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela006.png" />
  <p>7. Exclude Customer:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela007.png" />  
  <p>8. New Customer:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela009.png" />
  <p>9. New Address:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela010.png" />  
  <img width="600" height="350" src="src/assets/to_readme/tela011.png" />  
  <p>10. Find CEP [Public endPoint viaCep](https://viacep.com.br/):</p>
  <img width="600" height="350" src="src/assets/to_readme/tela012.png" />
  <p>11. Add New Address:</p>
  <img width="600" height="350" src="src/assets/to_readme/tela013.png" />  
</p>  

# Access Count:

| User | Password | Roles Associada |
| --- | --- | --- |
| admin | 123456 | [ROLE_ADMIN, ROLE_COMUM] |
| comum | 123456 | [ROLE_COMUM] |

# CoreUI Free React Admin Template v3

CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop. The CoreUI Layout API lets you customize your project for almost any device ??? be it Mobile, Web or WebApp ??? CoreUI covers them all!

## Table of Contents

* [Versions](#versions)
* [CoreUI Pro](#coreui-pro)
* [Installation](#installation)
* [Basic usage](#create-react-app)
* [What's included](#whats-included)
* [Documentation](#documentation)
* [Versioning](#versioning)
* [Creators](#creators)
* [Community](#community)
* [Copyright and License](#copyright-and-license)

## Versions

* [CoreUI Free Bootstrap Admin Template](https://github.com/coreui/coreui-free-bootstrap-admin-template)
* [CoreUI Free Angular 9+ Admin Template](https://github.com/coreui/coreui-free-angular-admin-template)
* [CoreUI Free React.js Admin Template](https://github.com/coreui/coreui-free-react-admin-template)
* [CoreUI Free Vue.js Admin Template](https://github.com/coreui/coreui-free-vue-admin-template)
* [CoreUI Free Laravel Admin Template](https://github.com/coreui/coreui-free-laravel-admin-template)
* [CoreUI Free Vue.js + Laravel Admin Template](https://github.com/coreui/coreui-free-vue-laravel-admin-template)


## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/coreui/coreui-free-react-admin-template.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

### Copy and Paste

Copy all your files to your project folder and then,

``` bash
# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

see also:
[CRA docs](https://create-react-app.dev/docs/getting-started)

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
CoreUI-React#v3.0.0
????????? public/          #static files
???   ????????? index.html   #html template
???
????????? src/             #project root
???   ????????? assets/      #assets - js icons object
???   ????????? containers/  #container source - template layout
|   ???   ????????? _nav.js  #sidebar config
|   ???   ????????? ...      
???   ????????? scss/        #user scss/css source
???   ????????? views/       #views source
???   ????????? App.js
???   ????????? App.test.js
???   ????????? polyfill.js
???   ????????? index.js
???   ????????? routes.js    #routes config
???   ????????? store.js     #template state example 
???
????????? package.json
```

## Documentation

The documentation for the CoreUI Admin Template is hosted at our website [CoreUI for React](https://coreui.io/react/)

### :film_strip: How to setup coreui react theme in laravel. Video tutorial available [here](https://youtu.be/HVVpbpNUJ8M)

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI Free Admin Template is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-free-react-admin-template/releases) for changelogs for each release version.

## Creators

**??ukasz Holeczek**
* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>
* <https://github.com/coreui>

**CoreUI team**
* https://github.com/orgs/coreui/people

## Community

Get updates on CoreUI's development and chat with the project maintainers and community members.

- Follow [@core_ui on Twitter](https://twitter.com/core_ui).
- Read and subscribe to [CoreUI Blog](https://coreui.ui/blog/).


## Copyright and License

copyright 2021 creativeLabs ??ukasz Holeczek.   

 
Code released under [the MIT license](https://github.com/coreui/coreui-free-react-admin-template/blob/master/LICENSE).
There is only one limitation you can't can???t re-distribute the CoreUI as stock. You can???t do this if you modify the CoreUI. In past we faced some problems with persons who tried to sell CoreUI based templates.

## Support CoreUI Development

CoreUI is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying [CoreUI Pro Version](https://coreui.io/pro/).

We're also open to conversations regarding custom sponsorship / consulting arrangements. Get in touch on [Twitter](https://twitter.com/lukaszholeczek).

<h1 align="center">Welcome to cookieplus 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/beeeku" target="_blank">
    <img alt="Twitter: beeeku" src="https://img.shields.io/twitter/follow/beeeku.svg?style=social" />
  </a>
</p>

> Nicer way to manage your cookies

## Install

```sh
yarn install @beeeku/cookieplus
```

### Importing library

```javascript
import { getCookie, setCookie, removeCookie, clearCookie } from 'mylib';
```

### Usage

```javascript
const times = parseInt(getCookie('times'), 10) || 0;
setCookie('times', times + 1);
removeCookie('times');
clearCookie();
```

## Demo

[CodeSandbox](https://sr9bxv.csb.app/)

## Author

👤 **Bikash Dash**

- Website: https://bika.sh
- Twitter: [@beeeku](https://twitter.com/beeeku)
- Github: [@beeeku](https://github.com/beeeku)
- LinkedIn: [@beeeku](https://linkedin.com/in/beeeku)

## Show your support

Give a ⭐️ if this project helped you!

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
npm install @beeeku/cookieplus
yarn add @beeeku/cookieplus
```

### Importing library

```javascript
import { getCookie, setCookie, removeCookie, clearCookie } from '@beeeku/cookieplus';
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

## API

## getCookie(key)

Return the cookie value for `key`.

## setCookie(key, value, opts={})

Set the cookie at `key` to `value` with optional parameters `expires` and `path`.`.

## removeCookie(key)

Removes cookie value stored at `key`.`.

## clearCookie()

Removes all currently available cookies.

## Inspiration 
> Implemented with typescript from https://github.com/substack/cookie-cutter

## Author
👤 **Bikash Dash**

- Website: https://bika.sh
- Twitter: [@beeeku](https://twitter.com/beeeku)
- Github: [@beeeku](https://github.com/beeeku)
- LinkedIn: [@beeeku](https://linkedin.com/in/beeeku)

## Show your support

Give a ⭐️ if this project helped you!

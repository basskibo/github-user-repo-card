# Github user repo card

![Screenshot 2022-10-19 221903](https://user-images.githubusercontent.com/7330740/196796279-7c68f9be-33c5-4093-9171-4345578a43e2.png)

### Table of content

- [About](#about)
- [How to install](#how-to-install)
- [Usage](#usage)
- [Example](#example)
- [License](#license)

## About
This card is generating react component in order to show Github `user` and `repository` informations. 
In current version `0.5.2` you are able to set name, width and height of the GitHub card as seen above on the image. 

__Repository card is still not supported__. In the following versions, there will be added repository card support and options that you can see in Features table.


## How to install

In order to install run following command:
```
$ npm i github-user-repo-card
```

## Usage

For now it is only possible to import like module, it will not work with Commonjs.

```js
import { GithubCard } from "github-user-repo-card";
```
In the render method use code 

```js
<GithubCard name="basskibo" type="user" repository="blogtech_dev" widht={300} height={400} />
```

## Example

You can check [Live Example](https://githubcard-demo.vercel.app/)

## Available properties
| Name | Description | Implemented |
| :---: | :--- | :---: |
| `type` | Type can be `user`/`profile` or `repository`| ✅ |
| `name` | Account name of `user`/`profile` on the GitHub | ✅ | 
| `repository` | Name of the repository on the GitHub | ✅ | 
| `useCache` | Flag `boolean` wheather to used cache data | ❌ |
| `widht` | Set desired width of the GitHubCard | ✅ |
| `height` | Set desired height of the GitHubCard | ✅ |
| `showProperties` | Set desired property which you want to show | ❌ |

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

See [LICENSE](LICENSE) for full details.

```text
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


# expressions-calculator

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4c724d64f8614e208ae8c326e194c67f)](https://app.codacy.com/gh/kaczor6418/expressions-calculator?utm_source=github.com&utm_medium=referral&utm_content=kaczor6418/expressions-calculator&utm_campaign=Badge_Grade)

## Description

Expressions calculator can take binary or regular mathematical expression then do lexical, syntax and semantic analysis of provided expression. If the expression doesn't contain any errors then calculator-enige will compile the expression and return result of the expression.

## What do you need
To run this project you will need:

 - **`node.js`**
 - **`npm`**
 - **`rustup`**
 - **`rustc`**
 - **`cargo`**
 - **`wasm-pack`**

## How to run

```bash
git clone https://github.com/kaczor6418/expressions-calculator.git
cd expressions-calculator/calculator-engine
wasm-pack build
cd ..
npm install
npm run serve
chromium-browser http://localhost:8080/
```
> If you do not have chromium-browser run any modern web browser and go under *`http://localhost:8080/`* url

>**THIS APPLICATION IS STILL IN DEVELOPMENT AND IS NOT COMPLETED**

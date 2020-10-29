# expressions-calculator

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

mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct LexicalAnalyzer {
    expression: char
}

#[wasm_bindgen]
impl LexicalAnalyzer {
    pub fn new() -> LexicalAnalyzer {
        let expression: char = 'a';
        LexicalAnalyzer {
            expression
        }
    }

    pub fn expression(&self) -> char {
        self.expression
    }

    pub fn change_expression(&mut self) {
        self.expression = 'b';
    }
}


#[wasm_bindgen]
pub fn return_char() -> char {
        return 'a';
    }

#[wasm_bindgen]
pub fn return_u8() -> u8 {
    return 1;
}

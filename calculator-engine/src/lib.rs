mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

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


    pub fn return_char() -> char {
        return 'a';
    }

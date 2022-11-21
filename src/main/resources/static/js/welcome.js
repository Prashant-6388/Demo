import $ from 'jquery'
import pretty from  'prettier'
import htmlParser from 'prettier/parser-html'

function getSomething() {
    return "if you have called getSomething you will get something....";
}

$(function() {
    console.log( "welcome to page !!!" );
    console.log(getSomething());
    console.log(pretty.format("<html><head></head></html>",
        {
            parser: "html",
            plugins: [htmlParser],
            "arrowParens": "always",
            "bracketSameLine": false,
            "bracketSpacing": true,
            "embeddedLanguageFormatting": "off",
            "htmlWhitespaceSensitivity": "ignore",
            "insertPragma": false,
            "jsxSingleQuote": false,
            "printWidth": 1000,
            "proseWrap": "always",
            "quoteProps": "as-needed",
            "requirePragma": false,
            "semi": true,
            "singleQuote": false,
            "tabWidth": 2,
            "trailingComma": "es5",
            "useTabs": true,
            "vueIndentScriptAndStyle": false
        }));
});

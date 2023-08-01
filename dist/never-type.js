"use strict";
function errorGenerator(message, code) {
    throw { message, code };
}
errorGenerator("error due to high demand!", 500);
// never doesn't return anything

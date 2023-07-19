function errorGenerator(message: string, code: number): never{
    throw {message, code};
}

errorGenerator("error due to high demand!",500)

// never doesn't return anything
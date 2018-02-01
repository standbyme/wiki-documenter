function LocalizerError() {
    this.name = 'LocalizerError'
    this.message = 'Localizer Error'
    this.stack = (new Error()).stack
}
LocalizerError.prototype = Object.create(Error.prototype)
LocalizerError.prototype.constructor = LocalizerError

function ParserError() {
    this.name = 'ParserError'
    this.message = 'Parser Error'
    this.stack = (new Error()).stack
}
ParserError.prototype = Object.create(Error.prototype)
ParserError.prototype.constructor = ParserError

function RequestError() {
    this.name = 'RequestError'
    this.message = 'Request Error'
    this.stack = (new Error()).stack
}
RequestError.prototype = Object.create(Error.prototype)
RequestError.prototype.constructor = RequestError

export { LocalizerError, ParserError, RequestError }

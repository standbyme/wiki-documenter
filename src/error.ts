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

export { LocalizerError, ParserError }

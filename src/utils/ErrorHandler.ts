interface IErrorHandler{
  name: string,
  statusCode: number,
  message: string,
  description: string
}


class ErrorHandler extends Error{
  statusCode: number
  description: string

  constructor({name, statusCode, message, description}: IErrorHandler){
    super(message),
    this.name = name
    this.statusCode = statusCode,
    this.description = description
  }
}

export {ErrorHandler}
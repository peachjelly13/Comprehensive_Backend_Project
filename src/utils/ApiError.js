//When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks
import { Error } from "mongoose"
class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went Wrong",
        errors = [],
        stack = "" //error stack it means

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);

        }
    }
}

export {ApiError}

//handling api errors and not api response
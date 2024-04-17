//When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks

class ApiError extends Errors{
    constructor(
        statusCode,
        message="Something went Wrong",
        error = [],
        stack = "" //error stack it means

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;

    }

}

//handling api errors and not api response
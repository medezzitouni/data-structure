

export default class ThrowError extends Error{
    constructor(public name: string = 'Error', message: string = ''){
        super(message);
    }
}
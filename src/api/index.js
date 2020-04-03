import ajax from './ajax'

export const reqData =(name, age) => ajax('/url', {name, age})
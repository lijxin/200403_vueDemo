import ajax from './ajax'

export const reqData =(name, age) => ajax('/url', {name, age})

export const reqDataNull = () => ajax('/address')

export const reqDataKey = (key) => ajax(`/url/${key}`)

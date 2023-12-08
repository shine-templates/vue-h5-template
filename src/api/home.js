import request from 'utils/request'
const prefix = ''

export const getShopData = (params) =>
  request({
    url: '',
    method: 'GET',
    prefix,
    params,
  })

export const postPay = (data) =>
  request({
    url: '',
    method: 'POST',
    prefix,
    data,
  })

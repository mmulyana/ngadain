import { BASE_URL } from '../constants/Url'
import { HttpClient } from './http'

export const api = new HttpClient(BASE_URL + '/api')

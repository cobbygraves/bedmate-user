import axios from 'axios'
import { SERVER_URL } from './constants'

export const validateEmail = (value: string) => {
  // Regular expression for basic email validation
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  if (emailRegex.test(value)) {
    return true
  } else {
    return false
  }
}

export const signUp = async (payload: {
  email: string
  pin: string
  confirmPin: string
  fullName: string
  phoneNumber: string
}) => {
  try {
    const { data } = await axios.post(`${SERVER_URL}/user/signup`, payload)
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

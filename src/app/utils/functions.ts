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

export const signIn = async (payload: { phone: any; pin: any }) => {
  try {
    const { data } = await axios.post(`${SERVER_URL}/user/signin`, payload)
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const getHostels = async () => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/hostel`)
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const getHostel = async (id: string | string[]) => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/hostel/${id}`)
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

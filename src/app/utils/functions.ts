import axios from 'axios'
import { SERVER_URL } from './constants'
import { getSession } from 'next-auth/react'

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

export const getHostelReviews = async (hostelId: string) => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/review/${hostelId}`)
    //console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const getRecommendedHostels = async (hostelId: string) => {
  try {
    const { data } = await axios.get(
      `${SERVER_URL}/hostel/${hostelId}/recommended`
    )
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const getFavouriteHostels = async (userOBJId: string) => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  try {
    const { data } = await axios.get(`${SERVER_URL}/favourite/${userOBJId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const removeFavouriteHostel = async (
  hostelOBJId: string,
  userOBJId: string
) => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  try {
    const { data } = await axios.delete(
      `${SERVER_URL}/favourite/${userOBJId}/remove/${hostelOBJId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const addFavouriteHostel = async (payload: any) => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  try {
    const { data } = await axios.post(`${SERVER_URL}/favourite/add`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

export const isFavouritedHostel = async (
  hostelOBJId: string,
  userOBJId: string
) => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  try {
    const { data } = await axios.get(
      `${SERVER_URL}/favourite/${userOBJId}/is-in-favourite/${hostelOBJId}`
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`
      //   }
      // }
    )
    // console.log(data)
    return data
  } catch (error) {
    return error
  }
}

// export const bookNow = async (payload: any) => {
//   const session:any = await getSession()
//   try {
//     const { data } = await axios.post(`${SERVER_URL}/booking`, payload, {
//       headers: {
//         Authorization: `Bearer ${session?.user?.accessToken}`
//       }
//     })
//     // console.log(data)
//     return data
//   } catch (error) {
//     return error
//   }
// }

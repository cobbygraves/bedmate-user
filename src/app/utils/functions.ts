import axios from 'axios'
import { SERVER_URL } from './constants'
import { getSession } from 'next-auth/react'

/**
 * Validates if a string is a valid email address.
 */
export const validateEmail = (value: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ // Regular expression for basic email validation

  if (emailRegex.test(value)) {
    return true
  } else {
    return false
  }
}

/**
 * Registers a new user with the provided payload.
 */
export const signUp = async (payload: {
  email: string
  pin: string
  confirmPin: string
  fullName: string
  phoneNumber: string
}) => {
  try {
    const { data } = await axios.post(`${SERVER_URL}/user/signup`, payload)

    return data
  } catch (error) {
    return error
  }
}

/**
 * Signs in a user with phone and pin.
 */
export const signIn = async (payload: { phone: any; pin: any }) => {
  try {
    const { data } = await axios.post(`${SERVER_URL}/user/signin`, payload)

    return data
  } catch (error) {
    return error
  }
}

/**
 * Fetches all hostels from the server.
 */
export const getHostels = async () => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/hostel`)

    return data
  } catch (error) {
    return error
  }
}

/**
 * Fetches a single hostel by its ID.
 */
export const getHostel = async (id: string | string[]) => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/hostel/${id}`)

    return data
  } catch (error) {
    return error
  }
}

/**
 * Fetches reviews for a specific hostel.
 */
export const getHostelReviews = async (hostelId: string) => {
  try {
    const { data } = await axios.get(`${SERVER_URL}/review/${hostelId}`)
    return data
  } catch (error) {
    return error
  }
}

/**
 * Fetches recommended hostels based on a hostel ID.
 */
export const getRecommendedHostels = async (hostelId: string) => {
  try {
    const { data } = await axios.get(
      `${SERVER_URL}/hostel/${hostelId}/recommended`
    )

    return data
  } catch (error) {
    return error
  }
}

/**
 * Fetches the favourite hostels for a user.
 */
export const getFavouriteHostels = async (userOBJId: string) => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  try {
    const { data } = await axios.get(`${SERVER_URL}/favourite/${userOBJId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  } catch (error) {
    return error
  }
}

/**
 * Removes a hostel from the user's favourites.
 */
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

    return data
  } catch (error) {
    return error
  }
}

/**
 * Adds a hostel to the user's favourites.
 */
export const addFavouriteHostel = async (payload: any) => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  try {
    const { data } = await axios.post(`${SERVER_URL}/favourite/add`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  } catch (error) {
    return error
  }
}

/**
 * Checks if a hostel is in the user's favourites.
 */
export const isFavouritedHostel = async (
  hostelOBJId: string,
  userOBJId: string
) => {
  const session = await getSession()
  const accessToken = session?.user?.accessToken
  try {
    const { data } = await axios.get(
      `${SERVER_URL}/favourite/${userOBJId}/is-in-favourite/${hostelOBJId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    return data
  } catch (error) {
    return error
  }
}

// /**
//  * Books a hostel now with the provided payload.
//  */
// export const bookNow = async (payload: any) => {
//   const session:any = await getSession()
//   try {
//     const { data } = await axios.post(`${SERVER_URL}/booking`, payload, {
//       headers: {
//         Authorization: `Bearer ${session?.user?.accessToken}`
//       }
//     })
//
//     return data
//   } catch (error) {
//     return error
//   }
// }

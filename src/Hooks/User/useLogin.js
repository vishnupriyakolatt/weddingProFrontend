import { useState } from "react";
import { useAuthContext } from "../useAuthContext";
import axios from '../../instance/axios';

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login =  (email, password) =>
  new Promise(async (resolve,reject) =>  {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.post('/login', { email, password })
      console.log(response);
      const json = response.data

      // save the user to the local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json })
      setIsLoading(false)
      resolve(response.data)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
      setError(error.response.data.error)
      reject(error.response.data.error)
    }
  })

  return { login, isLoading, error }
}
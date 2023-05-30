import React, { useEffect } from 'react'
import { googleSignIn } from '../../services/auth'
import { USER_SESSION, USER_TOKEN } from '../../types/localStorage'
import { useNavigate } from 'react-router-dom'
import { Toast } from '@chakra-ui/react'

export const GoogleSignIn = () => {
  const navigate = useNavigate()

  async function handleCallbackResponse (res) {
    const response = await googleSignIn({ id_token: res.credential })

    if (response.ok) {
      localStorage.setItem(USER_SESSION, JSON.stringify(response.user))
      localStorage.setItem(USER_TOKEN, response.token)
      navigate('/app/map', { replace: true })
    }

    Toast({
      title: response.ok ? 'Bienvenido' : 'Error',
      description: response.ok ? 'Sesión iniciada correctamente' : response.message,
      status: response.ok ? 'success' : 'error',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })
  }

  useEffect(() => {
    const initializeGoogleSignIn = async () => {
      await window.google?.accounts?.id?.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse
      })

      window?.google?.accounts?.id?.renderButton(document.getElementById('signinInDiv'), {
        theme: 'outline',
        size: 'large'
      })
    }

    initializeGoogleSignIn()
  }, [])

  return <div id="signinInDiv"></div>
}

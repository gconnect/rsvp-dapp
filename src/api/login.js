import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: processs.env.REACT_APP_UNSTOPPABLE_CLIENT_ID,
  redirectUri: 'https://rsvp-dapp.vercel.app/admin',
})

export const login = async () => {
  try {
    const authorization = await uauth.loginWithPopup() 
    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}
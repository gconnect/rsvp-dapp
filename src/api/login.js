import UAuth from '@uauth/js'

const uauth = new UAuth({
  // clientID: 'uauth_example_spa_id',
  clientID: 'b9880354-ed6a-438c-b7d3-8b6b2a489db8',
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
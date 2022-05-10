import UAuth from '@uauth/js'

const uauth = new UAuth({
  // clientID: 'uauth_example_spa_id',
  clientID: '648a8a9f-1946-4561-9392-db945097e3f3',
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
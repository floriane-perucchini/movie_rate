const API_URL = 'http://localhost:3001/auth/'

const AuthService = {
  login(email, password) {
    const response = fetch(`${API_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email, password)
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))
      })
      .catch((error) => console.log(error))
    return response
  },

  logout() {
    localStorage.removeItem('user')
  },

  signup({ email, password }) {
    const response = fetch(`${API_URL}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.message)
        localStorage.setItem('user', JSON.stringify(response.data))
      })
      .catch((error) => console.log(error))
    return response
  }
}

export default AuthService

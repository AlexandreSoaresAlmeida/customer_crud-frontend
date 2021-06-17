// import 'eslintimport/no-anonymous-default-export'

const baseUrl = `${process.env.REACT_APP_BASEURL}`

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase()
  let fullUrl = `${baseUrl}${endpoint}`
  let body = null
  let queryString = null
  switch (method) {
    case 'get':
      queryString = new URLSearchParams(params).toString()
      fullUrl += `?${queryString}`
      break
    case 'post':
    case 'put':
    case 'delete':
      //body = JSON.stringify(params)
      fullUrl += `/${params.id.toString()}`
      break
    default:
      break
  }

  let headers = { 'Content-Type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  let req = await fetch(fullUrl, { method, headers, body })
  let json = await req.json()
  return json
}

export default () => {
  return {
    getToken: () => {
      return localStorage.getItem('token')
    },
    validateToken: async () => {
      let token = localStorage.getItem('token')
      let json = token
      if (token !== null) {
        json = await request('post', '/auth/refresh_token', {}, token)
      }
      return json
    },
    login: async (usuario, senha) => {
      var headers = new Headers()
      headers.append('Content-Type', 'application/json')
      var raw = JSON.stringify({
        usuario: usuario,
        senha: senha,
      })
      var requestOptions = {
        method: 'POST',
        headers: headers,
        body: raw,
      }
      let json
      await fetch(`${baseUrl}/login`, requestOptions)
        .then((response) => response.text())
        .then((obj) => {
          json = JSON.parse(obj)
        })
        .catch((error) => console.log('error', error))

      if (json.status === '200') {
        localStorage.setItem('msgErro', json.message)
        localStorage.setItem('token', '')
        localStorage.setItem('user', json.user)
      } else {
        localStorage.setItem('msgErro', json.message)
        localStorage.setItem('token', json.token)
        localStorage.setItem('user', '')
      }
      return json
    },
    getListCustomes: async () => {
      let token = localStorage.getItem('token')
      let json = await request('get', '/clientes', {}, token)
      return json
    },
    removeCustomer: async (id) => {
      let token = localStorage.getItem('token')
      let json = await request('delete', '/clientes', { id }, token)
      return json
    },
  }
}

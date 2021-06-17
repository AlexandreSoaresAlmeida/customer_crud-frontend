import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import storage from 'redux-persist/lib/storage'
import { AppContent, AppFooter, AppHeader } from '../components/index'
import useApi from '../services/api'

const DefaultLayout = () => {
  const api = useApi()
  const history = useHistory()
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const checkLogin = async () => {
      let token = api.getToken()
      if (token !== '') {
        setloading(false)
        history.push('/Principal')
      } else {
        setloading(false)
        history.push('/Login')
      }
    }
    checkLogin()
  }, [])

  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {!loading && (
          <>
            <AppHeader />
            <div className="body flex-grow-1 px-3">
              <AppContent />
            </div>
            <AppFooter />
          </>
        )}
      </div>
    </div>
  )
}

export default DefaultLayout

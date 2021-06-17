import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  const versao = `${process.env.REACT_APP_VERSAO}`
  return (
    <CFooter style={{ backgroundColor: '#FFFFFF' }}>
      <div>
        <span
          className="ms-1"
          style={{
            fontSize: '80%',
          }}
        >
          &copy; 2021 AppTek Solutions - Alexandre S Almeida
        </span>
      </div>
      <div
        className="ms-auto"
        style={{
          fontSize: '80%',
          marginTop: 7,
        }}
      >
        <a href="https://apptek.com.br" target="_blank" rel="noreferrer">
          <img src="apptek\minlogoapptek2.png" alt="" />
        </a>
        <span className="me-1">&nbsp;Customer CRUD - versão:&nbsp;{versao}</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

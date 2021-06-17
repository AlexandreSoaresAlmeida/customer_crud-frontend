import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CForm,
  CFormControl,
  CInputGroup,
  CInputGroupText,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCardHeader,
  CFormFeedback,
  CFooter,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import useApi from '../../../services/api'

const Login = (prop) => {
  const api = useApi()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const msgErro = localStorage.getItem('msgErro') !== ''
  const [errologin, setErrologin] = useState('')

  const versao = `${process.env.REACT_APP_VERSAO}`
  const modalInicial = `${process.env.REACT_APP_MODALINICIAL}` === 'true' ? true : false
  const esqueciSenha = `${process.env.REACT_APP_ESQUECISENHA}` === 'true' ? true : false
  const formatoLogin = `${process.env.REACT_APP_FORMATOLOGIN}`
  const [modalVisto, setModalVisto] = React.useState(localStorage.getItem('modalVisto'))

  const [visible, setVisible] = React.useState(modalInicial)

  const [validated, setValidated] = React.useState(false)

  const handleHiddenModal = () => {
    setVisible(false)
    localStorage.setItem('modalVisto', true)
  }

  const handleLoginButton = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    const result = await api.login(usuario, senha)
    if (result.status === 200) {
      prop.setToken(result.token)
      prop.setUsername(result.username)
      prop.setRoles(result.roles)
      prop.setTimestamp(result.timestamp)
      history.push('/Principal')
    } else {
      setErrologin(result.message)
    }

    setValidated(true)
  }

  /*
  useEffect(() => {

  }, [])
  */

  return (
    <div
      className="bg-light"
      style={{
        width: '100%',
        paddingTop: 100,
        minWidth: 435,
      }}
    >
      {errologin !== '' && (
        <CAlert
          color="danger"
          style={{
            width: '100%',
            marginTop: 0,
            minWidth: 435,
          }}
          dismissible
          onDismissed={() => {
            localStorage.setItem('msgErro', '')
          }}
        >
          <strong>Falha:&nbsp;</strong> {errologin}.
        </CAlert>
      )}

      <CForm
        className="bg-light needs-validation"
        noValidate
        validated={validated}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={handleLoginButton}
      >
        <CCol md="4">
          <CCardGroup>
            <CCard>
              <CCardHeader style={{ paddingTop: 15, backgroundColor: '#394fbd' }}>
                <CRow>
                  <CCol
                    fluid="true"
                    md="12"
                    style={{
                      display: 'flex',
                      overflow: 'hidden',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ color: '#FFF', fontWeight: 'bold' }}>Customer CRUD</span>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody className="p-4">
                <h2>Login</h2>

                <div
                  style={{
                    width: '100%',
                    fontSize: 13,
                    textAlign: 'right',
                    marginBottom: 20,
                  }}
                >
                  &nbsp;&nbsp;versão: {versao}
                </div>

                <p className="text-medium-emphasis" style={{ fontSize: '0.9em' }}>
                  Faça login em sua conta
                </p>

                {formatoLogin.indexOf('usuario') > -1 && (
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon name="cil-short-text" />
                    </CInputGroupText>
                    <CFormControl
                      type="text"
                      id="validationusuario"
                      placeholder="Usuário"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      required
                    />
                    <CFormFeedback invalid>Informe o Usuário</CFormFeedback>
                  </CInputGroup>
                )}

                {formatoLogin.indexOf('senha') > -1 && (
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormControl
                      type="password"
                      id="validationpassword"
                      placeholder="Senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                    <CFormFeedback invalid>Informe sua senha</CFormFeedback>
                  </CInputGroup>
                )}
              </CCardBody>

              <CFooter
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#394fbd',
                }}
              >
                <CButton
                  color="primary"
                  className="px-4"
                  style={{ backgroundColor: '#203ABD' }}
                  onClick={handleLoginButton}
                >
                  Login
                </CButton>
                {esqueciSenha && (
                  <CButton
                    color="link"
                    className="px-0"
                    style={{
                      flexWrap: 'nowrap',
                      fontSize: '75%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    Esqueci a senha?
                  </CButton>
                )}
              </CFooter>
            </CCard>
          </CCardGroup>
        </CCol>
      </CForm>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {modalInicial && !modalVisto && (
        <CModal
          size="lg"
          alignment="center"
          scrollable
          visible={visible}
          onDismiss={() => handleHiddenModal()}
        >
          <CModalHeader onDismiss={() => setVisible(false)} style={{ backgroundColor: '#327fa8' }}>
            <CModalTitle style={{ color: '#FFF' }}>Objetivo</CModalTitle>
          </CModalHeader>
          <CModalBody style={{ backgroundColor: '#FFF' }}>
            <h4>Criar um CRUD de cliente</h4>
            <br></br>
            <p style={{ fontWeight: 'bold' }}>Apresentar solução de software em tecnologias:</p>

            <ul style={{ textAlign: 'justify' }}>
              <li>JAVA 8</li>
              <li>Spring / Springboot</li>
              <li>Hibernate / JPA</li>
              <li>Maven</li>
              <li>Javascript ES6</li>
              <li>ReactJs</li>
              <br></br>
              <br></br>
              <div
                style={{
                  width: '100%',
                  textAlign: 'right',
                  paddingRight: 100,
                }}
              >
                Atenciosamente,
              </div>
              <div
                style={{
                  width: '100%',
                  textAlign: 'right',
                  paddingRight: 50,
                  paddingTop: 25,
                  fontFamily: 'fantasy',
                }}
              >
                Alexandre S. Almeida
              </div>
            </ul>
          </CModalBody>
          <CModalFooter style={{ backgroundColor: '#327fa8' }}>
            <CButton
              style={{ minWidth: 120, backgroundColor: '#4B4274' }}
              onClick={() => handleHiddenModal()}
            >
              OK
            </CButton>
          </CModalFooter>
        </CModal>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.dadosUsuario.token,
    username: state.dadosUsuario.username,
    roles: state.dadosUsuario.roles,
    timestamp: state.dadosUsuario.timestamp,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({ type: 'setToken', payload: { token } }),
    setUsername: (username) => dispatch({ type: 'setUsername', payload: { username } }),
    setRoles: (roles) => dispatch({ type: 'setRoles', payload: { roles } }),
    setTimestamp: (timestamp) => dispatch({ type: 'setTimestamp', payload: { timestamp } }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

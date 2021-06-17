import React, { useState, useEffect } from 'react'
import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CCardHeader,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CAlert,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionButton,
  CAccordionCollapse,
  CAccordionBody,
  CFormFeedback,
  CFooter,
  CCardGroup,
  CFormSelect,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormControl,
  CFormLabel,
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import useApi from '../../services/api'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Principal = (prop) => {
  const api = useApi()
  const history = useHistory()

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [activeKey, setActiveKey] = useState(0)
  const [validated, setValidated] = useState(false)

  const [action, setAction] = useState('list')

  const [user, setUser] = useState('')
  const [cpf, setCpf] = useState('')
  const [role, setRole] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    setLoading(true)
    const result = await api.getListCustomes()
    setLoading(false)
    if (result !== undefined && result.length >= 0) {
      setList(result)
    }
  }

  const handleDeleteButton = async (index) => {
    if (window.confirm('Tem certeza que deseja excluir')) {
      const result = await api.removeCustomer(list[index]['id'])
      if (result && result.id !== undefined) {
        setMsg('Cliente com id: ' + result.id + ' foi excluido com sucesso!')
        getList()
      } else {
        setMsg('')
        alert('erro exclusao')
      }
    }
  }

  const handleSaveData = async (index) => {
    alert('handleSaveData')
  }

  return (
    <>
      {msg !== '' && (
        <CAlert
          color="success"
          style={{
            width: '100%',
            marginTop: 0,
            minWidth: 435,
          }}
          dismissible
        >
          <strong>Ação:&nbsp;</strong> {msg}.
        </CAlert>
      )}
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CCol
                xs="12"
                style={{ paddingTop: 5, display: 'flex', justifyContent: 'space-between' }}
              >
                <h2>Clientes</h2>
                <CButton color="primary">
                  <CIcon name="cil-check" />
                  &nbsp;Novo Cliente
                </CButton>
              </CCol>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead color="info">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Usuário</CTableHeaderCell>
                    <CTableHeaderCell scope="col">CPF</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {list.map((item, index) => (
                    <CTableRow color="light" key={index}>
                      <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                      <CTableDataCell>{item.usuario}</CTableDataCell>
                      <CTableDataCell>{item.cpf}</CTableDataCell>
                      <CTableDataCell>{item.nome}</CTableDataCell>
                      <CTableDataCell>
                        <CButton
                          style={{
                            backgroundColor: '#FDC02E',
                            border: '#C59522',
                            borderRadius: 5,
                            color: '#000',
                          }}
                        >
                          Editar
                        </CButton>
                        &nbsp;
                        <CButton
                          style={{
                            backgroundColor: '#D93749',
                            border: '#A81425',
                            borderRadius: 5,
                            color: '#FFF',
                          }}
                          onClick={() => handleDeleteButton(index)}
                        >
                          Excluir
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {action === 'add' ||
        (action === 'del' && (
          <>
            <br></br>
            <CCard>
              <CCardHeader
                style={{ color: '#321FDB', fontWeight: 'bold', paddingTop: 20, paddingBottom: 17 }}
              >
                <CIcon name="cil-note-add" />
                &nbsp; Informe os dados abaixo para inclusão de novo cliente
              </CCardHeader>
            </CCard>

            <CAccordion>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    collapsed={activeKey !== 1}
                    onClick={() => (activeKey === 1 ? setActiveKey(0) : setActiveKey(1))}
                  >
                    Dados Pessoais
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse visible={activeKey === 1}>
                  <CAccordionBody>
                    <CForm
                      className="row g-3"
                      noValidate
                      validated={validated}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onSubmit={handleSaveData}
                    >
                      <CCol md="4">
                        <CFormLabel htmlFor="inputUsuario">Usuário</CFormLabel>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon name="cil-short-text" />
                          </CInputGroupText>
                          <CFormControl
                            type="text"
                            id="inputUsuario"
                            placeholder="Informe o usuário"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                          />
                          <CFormFeedback invalid>Informe o Usuário</CFormFeedback>
                        </CInputGroup>
                      </CCol>
                      <CCol md="4">
                        <CFormLabel htmlFor="inputCpf">CPF</CFormLabel>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                          <CFormControl
                            type="text"
                            id="inputCpf"
                            placeholder="Informe o CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                          />
                          <CFormFeedback invalid>Informe o CPF</CFormFeedback>
                        </CInputGroup>
                      </CCol>
                      <CCol md="4">
                        <CFormLabel htmlFor="inputRole">Perfil</CFormLabel>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                          <CFormSelect id="inputRole">
                            <option>ADMIN</option>
                            <option>COMUM</option>
                          </CFormSelect>
                        </CInputGroup>
                      </CCol>
                      <CCol xs="12">
                        <CFormLabel htmlFor="inputNome">Nome</CFormLabel>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                          <CFormControl id="inputNome" placeholder="Pedro Paulo Matheus Jr..." />
                        </CInputGroup>
                      </CCol>
                    </CForm>
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    collapsed={activeKey !== 2}
                    onClick={() => (activeKey === 2 ? setActiveKey(0) : setActiveKey(2))}
                  >
                    Endereços
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse visible={activeKey === 2}>
                  <CAccordionBody>endereços aqui</CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    collapsed={activeKey !== 3}
                    onClick={() => (activeKey === 3 ? setActiveKey(0) : setActiveKey(3))}
                  >
                    Telefones
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse visible={activeKey === 3}>
                  <CAccordionBody>telefones aqui</CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    collapsed={activeKey !== 3}
                    onClick={() => (activeKey === 3 ? setActiveKey(0) : setActiveKey(3))}
                  >
                    Emails
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse visible={activeKey === 3}>
                  <CAccordionBody>
                    <strong>This is the third item`s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It´s also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
            </CAccordion>

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
                onClick={handleSaveData}
              >
                Gravar Dados
              </CButton>
            </CFooter>
            <br></br>
          </>
        ))}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Principal)

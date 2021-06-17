import React, { useState, useEffect } from 'react'
import {
  CContainer,
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import useApi from '../../services/api'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Principal = (prop) => {
  const api = useApi()

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const history = useHistory()

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
          <h2>Clientes</h2>
          <CCard>
            <CCardHeader>
              <CButton color="primary">
                <CIcon name="cil-check" />
                &nbsp;Novo Cliente
              </CButton>
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

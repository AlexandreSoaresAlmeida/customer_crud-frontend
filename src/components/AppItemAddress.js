import React, { useState } from 'react'

import {
  CCol,
  CFormFeedback,
  CInputGroup,
  CInputGroupText,
  CFormControl,
  CFormLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import useApi from '../services/api'

const NewTaskInput = ({ onSubmit }) => {
  const api = useApi()
  const [loading, setLoading] = useState(false)

  const [newItem, setNewItem] = useState('')

  function setNewTask({ target }) {
    setNewItem(target.value)
  }

  function submit(e) {
    e.preventDefault()
    onSubmit(newItem)
  }

  // endereco
  const [viacep, setViacep] = useState([])

  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [bairro, setBairro] = useState('')
  const [complemento, setComplemento] = useState('')
  const [ibge, setIbge] = useState('')
  const [gia, setGia] = useState('')
  const [ddd, setDdd] = useState('')
  const [siafi, setSiafi] = useState('')

  const getAddressByCep = async () => {
    if (cep) {
      setLoading(true)
      const result = await api.getEmailByCep(cep)
      setLoading(false)
      if (result !== undefined) {
        setViacep(result)

        setLogradouro(result.logradouro)
        setCidade(result.localidade)
        setUf(result.uf)
        setBairro(result.bairro)
        setIbge(result.ibge)
        setGia(result.gia)
        setDdd(result.ddd)
        setSiafi(result.siafi)
      }
    }
  }

  return (
    /*
    <div>
      <form onSubmit={submit}>
        <input className="Todo-input" placeholder="Digite uma nova tarefa" onChange={setNewTask} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
    */
    <>
      <CCol md="4">
        <CFormLabel htmlFor="inputCep">CEP</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <CIcon name="cil-short-text" />
          </CInputGroupText>
          <CFormControl
            type="text"
            id="inputCep"
            placeholder="Informe o cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
          <CInputGroupText style={{ backgroundColor: '#30A54A', cursor: 'pointer' }}>
            <CIcon
              name="cil-find-in-page"
              style={{ color: '#FFF', backgroundColor: '#30A54A' }}
              onClick={() => getAddressByCep()}
            />
          </CInputGroupText>

          <CFormFeedback invalid>Informe o CEP</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md="4">
        <CFormLabel htmlFor="inputCidade">Cidade</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <CIcon name="cil-short-text" />
          </CInputGroupText>
          <CFormControl
            type="text"
            id="inputCidade"
            placeholder="Informe a cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
          <CFormFeedback invalid>Informe a Cidade</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md="4">
        <CFormLabel htmlFor="inputCidade">UF</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <CIcon name="cil-short-text" />
          </CInputGroupText>
          <CFormControl
            type="text"
            id="inputUf"
            placeholder="Informe a UF"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            required
          />
          <CFormFeedback invalid>Informe a UF</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol xs="12">
        <CFormLabel htmlFor="inputLogradouro">Logradouro</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
          <CFormControl
            id="inputLogradouro"
            placeholder="Rua Afonso de..."
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md="6">
        <CFormLabel htmlFor="inputComplemento">Complemento</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
          <CFormControl
            id="inputComplemento"
            placeholder="informe o complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </CInputGroup>
      </CCol>
      <CCol md="6">
        <CFormLabel htmlFor="inputBairro">Bairro</CFormLabel>
        <CInputGroup className="mb-3">
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
          <CFormControl
            id="inputBairro"
            placeholder="informe o bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
          />
        </CInputGroup>
      </CCol>
    </>
  )
}

export default NewTaskInput

import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormControl,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Page404 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! Você está perdido.</h4>
              <p className="text-medium-emphasis float-start">
                A página que você está procurando não foi encontrada.
              </p>
            </div>
            <CInputGroup className="input-prepend">
              <CInputGroupText>
                <CIcon name="cil-magnifying-glass" />
              </CInputGroupText>
              <CFormControl size="16" type="text" placeholder="What are you looking for?" />
              <CButton color="info">Procurar</CButton>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404

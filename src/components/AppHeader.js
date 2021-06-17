import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  //  CHeaderToggler,
  CNavLink,
  CNavItem,
  CHeaderText,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import { AppBreadcrumb } from './index'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  const logoApptek = `${process.env.REACT_APP_LOGOPROGNUM}`

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderText style={{ color: '#000', fontWeight: 'bold' }}>
          <CIcon name="cil-browser" className="me-2" />
          Cadastro (CRUD)
        </CHeaderText>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  )
}

export default AppHeader

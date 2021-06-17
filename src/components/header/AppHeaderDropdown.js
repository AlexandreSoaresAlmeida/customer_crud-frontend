import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom'

const AppHeaderDropdown = (prop) => {
  const history = useHistory()
  const [user] = React.useState(localStorage.getItem('user'))

  const logoff = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('user', '')
    history.push('/Login')
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src="avatars/avatar.png" size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Minha Conta</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon name="cil-address-book" className="me-2" />
          Usuário: {prop.username}
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon name="cil-group" className="me-2" />
          Grupos: {prop.roles}
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#" style={{ color: '#00FF' }}>
          <CIcon name="cil-pen-alt" className="me-2" style={{ color: '#00FF' }} />
          CRUD Cliente
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="" onClick={() => logoff()}>
          <CIcon name="cil-account-logout" className="me-2" />
          Logoff
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
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
export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderDropdown)

import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import {
  darkTheme,
  lightTheme,
  brightTheme,
  elegantTheme,
  defaultTheme,
} from './themes'
import { applyTheme } from './redux/themeActions'

const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  border: ${(props) =>
    props.theme.name === props.name ? '2px solid #fff' : '0px'};
  font-family: 'Castoro', serif;
  border-radius: 5px;
  box-sizing: 'content-box';
  font-size: 1rem;
  min-width: ${window.innerWidth > 500 ? '100px' : '80px'};
  max-width: ${window.innerWidth > 500 ? '240px' : '80px'};
  padding: 12px;
  margin: 12px;
  outline: none !important;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
`

const ThemeSelector = () => {
  const dispatch = useDispatch()

  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme))
  }

  return (
    <div>
      <StyledButton
        name="defaultTheme"
        type="button"
        onClick={() => changeTheme(defaultTheme)}
      >
        Default
      </StyledButton>
      <StyledButton
        name="lightTheme"
        type="button"
        onClick={() => changeTheme(lightTheme)}
      >
        Light
      </StyledButton>
      <StyledButton
        name="darkTheme"
        type="button"
        onClick={() => changeTheme(darkTheme)}
      >
        Dark
      </StyledButton>
      <StyledButton
        name="elegantTheme"
        type="button"
        onClick={() => changeTheme(elegantTheme)}
      >
        Elegant
      </StyledButton>
      <StyledButton
        name="brightTheme"
        type="button"
        onClick={() => changeTheme(brightTheme)}
      >
        Bright
      </StyledButton>
    </div>
  )
}

export default ThemeSelector

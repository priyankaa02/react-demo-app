import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import ThemeSelector from './ThemeSelector'
import './App.css'

const App = () => {
  const theme = useSelector((state: any) => state.theme)
  const [pageCreated, setPageCreated] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [user, setUser] = useState({ date: '', message: '', theme: '' })

  const GlobalStyle = createGlobalStyle`
     body {
       background-color: ${(props: any) => props.theme.backgroundColor};
    }
  `

  const SytledH1 = styled.h2`
    color: ${(props: any) => props.theme.primary};
    margin: 0 auto;
  `
  const SytledH4 = styled.h4`
    color: ${(props: any) => props.theme.primary};
    width: 80%;
    margin-left: 10%;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 1px 0px ${(props: any) => props.theme.primary};
  `

  const SytledSpan = styled.span`
    color: ${(props: any) => props.theme.primary};
    font-size: 1rem;
    text-align: center;
    margin-top: 5px;
    display: block;
  `

  const SytledP = styled.p`
    color: ${(props: any) => props.theme.primary};
    font-size: 1rem;
    text-align: center;
    margin-top: 5px;
    display: block;
    padding-left: 20px;
    padding-right: 20px;
    overflow: scroll;
  `

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setSubmitted(true)
    if (user.date && user.message) {
      setPageCreated(true)
    }
  }

  const onBack = () => {
    setPageCreated(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="limiter">
        <div
          className="container-launch"
          style={{
            ['--color-1' as any]: `${theme.backgroundColor}`,
            ['--color-2' as any]: `${theme.primary}`,
            ['--color-3' as any]: `${theme.textColor}`,
          }}
        >
          <div className="launch-more" />
          <GlobalStyle />
          {!pageCreated ? (
            <div className="wrap-launch">
              <SytledH1>Create your page</SytledH1>
              <form
                name="form"
                className="form"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div
                  className={
                    'form-group' + (submitted && !user.date ? ' has-error' : '')
                  }
                >
                  <input
                    type="date"
                    className="form-control input"
                    name="date"
                    value={user.date}
                    onChange={(e) => handleChange(e)}
                  />
                  {submitted && !user.date && (
                    <SytledSpan className="help-block">
                      Date is required
                    </SytledSpan>
                  )}
                </div>
                <div
                  className={
                    'form-group' +
                    (submitted && !user.message ? ' has-error' : '')
                  }
                >
                  <textarea
                    rows={5}
                    spellCheck="true"
                    className="form-control input"
                    id="message"
                    name="message"
                    placeholder="Type your message here"
                    value={user.message}
                    onChange={(e) => handleChange(e)}
                  />
                  {submitted && !user.message && (
                    <SytledSpan className="help-block">
                      Message is required
                    </SytledSpan>
                  )}
                </div>
                <ThemeSelector />
                <div className="form-group">
                  <button className="launch-btn">Launch</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="wrap-launch">
              <SytledH4>
                Congrats!! You've created your page successfully
              </SytledH4>
              <div className="card">
                <div className="card-body">
                  <SytledSpan>{user.date}</SytledSpan>
                  <SytledP>{user.message}</SytledP>
                </div>
              </div>
              <button className="back-btn" onClick={() => onBack()}>
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

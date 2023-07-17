import React, { Component, Fragment } from 'react'
import { Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

export class LoginPage extends Component {
  render() {
    return (
        <Fragment>
            <Helmet>
                <title>
                    User Login
                </title>
            </Helmet>
            <div>LoginPage</div>
            <Form>
                <input type = "text"></input>
            </Form>
        </Fragment>

    )
  }
}

export default LoginPage
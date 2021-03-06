
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

import ForgotPasswordForm from '../forms/ForgotPasswordForm'
import { resetPasswordRequest } from '../../redux/actions/users'

class ForgotPasswordPage extends React.Component {
  state = {
    success: false,
  }

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }))

  render() {
    const { success } = this.state
    return success ? (
      <Message>Email has been sent.</Message>
    ) : (
      <div>
        <h1>Reset Password</h1>
        <ForgotPasswordForm submit={this.submit} />
      </div>
    )
  }
}
ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
}

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage)

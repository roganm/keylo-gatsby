import React, { Component } from "react"

class ContactForm extends Component {
  state = {
    name: {
      value: "",
      message: "Please enter your name.",
      error: false,
    },
    email: {
      value: "",
      message: "Please enter your email address.",
      error: false,
    },
    phone: {
      value: "",
      message: "Please enter your phone number.",
      error: false,
    },
    message: {
      value: "",
      message: "Please enter your message.",
      error: false,
    },
    submitted: false,
    error: false,
    fetching: false
  }

  onChange = ({ target: { name, value } }) => {
    this.setState(prevState => {
      return {
        [name]: {
          value: value,
          error: false,
          message: prevState[name].message,
        },
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { name, email, phone, message } = this.state
    const errors = []

    if (!name.value) {
      errors.push({ name: "name", ...name })
    }
    if (!email.value) {
      errors.push({ name: "email", ...email })
    }
    if (!phone.value) {
      errors.push({ name: "phone", ...phone })
    }

    if (errors.length > 0) {
      errors.map(error => {
        return this.setState({
          [error.name]: {
            ...error,
            error: true,
          },
        })
      })

      return

    } else {

      let firstName = name.value
      let lastName = name.value
      const { city, provinceCode } = this.props

      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
        lastName = name.split(' ').slice(-1).join(' ');
      }

      const data = JSON.stringify({
        fname: firstName,
        lname: lastName,
        city: `${city}, ${provinceCode}`,
        phone: phone.value,
        email: email.value,
        message: message.value
      })

      let URL;

      if (window.location.hostname === 'localhost') {
        URL = 'http://localhost:8081/api';
      } else {
        URL = '/api';
      }

      this.setState({ 
        fetching: true,
        submitted: false,
        error: false
      })

      fetch(`${URL}/formsubmit`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: data
      })
        .then((response) => response.text())
        .catch((err) => console.log(err));

      fetch(`${URL}/clientform`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: data
      })
        .then((response) => {
          response.text()
          this.setState({
            error: false
          })
        })
        .catch((err) => {
          console.log(err)
          this.setState({
            error: true
          })
        })
        .finally(() => {
          this.setState({
            submitted: true,
            fetching: false
          }) 
        })

      
    }
  }

  render() {
    const { name, email, phone, message, submitted, error, fetching } = this.state
    const { city, provinceCode, areaPhoneNumber } = this.props

    return (
      <div className="row">
        <div className="col-lg-12">
          <form
            id="contactForm"
            name="sentMessage"
            noValidate="novalidate"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name.value}
                    onChange={this.onChange}
                    required="required"
                  />
                  <p className="help-block text-danger">
                    {name.error && name.message}
                  </p>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email.value}
                    onChange={this.onChange}
                    required="required"
                  />
                  <p className="help-block text-danger">
                    {email.error && email.message}
                  </p>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone"
                    name="phone"
                    value={phone.value}
                    onChange={this.onChange}
                    required="required"
                  />
                  <p className="help-block text-danger">
                    {phone.error && phone.message}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Optional Question"
                    name="message"
                    value={message.value}
                    onChange={this.onChange}
                  />
                  <p className="help-block text-danger">
                    {message.error && message.message}
                  </p>
                </div>
              </div>
              <div className="clearfix" />
              {(submitted && !error) ? 
              <div className="notify-success alert alert-success fade show" role="alert">
                <h4 className="alert-heading">Thank You!</h4>
                <p>We have received your contact information and will be in touch shortly.</p>
                <hr />
                <p className="mb-0">Feel free to <a href={`/${provinceCode}/${city}/realtors`}>browse REALTORS®</a> in the meantime.</p>
              </div> : null }
              {(submitted && error) ? 
              <div className="notify-success alert alert-danger fade show" role="alert">
                <h4 className="alert-heading">Whoops!</h4>
                <p>Unfortunately our form seems to be experiencing a problem.</p>
                <hr />
                <p className="mb-0">Feel free to try again, give us a call at <a href={"tel:" + areaPhoneNumber}>{areaPhoneNumber}</a>, or shoot us an email at <a href="mailto:contact@keylo.ca">Contact@Keylo.ca</a>.</p>
              </div> : null }
              <div className="col-lg-12 text-center">
                <button
                  id="sendMessageButton"
                  className="c-button btn btn-success"
                  type="submit"
                  onClick={this.onSubmit}
                  disabled={fetching}
                >
                  {(!fetching) ? "Send Message" : "Message Sent"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm

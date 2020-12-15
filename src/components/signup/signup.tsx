import * as React from "react";
import * as ReactDom from "react-dom";
import "./style.css";

interface IProps {}

interface IState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  firstNameError?: string;
  lastNameError?: string;
  emailError?: string;
  passwordError?: string;
}

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: "",
};

class SignupForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = initState;

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    let email = this.state.email;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let password = this.state.lastName;
    let isValid = true;

    var regName = /^[a-z]+$/i;
    if (!regName.test(firstName)) {
      this.setState({ firstNameError: "Invalide first name" });
      isValid = false;
    }
    if (!regName.test(lastName)) {
      this.setState({ lastNameError: "Invalide last name" });
      isValid = false;
    }
    if (password.length < 6) {
      this.setState({
        passwordError: "Password should have at least 6 characters",
      });
      isValid = false;
    }
    if (!validateEmail(email)) {
      this.setState({ emailError: "Enter a valide email address" });
      isValid = false;
    }
    if (isValid) {
      this.setState(initState);
      console.log(this.state);
    }
  }

  onChangeHandler(event) {
    let name = new String(event.target.name).valueOf();
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <p>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </p>
        </div>
        <form method="POST" onSubmit={this.onSubmitHandler}>
          <div id="username">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              required
              onChange={this.onChangeHandler}
            />
            {/* <input type="text" placeholder="name"> */}
            <i className="fas fa-exclamation-circle"></i>
            <small className="error">{this.state.firstNameError}</small>
          </div>
          <div id="lastname">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              value={this.state.lastName}
              onChange={this.onChangeHandler}
            />
            {/* <input type="text" placeholder="name"> */}
            <i className="fas fa-exclamation-circle"></i>
            <small className="error">{this.state.lastNameError}</small>
          </div>
          <div id="email">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={this.state.email}
              onChange={this.onChangeHandler}
            />
            <i className="fas fa-exclamation-circle"></i>
            <small className="error">{this.state.emailError}</small>
          </div>
          <div id="password1">
            <input
              type="password"
              placeholder="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
            <i className="fas fa-exclamation-circle"></i>
            <small className="error">{this.state.passwordError}</small>
          </div>
          <div>
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
          </div>
          <div>
            <small id="terms-and-cond">
              By clicking the button, you are agreeing to our
              <a href="#">
                <strong> terms and condition</strong>
              </a>
            </small>
          </div>
        </form>
      </div>
    );
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default SignupForm;

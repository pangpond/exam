import { Component } from "react";
import {
  Select,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

class IdentityForm extends Component {
  static defaultProps = {
    messages: []
  };

  state = {
    school: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี",
    citizen: "",
    submittedSchool: "โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี",
    submittedCitizen: "",
    loading: false,
    error: false
  };

  componentDidMount() {
    // this.socket = io()
    // this.socket.on('message', this.handleMessage)
  }

  componentWillUnmount() {
    // this.socket.off('message', this.handleMessage)
    // this.socket.close()
  }

  handleChange = (e, { name, value }) => {
    if (!isNaN(value) && value.length <= 13) {
      this.setState({ [name]: value });
    }

    if (name === "citizen" && value.length === 13) {
      this.setState({ error: false });
    }
  };

  handleSubmit = () => {
    const { school, citizen } = this.state;

    if (!isNaN(citizen) && citizen.length === 13) {
      this.setState({
        submittedSchool: school,
        submittedCitizen: citizen,
        loading: true
      });
      console.log(this.state);
      this.checkCitizen();
    } else {
      this.setState({ error: true });
    }
  };

  checkCitizen = async variables => {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json().then(Router.push("/register"));
    console.log(json);
    this.setState({ loading: false });
  };

  // handleChange = event => {
  //   this.setState({ field: event.target.value })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()

  //   // add it to state and clean current input value
  //   this.setState(state => ({
  //     field: '',
  //   }))
  // }
  // {/*
  //         <Form.Field name='school' value={school} onChange={this.handleChange} required>
  //           <label>โรงเรียน</label>
  //           <SelectSchool />
  //         </Form.Field>
  //       */}

  render() {
    const {
      school,
      citizen,
      submittedSchool,
      submittedCitizen,
      loading,
      error
    } = this.state;

    return (
      <div id="login-hidden">
        <style jsx global>
          {`
            body {
              background: #f1f1f1;
            }
            .bgMain {
              background-color: #ee4616 !important;
            }
          `}
        </style>
        <style jsx>
          {`
            body {
              content: "";
              position: fixed;
              top: 0;
              left: 0;
              display: block;
              background: rgba(255, 255, 255, 0.8);
              width: 100%;
              height: 100%;
            }

            .form {
              position: relative;
              z-index: 1;
              background: #ffffff;
              max-width: 400px;
              margin: 0 auto 100px;
              padding: 30px;
              border-top-left-radius: 3px;
              border-top-right-radius: 3px;
              border-bottom-left-radius: 3px;
              border-bottom-right-radius: 3px;
              text-align: center;
            }
            .form .thumbnail {
              background: #ee4616;
              width: 150px;
              height: 150px;
              margin: 0 auto 30px;
              padding: 50px 30px;
              border-top-left-radius: 100%;
              border-top-right-radius: 100%;
              border-bottom-left-radius: 100%;
              border-bottom-right-radius: 100%;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            .form .thumbnail img {
              display: block;
              width: 100%;
            }
            .form input {
              outline: 0;
              background: #f2f2f2;
              width: 100%;
              border: 0;
              margin: 0 0 15px;
              padding: 15px;
              border-top-left-radius: 3px;
              border-top-right-radius: 3px;
              border-bottom-left-radius: 3px;
              border-bottom-right-radius: 3px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              font-size: 20px;
            }
            .form button {
              outline: 0;
              background: #ee4616;
              width: 100%;
              border: 0;
              padding: 15px;
              border-top-left-radius: 3px;
              border-top-right-radius: 3px;
              border-bottom-left-radius: 3px;
              border-bottom-right-radius: 3px;
              color: #ffffff;
              font-size: 20px;
              -webkit-transition: all 0.3 ease;
              transition: all 0.3 ease;
              cursor: pointer;
              font-weight: bold;
            }
            .form button:hover {
              color: #333333;
            }
            .form .message {
              margin: 15px 0 0;
              color: #b3b3b3;
              font-size: 12px;
            }
            .form .message a {
              color: #ee4616;
              text-decoration: none;
            }
            .form .register-form {
              display: none;
            }
            .container {
              position: relative;
              z-index: 1;
              max-width: 400px;
              margin: 0 auto;
            }
            .container:before,
            .container:after {
              content: "";
              display: block;
              clear: both;
            }
            .container .info {
              margin: 50px auto;
              text-align: center;
            }
            .container .info h1 {
              margin: 0 0 15px;
              padding: 0;
              font-size: 36px;
              font-weight: 300;
              color: #1a1a1a;
            }
            .container .info span {
              color: #4d4d4d;
              font-size: 12px;
            }
            .container .info span a {
              color: #000000;
              text-decoration: none;
            }
            .container .info span .fa {
              color: #ee4616;
            }
            body {
              background: #ccc;
              font-family: "Roboto", sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            body:before {
              content: "";
              position: fixed;
              top: 0;
              left: 0;
              display: block;
              background: rgba(255, 255, 255, 0.8);
              width: 100%;
              height: 100%;
            }
            .help-block {
              color: #737373;
              float: right;
            }
            .select2-container--krajee
              .select2-selection--single
              .select2-selection__placeholder {
              font-size: 20px;
              float: left;
            }

            .select2-container--krajee .select2-selection--single {
              height: 40px;
            }

            .select2-container--krajee
              .select2-selection--single
              .select2-selection__arrow {
              height: 38px;
            }
          `}
        </style>
        <div className="log-in-wrapper">
          <div className="container">
            <div className="info">
              <h1>KJST Pre-test 2018</h1>
              <h2>โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี</h2>
            </div>
          </div>
          <div className="form">
            <div className="thumbnail">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" />
            </div>
            <Form
              size="large"
              onSubmit={this.handleSubmit}
              loading={loading}
              error={error}
            >
              <Form.Input
                fluid
                placeholder="หมายเลขบัตรประชาชน 13 หลัก"
                icon="id card"
                size="big"
                iconPosition="left"
                name="citizen"
                value={citizen}
                onChange={this.handleChange}
                required
              />

              <Button
                color="orange"
                className="bgMain"
                fluid
                size="big"
                type="submit"
              >
                เริ่มสมัคร
              </Button>
              <Message
                error
                content="กรุณากรอกหมายเลขบัตรประชาชนให้ครบ 13 หลัก"
              />
            </Form>
          </div>
          <div className="container">
            <div className="info">
              <span>
                Made with <Icon color="red" name="heart" /> by{" "}
                <a href="http://www.nextschool.io"> NextSchool</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IdentityForm;

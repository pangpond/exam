import { Component } from 'react'
import { Select, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const countryOptions = [
  {
    key: 'af',
    value: 'af',
    flag: 'af',
    text: 'Afghanistan',
  },
]

const SelectSchool = () => <Select placeholder="Select your country" options={countryOptions} />

class Identity extends Component {
  static defaultProps = {
    messages: [],
  }

  state = {
    school: 'โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี',
    citizen: '',
    submittedSchool: 'โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี',
    submittedCitizen: '',
  }

  componentDidMount() {
    // this.socket = io()
    // this.socket.on('message', this.handleMessage)
  }

  componentWillUnmount() {
    // this.socket.off('message', this.handleMessage)
    // this.socket.close()
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedSchool: name, submittedCitizen: email })
  }

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
      school, citizen, submittedSchool, submittedCitizen,
    } = this.state

    return (
      <div className="login-form">
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' />
              {' '}Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit} loading={false}>
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder="หมายเลขบัตรประชาชน 13 หลัก"
                  icon='user'
                  iconPosition='left'
                  name="citizen"
                  value={citizen}
                  onChange={this.handleChange}
                />
                <Button color='teal' fluid size='large' type="submit">Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Identity

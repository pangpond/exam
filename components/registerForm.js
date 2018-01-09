import { Component } from 'react'
import {
  Container,
  Segment,
  Header,
  Icon,
  Step,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  Divider,
  Grid,
  Message,
} from 'semantic-ui-react'
import Router from 'next/router'
import Typeahead from './typeahead/'

let steps = [
  {
    key: 'register',
    active: true,
    title: 'กรอกข้อมูล',
    description: 'ชื่อ-สกุล, สถานศึกษา',
  },
  {
    key: 'finish',
    disabled: true,
    title: 'สำเร็จ',
  },
]

const titles = [
  { key: 'ด.ช.', text: 'เด็กชาย', value: 'ด.ช.' },
  { key: 'ด.ญ.', text: 'เด็กหญิง', value: 'ด.ญ.' },
  { key: 'นาย', text: 'นาย', value: 'นาย' },
  { key: 'นางสาว', text: 'นางสาว', value: 'นางสาว' },
]

const SchoolNameInput = (defaultAddress) => {
  const defaultAddressObject = {
    s: defaultAddress.prev_edu_name,
    a: defaultAddress.prev_edu_sub_district,
    d: defaultAddress.prev_edu_district,
    p: defaultAddress.prev_edu_province,
  }

  return (
    <Typeahead
      renderResult={data => (
        <div>
          โรงเรียน
          <b>{data.s}</b> จังหวัด
          <b>{data.p}</b> ตำบล
          <b>{data.d}</b> อำเภอ
          <b>{data.a}</b>
        </div>
      )}
      onAddressSelected={addressObject => this.handleChangeAddress(addressObject)}
      defaultAddress={defaultAddressObject}
    />
  )
}

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      steps,
      title: '',
      firstname: '',
      lastname: '',
      prev_edu_name: '',
      prev_edu_sub_district: '',
      prev_edu_district: '',
      prev_edu_province: '',
      prev_edu_source: '',
      loading: false,
      error: false,
      errorMsg: '',
      finish: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.setState({
      citizen: this.props.citizen,
      title: this.props.title,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      prev_edu_name: this.props.prev_edu_name,
      prev_edu_sub_district: this.props.prev_edu_sub_district,
      prev_edu_district: this.props.prev_edu_district,
      prev_edu_province: this.props.prev_edu_province,
      prev_edu_source: this.props.prev_edu_source,
    })
  }

  componentDidMount() {
    if (
      this.state.citizen === '' ||
      typeof this.state.citizen === 'undefined'
    ) {
      Router.push('/')
    }
  }

  handleChangeLevel = (e, { value }) =>
    this.setState({ prev_edu_source: value })

  handleChangeTitle = (e, { value }) => this.setState({ title: value })

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleChangeAddress = (address) => {
    const {
      s: prev_edu_name,
      a: prev_edu_sub_district,
      d: prev_edu_district,
      p: prev_edu_province
    } = address

    this.setState({
      prev_edu_name,
      prev_edu_sub_district,
      prev_edu_district,
      prev_edu_province,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      citizen,
      title,
      firstname,
      lastname,
      prev_edu_name,
      prev_edu_sub_district,
      prev_edu_district,
      prev_edu_province,
      prev_edu_source
    } = this.state

    if (
      citizen !== ''
    ) {
      const registrantInfo = {
        title,
        firstname,
        lastname,
        citizen_id: citizen,
        school_id: '159',
        target_id: '7',
        prev_edu_name,
        prev_edu_sub_district,
        prev_edu_district,
        prev_edu_province,
        prev_edu_source,
      }

      // console.log(registrantInfo)
      this.register(registrantInfo)
    } else {
      this.setState({ error: true, errorMsg: 'กรุณากรอกข้อมูลให้ครบถ้วน' })
    }
  };

  register = async (bodyProperty) => {
    const res = await fetch('https://rest.nextschool.io/v1/exam/registrant', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...bodyProperty,
      }),
      credentials: 'same-origin'
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('API Server Error')
        }
        if (response.status === 204) {
          return {
            status: 'options'
          }
        }
        return response.json()
      })
      .then((data) => {
        if (data.status === 'ok') {
          steps = [
            {
              key: 'register',
              title: 'กรอกข้อมูล',
              completed: true,
              description: 'ชื่อ-สกุล, สถานศึกษา',
            },
            {
              key: 'finish',
              active: true,
              completed: true,
              title: 'สำเร็จ',
              description: 'ได้รับข้อมูลเรียบร้อยแล้ว',
            },
          ]
          this.setState({ finish: true, steps })
        } else if (data.status === 'fail') {
          // console.log(bodyProperty)
          // console.log(data)
          this.setState({
            error: true,
            errorMsg: 'ผิดพลาด ไม่สามารถบันทึกข้อมูลสมัครได้',
          })
        }
      })

    this.setState({ loading: false })
  }

  render() {
    const {
      citizen,
      title,
      firstname,
      lastname,
      prev_edu_name,
      prev_edu_sub_district,
      prev_edu_district,
      prev_edu_province,
      prev_edu_source,
      loading,
      error,
      errorMsg,
      finish
    } = this.state

    const defaultAddress = {
      s: this.props.prev_edu_name,
      a: this.props.prev_edu_sub_district,
      d: this.props.prev_edu_district,
      p: this.props.prev_edu_province,
    }

    // const defaultAddress = {}

    return (
      <div
        style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
      >
        <div style={{ flex: 1 }}>
          <Segment>
            <style jsx global>
              {`
                .ui.text.container {
                  max-width: fit-content !important;
                }
                .bgMain {
                  background-color: #ee4616 !important;
                }
              `}
            </style>

            <Container text>
              <Step.Group ordered items={this.state.steps} />
            </Container>
          </Segment>
          <Segment>
            <Container text>
              <Grid columns="equal">
                <Grid.Column>
                  <Header as="h2">
                    <Header.Subheader>
                      หมายเลขบัตรประชาชนที่ใช้สมัคร
                    </Header.Subheader>
                    {citizen}
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="right" verticalAlign="middle">
                  <Header as="h2" icon>
                    KJST Pre-test 2018
                  </Header>
                </Grid.Column>
              </Grid>
              <Divider section />
              {finish ? (
                <Header as="h2" icon textAlign="center">
                  <Icon name="check" circular color="green" />
                  <Header as="h1">เรียบร้อย</Header>
                  <Header.Content color="grey">ขั้นตอนต่อไป</Header.Content>
                  <Header.Subheader>
                    ประกาศรายชื่อผู้มีสิทธิ์สอบ วันที่ 18 มกราคม 2561 <br />ที่บอร์ดประชาสัมพันธ์บริเวณมุขกลาง<br />
                    และทาง www.kjst.ac.th

                  </Header.Subheader>
                  <Divider hidden />
                  <Button onClick={() => Router.push('/')}>
                    สมัครเพิ่ม
                  </Button>
                </Header>
              ) : (
                <Form
                  onSubmit={this.handleSubmit}
                  loading={loading}
                  error={error}
                >
                  <Form.Group widths="equal">
                    <Form.Field
                      control={Select}
                      label="คำนำหน้าชื่อ"
                      options={titles}
                      placeholder="คำนำหน้าชื่อ"
                      value={title}
                      onChange={this.handleChangeTitle}
                      required
                    />
                    <Form.Input
                      label="ชื่อ"
                      placeholder="ชื่อ"
                      name="firstname"
                      value={firstname}
                      onChange={this.handleChange}
                      required
                    />
                    <Form.Input
                      label="นามสกุล"
                      placeholder="นามสกุล"
                      name="lastname"
                      value={lastname}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Typeahead
                    renderResult={(data) => {
                      const provinceLabel = data.p === 'กรุงเทพมหานคร' ? '' : 'จังหวัด'
                      const districtLabel = data.p === 'กรุงเทพมหานคร' ? '' : 'อำเภอ'
                      const subDistrictLabel = data.p === 'กรุงเทพมหานคร' ? 'แขวง' : 'ตำบล'
                      return (
                        <div>
                          โรงเรียน
                          <b>{data.s}</b> {provinceLabel}
                          <b>{data.p}</b> {subDistrictLabel}
                          <b>{data.d}</b> {districtLabel}
                          <b>{data.a}</b>
                        </div>
                      )
                    }}
                    onAddressSelected={addressObject => this.handleChangeAddress(addressObject)}
                    defaultAddress={defaultAddress}
                  />

                  <Form.Group inline>
                    <label htmlFor="prev_edu_province">กำลังศึกษาระดับชั้น</label>
                    <Form.Field
                      control={Radio}
                      id="prev_edu_source"
                      label="ป.4"
                      value="7"
                      checked={prev_edu_source === '7'}
                      onChange={this.handleChangeLevel}
                    />
                    <Form.Field
                      control={Radio}
                      label="ป.5"
                      value="8"
                      checked={prev_edu_source === '8'}
                      onChange={this.handleChangeLevel}
                    />
                    <Form.Field
                      control={Radio}
                      label="ป.6"
                      value="9"
                      checked={prev_edu_source === '9'}
                      onChange={this.handleChangeLevel}
                    />

                  </Form.Group>
                  <Form.Field
                    control={Checkbox}
                    label="ข้าพเจ้ายอมรับว่าข้อมูลข้างต้นเป็นจริงทุกประการ"
                    required
                  />
                  <Message error content={errorMsg} />
                  <Button positive floated="right" size="big" type="submit">
                    สมัคร
                  </Button>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                </Form>
              )}
            </Container>
          </Segment>
        </div>
        <Container text textAlign="center">
          <span>
            Made with <Icon color="red" name="heart" /> by{' '}
            <a href="http://www.nextschool.io"> NextSchool</a>
          </span>
        </Container>
      </div>
    )
  }
}

export default RegisterForm

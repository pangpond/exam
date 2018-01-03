import { Component } from "react";
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
  TextArea,
  Divider
} from "semantic-ui-react";

const steps = [
  {
    key: "register",
    title: "กรอกข้อมูล",
    description: "ชื่อ-สกุล, สถานศึกษา"
  },
  {
    key: "confirm",
    active: true,
    title: "ยืนยัน",
    description: "ความถูกต้อง"
  },
  {
    key: "finish",
    disabled: true,
    title: "เรียบร้อย"
  }
];

const title = [
  { key: "b", text: "เด็กชาย", value: "1" },
  { key: "g", text: "เด็กหญิง", value: "2" }
];

class RegisterForm extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div>
        <Segment>
          <style jsx global>
            {`
              .ui.text.container {
                max-width: fit-content !important;
              }
            `}
          </style>

          <Container text>
            <Step.Group ordered items={steps} />
          </Container>
        </Segment>
        <Segment>
          <Container text>
            <Divider section />
            <Header as="h2">
              <Header.Subheader>หมายเลขบัตรประชาชนที่สมัคร</Header.Subheader>
              3-1009-03592-99-5
            </Header>
            <Divider section />
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  control={Select}
                  label="คำนำหน้าชื่อ"
                  options={title}
                  placeholder="คำนำหน้าชื่อ"
                />
                <Form.Field control={Input} label="ชื่อ" placeholder="ชื่อ" />
                <Form.Field
                  control={Input}
                  label="นามสกุล"
                  placeholder="นามสกุล"
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  label="โรงเรียนที่กำลังศึกษา"
                  list="languages"
                  placeholder="โรงเรียนที่กำลังศึกษา"
                />
                <datalist id="languages">
                  <option value="English" />
                  <option value="Chinese" />
                  <option value="Dutch" />
                </datalist>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field control={Input} label="ตำบล/แขวง" readOnly />
                <Form.Field control={Input} label="อำเภอ/เขต" readOnly />
                <Form.Field control={Input} label="จังหวัด" readOnly />
              </Form.Group>
              <Form.Group inline>
                <label>กำลังศึกษาระดับชั้น</label>
                <Form.Field
                  control={Radio}
                  label="ป.4"
                  value="1"
                  checked={value === "1"}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label="ป.5"
                  value="2"
                  checked={value === "2"}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label="ป.6"
                  value="3"
                  checked={value === "3"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Field
                control={Checkbox}
                label="ข้าพเจ้ายอมรับว่าข้อมูลข้างต้นเป็นจริงทุกประการ"
              />
              <Form.Field control={Button}>Submit</Form.Field>
            </Form>
            <Divider hidden />
          </Container>
        </Segment>
      </div>
    );
  }
}

export default RegisterForm;

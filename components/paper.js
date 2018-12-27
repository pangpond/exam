import { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

class Paper extends Component {
  render() {
    const {
      id,
      citizen,
      title,
      firstname,
      lastname,
      prev_edu_name,
      prev_edu_sub_district,
      prev_edu_district,
      prev_edu_province,
      prev_edu_source,
    } = this.props

    return (
      <div className="page" size="A5" style={{ width: '21cm', height: '14.8cm' }}>
        <style jsx global>
          {`
            .ui.checkbox label,
            .ui.checkbox + label {
              padding-left: 30px;
            }
          `}
        </style>
        <div id="sheet">
          <div id="header">
            <div
              style={{
                width: '20%',
                height: '100%',
                border: '1px solid white',
                float: 'left',
              }}
            >
              <img
                src="/static/school/logo.jpg"
                alt=""
                style={{ width: '180px', padding: '7px 0 0 75px' }}
              />
            </div>
            <div style={{ width: '66%', height: '100%', float: 'left' }}>
              <p style={{ margin: '50px 0 0 40px', lineHeight: '140%' }}>
                บัตรประจำตัวผู้สมัครสอบวัดความรู้ทางวิชาการ (KJST Pre-test 2019) <br />
                โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี
                <br />
                ประจำปีการศึกษา 2561
              </p>
            </div>
          </div>

          <div id="content">
            <div className="" style={{ width: '80%', margin: '2% 0 0 10%' }}>
              <p className="firstMargin bold inline">
                เลขประจำตัวผู้สมัคร &ensp;
                <span className="letter-space">{`${id}`.padStart(5, '0')}</span>
              </p>
              <br />
              <p className="firstMargin inline">
                ชื่อ-สกุล&ensp;
                <span className="">
                  {title} {firstname} {lastname} &ensp;
                </span>
              </p>
              <div className="inline">
                กำลังศึกษาระดับชั้น &emsp;
                <Checkbox
                  style={{ fontSize: '24px', paddingLeft: '20px' }}
                  label="ป.4"
                  readOnly
                  defaultChecked={prev_edu_source === '7'}
                />
                <Checkbox
                  style={{ fontSize: '24px', paddingLeft: '20px' }}
                  label="ป.5"
                  readOnly
                  defaultChecked={prev_edu_source === '8'}
                />
                <Checkbox
                  style={{ fontSize: '24px', paddingLeft: '20px' }}
                  label="ป.6"
                  readOnly
                  defaultChecked={prev_edu_source === '9'}
                />
              </div>
              <br />
              <p className="firstMargin inline">
                โรงเรียน&ensp;
                <span>{prev_edu_name} &ensp;</span>
              </p>
              <p className="inline">
                อำเภอ &ensp;
                <span>{prev_edu_district} &ensp;</span>
              </p>
              <p className="inline">
                จังหวัด &ensp;
                <span>{prev_edu_province} &ensp;</span>
                <br />
              </p>
              <p className="firstMargin inline">
                รายงานตัวเข้าสอบ&emsp;วันที่&ensp;
                <span>20 มกราคม 2562 &ensp;</span>
              </p>
              <p className="inline">
                เวลา&ensp;
                <span>8.30 &ensp; (สอบเวลา 9.00 น. - 12.00 น.)</span>
              </p>
            </div>
          </div>

          <div id="footer" className="border center">
            ให้นักเรียนนำบัตรประจำตัวผู้สมัครและบัตรนักเรียนหรือบัตรประชาชน ปากกา ดินสอ 2B
            ยางลบมาในวันสอบด้วย
          </div>
        </div>
      </div>
    )
  }
}

export default Paper

import React from 'react'
import { Form } from 'semantic-ui-react'
import { fieldsEnum } from './finder'
import AddressTypeahead from './address'

type AddressFormInputPropType = {
  values: {
    a: string,
    d: string,
    p: string,
    s: string,
  },
  onAddressSelected: addresObject => void,
  renderResult: data => React.Component,
}

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addressObj: undefined,
    }
    this.setAddressObj = this.setAddressObj.bind(this)
  }

  setAddressObj(addressObj) {
    this.setState({ addressObj })
  }
  props: AddressFormInputPropType
  render() {
    const { addressObj } = this.state
    const { defaultAddress } = this.props
    const autoFields = []

    const defaultAddressArr = Object.keys(defaultAddress).map((key) => {
      const value = defaultAddress[key]
      return [key, value]
    })

    return (
      <div>
        <style jsx global>
          {`
            .typeahead-input-wrap {
              position: relative;
              width: 100%;
              padding-left: .5em;
              padding-right: .5em;
            }
            .typeahead-address-container {
              // padding: 0 5px;
            }
            .typeahead input[type='text'],
            .typeahead-input-hint {
              width: 100%;
              box-sizing: border-box;
              background: #fff;
              color: #666;
              // border: 1px solid #e5e5e5;
              border: none;
              // padding: 8px 6px;
              transition: 0.2s ease-in-out;
              font-size: inherit;
              transition-property: color, background-color, border;
            }
            .typeahead input[type='text']:focus {
              border-color: #1e87f0;
              outline: none;
            }

            .typeahead-selector {
              width: 100%;
              border: 1px solid #eee;
              border-top: none;
              list-style: none;
            }
            .typeahead ul {
              padding: 0;
              margin: 0;
            }
            .typeahead-selector li {
              padding: 10px 5px;
              background: #fff;
              border-bottom: 1px solid #eee;
              cursor: pointer;
            }
            .tt-cursor,
            .typeahead-selector li:hover {
              background: #f5f5f5;
            }
            .typeahead-input-hint {
              opacity: 0.3 !important;
              position: absolute;
              width: 100%;
              border: 1px solid rgba(0, 0, 0, 0);
              top: 0;
              left: 0;
              user-select: none;
              pointer-events: none;
              border: none;
              padding-left: .5em;
              padding-right: .5em;
            },

          `}
        </style>
        {Object.keys(fieldsEnum).map((key) => {
          let name
          switch (fieldsEnum[key]) {
            case 'd':
              name = 'ตำบล/แขวง'
              break
            case 'a':
              name = 'อำเภอ/เขต'
              break
            case 'p':
              name = 'จังหวัด'
              break
            case 's':
              name = 'โรงเรียนที่กำลังศึกษา'
              break
            default:
              name = ''
              break
          }

          const addressTypeahead = (
            <AddressTypeahead
              key={key}
              label={name}
              renderResult={this.props.renderResult}
              onOptionSelected={(result) => {
                this.setAddressObj(result)
                this.props.onAddressSelected(result)
              }}
              value={addressObj
                ? addressObj[fieldsEnum[key]]
                : new Map(defaultAddressArr).get(fieldsEnum[key])}
              fieldType={fieldsEnum[key]}
            />
          )

          if (fieldsEnum[key] !== 's') {
            autoFields.push(addressTypeahead)
          } else {
            return (
              <Form.Group key={key} className="typeahead-address-container" widths="equal">
                {addressTypeahead}
              </Form.Group>
            )
          }
        })}

        <Form.Group className="typeahead-address-container" widths="equal">
          {autoFields.map(field => field)}
        </Form.Group>
      </div>
    )
  }
}

export default AddressForm

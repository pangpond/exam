// @flow
import React from 'react'
import { defaultProps, withState, compose } from 'recompose'
import {
  Form,
  Input,
  Icon,
} from 'semantic-ui-react'

type TypeaheadInputType = {
  displayOption: () => any,
  maxVisible: number,
  value: string,
  options: any[],
  filterOptions: string,
  onChange: (e: any) => void,
  onOptionSelected: (option: any) => void,
  label: string,
  clear: boolean => void,

  // local props
  open: boolean,
  // clear: boolean => void,
  setOpen: boolean => void,
}

const Typeahead: React.Component<TypeaheadInputType> = compose(
  defaultProps({
    onChange: () => {},
    option: [],
    maxVisible: 10,
  }),
  withState('open', 'setOpen', false),
)((props: TypeaheadInputType) => (
  <div className="typeahead typeahead-input-wrap">
    <Form.Field
      control={Input}
      label={props.label}
      onBlur={() => setTimeout(() => props.setOpen(false), 400)}
      onFocus={() => props.setOpen(true)}
      value={props.value}
      onChange={props.onChange}
      icon={<Icon name="close" link onClick={() => {
        console.log('Clear!')
        props.onClear()
      }} />}
      required
    />
    {props.options.length && props.value.length && props.open ? (
      <Form.Field
        control={Input}
        label={props.label}
        onChange={() => null}
        value={props.options[0][props.filterOption]}
        className="typeahead-input-hint"
        required
      />
    ) : null}

    {props.open && props.options.length && props.value.length ? (
      <ul className="typeahead-selector">
        {props.options.filter((item, i) => i < props.maxVisible).map((item, i) => (
          <li
            key={i}
            onClick={() => {
              props.onOptionSelected(item)
              props.setOpen(false)
            }}
          >
            {props.displayOption(item)}
          </li>
        ))}
      </ul>
    ) : null}
  </div>
))

export default Typeahead

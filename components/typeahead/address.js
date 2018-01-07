import { compose, withState, withProps, lifecycle, defaultProps } from 'recompose'
import React, { Component } from 'react'

import Typeahead from './typeahead'
import { resolveResultbyField } from './finder'

type AddressInputType = {
  // local state
  searchStr: string,
  option: string[],

  // local props
  cleared: boolean,
  setCleared: boolean => void,

  // external props
  fieldType: string,
  value: string,
  onOptionSelected: (option: any) => void,
  renderResult: (data: any) => React.Component,
}
const AddressTypeaheadComponent = (props: AddressInputType) => {
  const {
    searchStr, setSearchStr, fieldType, options, label, value,
  } = props
  if (!fieldType) {
    console.warn('No field type provide')
    return <div />
  }

  return (
    <Typeahead
      label={label}
      displayOption={props.renderResult}
      filterOption={fieldType}
      options={options}
      maxVisible={5}
      value={searchStr.length ? searchStr : !props.cleared ? value : ''}
      onChange={e => setSearchStr(e.target.value)}
      onOptionSelected={option => props.onOptionSelected(option)}
      onClear={() => {
        props.setCleared(true)
        setSearchStr('')
      }}
    />
  )
}

const AddressTypeahead: Component<AddressInputType> = compose(
  withState('searchStr', 'setSearchStr', ''),
  withState('cleared', 'setCleared', false),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.props.setSearchStr(nextProps.value)
      }
    },
  }),
  withProps(({ searchStr, fieldType, value }) => ({
    options: resolveResultbyField(fieldType, searchStr.length ? searchStr : value),
  })),
  defaultProps({
    renderResult: data => (
      <span>
        {data.s || <li>ไม่มีโรงเรียนนี้</li>}
        {` » ${data.d} » ${data.a} » ${data.p}`}
      </span>
    ),
    value: '',
  }),
)(AddressTypeaheadComponent)

export default AddressTypeahead

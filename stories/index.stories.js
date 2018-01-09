import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Head from 'next/head'
import { Form, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Typeahead from '../components/typeahead/'

const defaultAddress = {
  s: '',
  a: '',
  d: '',
  p: '',
}

storiesOf('Typeahead', module).add('with label', () => (
  <div
    style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    }}
  >
    <div style={{ flex: 1 }}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900"
        />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:400,700" />
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
      </Head>
      <Segment>
        <Form>
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
            onAddressSelected={addressObject => console.log(addressObject)}
            defaultAddress={defaultAddress}
          />
        </Form>
      </Segment>
    </div>
  </div>
))

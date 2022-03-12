import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
const Contact = () => {
  return (
    <div
      style={{ height: '50vh' }}
      className="d-flex f-d align-items-center justify-content-center"
    >
      <h1>
        <p style={{ fontSize: '4rem', margin: '0', textAlign: 'center' }}>
          Contact me on :{' '}
        </p>
      </h1>{' '}
      <div>
        {' '}
        <p className="t-1 d-flex align-items-center">
          <BsTelephone color="lightGreen " style={{ paddingRight: '1rem' }} />{' '}
          8487923230
        </p>
        <p className="t-1 d-flex align-items-center">
          <CgMail color="white " style={{ paddingRight: '1rem' }} />{' '}
          dhardharmik7@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Contact

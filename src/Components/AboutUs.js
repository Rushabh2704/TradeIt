import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <div className='aboutbody'>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage'>
          <h1>Who are We?</h1>
          <p>
            Actually We are not any professionals. This website has been created
            for the purpose of aiding students for buying and selling the notes
            and other items that they no longer need which might be useful for
            other new students. We take no charge for this. What we do is just
            aid in establishing the communication between buyer and seller.These
            can include: notes, drawing instruments, utensils & furnitures
            specially by students who are on the verge of leaving campus sooner
            or later.
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage1'>
          <h1>Developer</h1>
          <p>
            Designed and developed by{' '}
            <p>
              Rushabh Kankariya, Kaushik Rao, Balasiva Elango, Aanchal Patel, Pranav Hiremath
            </p>{' '}
          </p>
          <h3>Contact Details</h3>
          <i className='fas fa-phone'></i> 9356800237
          <br></br>
          <i className='fas fa-phone'></i> 9014706457
          <br></br>
          <i className='fas fa-phone'></i> 6382515817
          <br></br>
          <i className='fas fa-phone'></i> 9752532735
          <br></br>
          <i className='fas fa-phone'></i> 9434778999
          <br />
          <i className='fas fa-envelope-square'></i>
          <a target='_blank' href={`mailto:rushabh2704@gmail.com`}>rushabh2704@gmail.com</a>
          <a target='_blank' href={`mailto:belikekaushikrao@gmail.com`}>belikekaushikrao@gmail.com</a>
          <a target='_blank' href={`mailto:yourstrulybalasiva@gmail.com`}>yourstrulybalasiva@gmail.com</a>
          <a target='_blank' href={`mailto:aanchalpatel.ap@gmail.com`}>aanchalpatel.ap@gmail.com</a>
          <a target='_blank' href={`mailto:pranav1405@gmail.com`}>pranav1405@gmail.com</a>
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default AboutUsScreen
import React from 'react'
import { Container, Row, Col,
   Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'



const tmp = {}

function Init() {
  tmp['hello'] = 'hello'
}


function SignupPage(props) {

  return (
    <Container className='themed-container' fluid={true}>
      <Row xs='1' sm='3' >
        <Col></Col>
        <Col>
          <h2>Sign Up</h2>

          <Form method='post' onSubmit={props.onSubmit}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input type='text' name='name' id='name' placeholder='Enter your name'
                value={props.state.name}
                onChange={props.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input type='email' name='email' id='email' placeholder='Enter your e-mail'
                value={props.state.email}
                onChange={props.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for='password'>Password</Label>
              <Input type='text' name='password' id='password' placeholder='Enter a password'
                value={props.state.password}
                onChange={props.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for='isTermsOn'></Label>
              <CustomInput type='switch' name='isTermsOn' id='isTermsOn' label='I agree to the Terms'
                checked={props.state.isTermsOn}
                onChange={props.onChange} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <pre>
            <code>
              {JSON.stringify(props.state)}
            </code>
          </pre>
        </Col>
      </Row>
    </Container>
  )
}

export default SignupPage;
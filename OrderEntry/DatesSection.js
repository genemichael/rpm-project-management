import React from 'react'
import { Container, Card, CardBody,Form, Input, Row, Col, Label } from 'reactstrap'
import SaveContinue from '../Buttons/SaveContinue'

const DatesSection = () => {
  return (
    <Card>
        <CardBody>
            <Form>
                <Row>
                    <h5>Dates</h5>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <Label htmlFor='dueDate'>
                            Due Date
                        </Label>
                        <Input 
                        type='date'
                        id='dueDate'
                        />
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='proofOutDate'>
                            Proof Out
                        </Label>
                        <Input 
                        type='date'
                        id='proofOutDate'
                        />
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='pressDate'>
                            Scheduled Print Date
                        </Label>
                        <Input 
                        type='date'
                        id='pressDate'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <Label htmlFor='shippedDate'>
                            Shipped
                        </Label>
                        <Input 
                        type='date'
                        id='shippedDate'
                        />
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='proofApproved'>
                            Proof Approved
                        </Label>
                        <Input 
                        type='date'
                        id='proofApproved'
                        />
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='printedDate'>
                            Printed
                        </Label>
                        <Input 
                        type='date'
                        id='printedDate'
                        />
                    </Col>
                </Row>
                <br/>
                <SaveContinue/>
            </Form>
        </CardBody>
    </Card>
  )

}

export default DatesSection
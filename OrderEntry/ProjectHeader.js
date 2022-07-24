import React from 'react'
import CreateLoadClear from '../Buttons/CreateLoadClear'
import { Container, Card, CardBody,Form, Input, Row, Col, Label } from 'reactstrap'


const ProjectHeader = () => {
  return (
    <Card>
        <CardBody>
            <Form>
                <Row>
                    <h5>
                        Header
                    </h5>
                    <small className='text-muted'>
                        Enter a job code and press 'Load' to load a project. To create a new project, click 'Create.'
                    </small>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <Label htmlFor='jobCode'>Job</Label>
                        <Input 
                        type='text' 
                        id='jobCode'
                        />
                    </Col>
                    <Col className='col-4'>
                    <Label htmlFor='cust'>Customer</Label>
                        <Input 
                        type='text'
                        id='cust'
                        placeholder='Customer Name'
                        />
                    </Col>
                    <Col className='col-4'>
                    <Label htmlFor='jobStatus'>
                            Status
                        </Label>
                        <Input
                        type='select'
                        id='jobStatus'>
                            <option>Waiting for Files</option>
                            <option>Waiting for Data</option>
                            <option>Estimate</option>
                            <option>Prepress</option>
                            <option>OOP</option>
                            <option>RTP</option>
                            <option>Printing</option>
                            <option>Finishing</option>
                            <option>RTS</option>
                            <option>Shipped</option>
                            <option>Out to Vendor</option>
                            <option>Completed</option>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                    <Label htmlFor='jobType'>Type</Label>
                    <Input 
                    type='select'
                    id='jobType'>
                        <option>Select One</option>
                        <option>New</option>
                        <option>Exact Reprint</option>
                        <option>Reprint w/Changes</option>
                    </Input>
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='desc'>Project Title</Label>
                        <Input
                        type='text'
                        id='cust'
                        placeholder='Project title or description. Will appear on the invoice with this name'
                        />
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='jobQty'>Quantity</Label>
                        <Input 
                        type='number'
                        id='jobQty'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                    <Label htmlFor='pm'>
                        Project Manager
                    </Label>
                    <Input
                    type='select'
                    id='pm'
                    name='pm'
                    className='form-control'
                    >
                    <option></option>
                    <option>Merle May Lestrange Lauria Lenssen</option>
                    </Input>
                    </Col>
                    <Col className='col-4'>
                        <Label 
                        htmlFor='rep'>
                            Sales Rep
                        </Label>
                        <Input
                        type='select'
                        id='rep'
                        name='rep'
                        className='form-control'
                        >
                            <option></option>
                            <option>Berta Caseres</option>
                        </Input>
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='allowableOvers'>
                            Allowable Overs
                        </Label>
                        <Input 
                        type='number'
                        id='allowableOvers'
                        placeholder="Add'l allowed"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <Label htmlFor='prevJob'>
                            Previous Job
                        </Label>
                        <Input 
                        type='text'
                        id='prevJob'
                        />
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='estNum'>
                            Estimate Number
                        </Label>
                        <Input
                        type='text'
                        id='estNum'
                        />
                    </Col>
                    <Col className='col-4'>
                        <Label htmlFor='sampleQty'>
                            Samples
                        </Label>
                        <Input 
                        type='number'
                        id='sampleQty'
                        />
                    </Col>
                </Row>
                <br/>
                <CreateLoadClear/>
            </Form>
        </CardBody>
    </Card>
  )
}

export default ProjectHeader
import React from 'react'
import { Nav, NavItem, NavLink, Container, Card, CardBody,Form, Input, Row, Col, Label, Collapse } from 'reactstrap'
import ProjectHeader from './ProjectHeader'
import PrepSection from './PrepSection'
import DatesSection from './DatesSection'
import OrderProductionRoute from './OrderProductionRoute'
import OrderShipping from './OrderShipping'
import OrderNotesSection from './OrderNotesSection'

const OrderEntry = () => {
  return (
    <Container>
    <h5>Order Entry</h5>
        <Card>
            <CardBody>
                <Form>
                    <ProjectHeader />
                    <DatesSection/>
                </Form>
            </CardBody>
        </Card>
    </Container>
  )
}

export default OrderEntry
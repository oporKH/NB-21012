import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


export default class CreateCar extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <h1>Create Car</h1>
                <Form>
                    <Row>
                        <Form.Label column lg={2}>
                        License Plate
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="License Plate..." />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                        Make
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Make..." />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Model
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" placeholder="Model..." />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label column lg={2}>
                            Note
                        </Form.Label>
                        <Col>
                            <Form.Control as="textarea" type="text" placeholder="Note..." />
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

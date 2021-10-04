import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class CreateCar extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <h1>Create Car</h1>
                <Form>
                    <Form.Group controlId="LicensePlate">
                        <Form.Label>License Plate</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="Make">
                        <Form.Label>Make</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="Model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="Model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

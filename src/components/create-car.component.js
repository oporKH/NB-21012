import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { FormGroup } from 'react-bootstrap';


export default class CreateCar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            license: '',
            make: '',
            model: '',
            note: '',
        }
    }

    onChangeCarLicense = (e) => {
        this.setState({ license: e.target.value })
    }

    onChangeCarMake = (e) => {
        this.setState({ Make: e.target.value })
    }

    onChangeCarModel = (e) => {
        this.setState({ Model: e.target.value })
    }

    onChangeCarNote = (e) => {
        this.setState({ Note: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log('Car successfully created!');
        console.log('License Plate: ${this.state.license}');
        console.log('Make: ${this.state.make}');
        console.log('Model: ${this.state.model}');
        console.log('Note: ${this.state.note}');

        this.setState({
            license: '',
            make: '',
            model: '',
            note: '',
        })
    }

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Create Car</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup controlId="License">
                        <Row>
                            <Form.Label column lg={2}>
                                License Plate
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="License Plate..." value={this.state.license}
                                    onChange={this.onChangeCarLicense} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="Make">
                        <Row>
                            <Form.Label column lg={2}>
                                Make
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Make..." value={this.state.make}
                                    onChange={this.onChangeCarMake} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="Model">
                        <Row>
                            <Form.Label column lg={2}>
                                Model
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Model..." value={this.state.model}
                                    onChange={this.onChangeCarModel} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="Note">
                        <Row>
                            <Form.Label column lg={2}>
                                Note
                            </Form.Label>
                            <Col>
                                <Form.Control as="textarea" type="text" placeholder="Note..." value={this.state.note}
                                    onChange={this.onChangeCarNote} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <br />

                    <Button variant="success" size="lg" block="block" type="submit">
                        Create Car
                    </Button>
                </Form>
            </div>
        )
    }
}

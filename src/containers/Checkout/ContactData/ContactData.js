import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: null

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Marcin Esz",
                address: {
                    street: 'TestStreet 1',
                    zipCode: '2137',
                    country: 'Poland'
                },
                email: 'emailmail@gmail.com'
            },
            deliveryMetod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ loading: false })
            });
    }
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Entry your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="name" />
                    <input type="email" name="email" placeholder="email" />
                    <input type="text" name="street" placeholder="street" />
                    <input type="text" name="postal" placeholder="postal code" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order here</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;
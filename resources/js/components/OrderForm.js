import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (!/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g.test(values.phone)) {
        errors.phone = 'Invalid phone';
    }

    if (!values.email) {
        // Email not required
        // errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.address) {
        errors.address = 'Required';
    }

    return errors;
};

const OrderForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form className="order-form container" onSubmit={formik.handleSubmit}>
            <div className="row">
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
                ) : null}
            </div>
            <div className="row">
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
                ) : null}
            </div>
            <div className="row">
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
                ) : null}
            </div>
            <div className="row">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="row">
                <label htmlFor="address">Delivery Address</label>
                    <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                <div>{formik.errors.address}</div>
                ) : null}
            </div>
            <div className="row">
                <button type="submit" disabled={ !formik.isValid }>Submit</button>
            </div>
        </form>
    );
};

export default OrderForm;
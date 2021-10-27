import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log( data );
    };

    return (
        <div>
            <form className="shipping-form" onSubmit={ handleSubmit( onSubmit ) }>
                {/* register your input into the hook by invoking the "register" function */ }
                <input defaultValue={ user.displayName } { ...register( "name" ) } placeholder="Your Name" />

                {/* include validation with required or other standard HTML validation rules */ }
                <input defaultValue={ user.email } { ...register( "email", { required: true } ) } placeholder="Email" />
                <input { ...register( "phone", { required: true } ) } placeholder="Phone Number" />
                <input { ...register( "address", { required: true } ) } placeholder="Address" />
                <input { ...register( "city", { required: true } ) } placeholder="City" />
                <input { ...register( "country", { required: true } ) } placeholder="Country" />
                {/* errors will return when field validation fails  */ }
                { errors.email && <span className="error">This field is required</span> }

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
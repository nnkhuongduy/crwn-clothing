import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TGBbxg1nWDVm5Efh3stonCWG00Xa7mmRq2';

    const onToken = token => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout label='Pay Now' name='CRWN Clothing Ltd.' billingAddress shippingAddress image='http://svgshare.com/i/CUz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton
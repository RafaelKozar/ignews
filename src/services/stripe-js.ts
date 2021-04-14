import {loadStripe} from '@stripe/stripe-js'

export async function getStripeJs() {
    // const stripeJs = await loadStripe(process.env.NEXT_PULIC_STRIPE_PUBLIC_KEY)
    const stripeJs = await loadStripe('pk_test_51IfsCmGar3In4DYS2idC3yKBZDWag0rixkSEub9RU0Fc0uFfvs3EsC85XEzu1q8H0bf5XJJMauGZ1G7ZnQcCjGDG00O0VmE8AK')

    return stripeJs;
}
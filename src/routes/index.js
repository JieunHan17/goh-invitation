import Welcome from '../views/Welcome.svelte'
import Message from '../views/Message.svelte'
import Home from '../views/Home.svelte'
import Information from '../views/Information.svelte'

export default {
    '/': Welcome,
    '/message': Message,
    '/home': Home,
    '/info': Information
}
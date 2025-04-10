import Welcome from '../views/Welcome.svelte'
import Content from '../views/Content.svelte'
import Gift from '../views/Gift.svelte'
import Video from '../views/Video.svelte'
import Conclusion from '../views/Conclusion.svelte'
import ActressVideo from '../views/include/ActressVideo.svelte'
import AdultServiceInfo from '../views/include/AdultServiceInfo.svelte'
import YouthServiceInfo from '../views/include/YouthServiceInfo.svelte'

export default {
    '/': Welcome,
    '/content': Content,
    '/gift': Gift,
    '/video': Video,
    '/conclusion': Conclusion,
    '/include/actressvideo': ActressVideo,
    '/include/adultservice': AdultServiceInfo,
    '/include/youthservice': YouthServiceInfo,
}
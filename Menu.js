import { MdFastfood} from 'react-icons/md'
import { TiWeatherSnow } from 'react-icons/ti'
import { AiFillHome  } from 'react-icons/ai'

export const menu = [
    {
        title: 'Home',
        link: '/',
        icon: <AiFillHome />
    },
    {
        title: 'Food',
        link: '/food',
        icon: <MdFastfood />
    },
    {
        title: 'Weather',
        link: '/weather',
        icon: <TiWeatherSnow />
    },
]

export default menu
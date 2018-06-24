import Loadable from 'react-loadable'
import login from './login'
import main from './main'

let config = [
    ...(login(Loadable)),
    ...(main(Loadable))
]

export default config
import Loadable  from 'react-loadable'
import Loading from 'containers/loading/loading'

const createLoadableComp = url =>  Loadable({
  loader: () => import(`containers/${url}`),
  loading: Loading
});

export  { createLoadableComp };
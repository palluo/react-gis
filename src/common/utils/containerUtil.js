import Loadable  from 'react-loadable'
import Loading from '../../containers/Loading/Loading'

const createLoadableComp = url =>  Loadable({
  loader: () => import(`containers/${url}`),
  loading: Loading
});

export  { createLoadableComp };
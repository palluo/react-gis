import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';
import { CREATE_MAP } from 'actions/map'

const map = (state = {}, action) => {

  switch (action.type) {
    case CREATE_MAP:

      return {
        mapCtrl: new MapView({
          container: action.domNode,
          map: new EsriMap({basemap: 'streets'})
        })
      }

    default:
      return state
  }
}

export default map;
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

export const CREATE_MAP = 'CREATE_MAP'

export function createMap  (domNode) {
  return {
    type: CREATE_MAP,
    mapCtrl: new MapView({
      container: domNode,
      map: new EsriMap({basemap: 'streets'})
    })
  }
}


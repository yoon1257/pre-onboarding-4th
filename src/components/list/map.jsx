import { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Map = ({ data }) => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(37.5001154, 127.041344),
      level: 6,
    };
    const kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);
    const zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(kakaoMap, marker);
      };
    };

    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };
    data &&
      data.forEach((el) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(el.lat, el.lng),
        });
        marker.setMap(kakaoMap);
        const infowindow = new kakao.maps.InfoWindow({
          position: new kakao.maps.LatLng(el.lat, el.lng),
          content: `<div style="padding: 5px; font-size: 0.8em"}>${el.name}</div>`,
        });
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(kakaoMap, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
      });
  }, [data]);

  return (
    <Main>
      <div id='map' className='mapDetail' />
    </Main>
  );
};
const Main = styled.div`
  width: 100%;
  height: 600px;
  .mapDetail {
    width: 100%;
    height: 100%;
  }
`;
export default Map;

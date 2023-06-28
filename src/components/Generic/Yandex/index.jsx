import { YMaps, Map } from "react-yandex-maps";
import { Container } from "./style";

const Yandex = ({ center }) => {
  const mapStyle = {
    position: "relative",
    left: 0,
    top: 0,
    width: "100%",
    height: "400px",
    overflow: "hidden",
    margin: "20px auto",
  };
  return (
    <Container>
      <YMaps query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b" }}>
        <Map
          style={mapStyle}
          defaultState={{ center: center || [41.311081, 69.240562], zoom: 15 }}
        />
      </YMaps>
    </Container>
  );
};

export default Yandex;

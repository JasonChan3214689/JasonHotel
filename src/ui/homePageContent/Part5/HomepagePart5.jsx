import styled from "styled-components";
import Title from "../../Title";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const StyledHomePagePart5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-black-600);
  margin-bottom: 1rem;
`;

const StyledMapContainer = styled(MapContainer)`
  height: 600px;
  width: 100%;
`;

const StyledContactInromation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

const HomepagePart5 = () => {
  const position = [22.296731376591246, 114.17711618032841];

  return (
    <div>
      <StyledHomePagePart5>
        <Title category="我們的位置" />
        <StyledMapContainer center={position} zoom={20} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Jason Hotel</Popup>
          </Marker>
        </StyledMapContainer>
        <StyledContactInromation>
          <div>
            <div>地址</div>
            <div>香港半島酒店 香港九龍梳士巴利道</div>
          </div>
          <div>
            <div>電話</div>
            <div>+852 12345678</div>
          </div>
          <div>
            <div>電子郵件</div>
            <div>jasonHotel@jasonHotel.com</div>
          </div>
        </StyledContactInromation>
      </StyledHomePagePart5>
    </div>
  );
};

export default HomepagePart5;

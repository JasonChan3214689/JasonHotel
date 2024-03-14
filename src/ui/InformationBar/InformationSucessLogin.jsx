import styled from "styled-components";
import { useLogout } from "../../hooks/user/useLogout";
import { useNavigate } from "react-router-dom";

const StyleInformationBaritem = styled.li`
  color: var(--color-white-300);
  position: relative;
  cursor: pointer;

  &::after {
    content: "|";
    color: white;
    margin-left: 1rem;
    position: absolute;
    right: -1rem;
  }

  &:last-child::after {
    content: none;
  }
`;

const InformationSucessLogin = ({ user }) => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  function handleBooking() {
    navigate("/viewbookings");
  }

  return (
    <>
      <StyleInformationBaritem>
        {`hi~ ${user?.user_metadata?.fullName}`}
      </StyleInformationBaritem>
      <StyleInformationBaritem onClick={handleBooking}>
        查詢預約
      </StyleInformationBaritem>
      <StyleInformationBaritem onClick={() => logout()}>
        登出
      </StyleInformationBaritem>
    </>
  );
};

export default InformationSucessLogin;

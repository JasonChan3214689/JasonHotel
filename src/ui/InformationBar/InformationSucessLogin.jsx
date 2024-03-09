import styled from "styled-components";
import { useLogout } from "../../hooks/user/useLogout";

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
  console.log(user);

  return (
    <>
      <StyleInformationBaritem>
        {`hi~ ${user?.user_metadata?.fullName}`}
      </StyleInformationBaritem>
      <StyleInformationBaritem onClick={() => logout()}>
        登出
      </StyleInformationBaritem>
    </>
  );
};

export default InformationSucessLogin;

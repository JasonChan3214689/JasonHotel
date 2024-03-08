import styled from "styled-components";

import Modal from "../Modal";
import SignUpForm from "../../ui/SignUpForm";
import LoginForm from "../../ui/LogInForm";
import { useUser } from "../../hooks/user/useUser";
import { useLogout } from "../../hooks/user/useLogout";
import InformationSucessLogin from "./InformationSucessLogin";

const StyleInformationBarList = styled.ul`
  padding-right: 2rem;
  display: flex;
  gap: 2rem;
`;

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

const InformationBarList = () => {
  const { user } = useUser();
  const { logout } = useLogout();

  return (
    <>
      <StyleInformationBarList>
        {user ? (
          <InformationSucessLogin user={user} logout={logout} />
        ) : (
          <>
            <Modal>
              <Modal.Open opens="login">
                <StyleInformationBaritem>登入</StyleInformationBaritem>
              </Modal.Open>
              <Modal.Window name="login">
                <LoginForm onClose={() => Modal.close()} />
              </Modal.Window>
            </Modal>

            <Modal>
              <Modal.Open opens="signup">
                <StyleInformationBaritem>註冊</StyleInformationBaritem>
              </Modal.Open>
              <Modal.Window name="signup">
                <SignUpForm onClose={() => Modal.close()} />
              </Modal.Window>
            </Modal>
          </>
        )}

        <StyleInformationBaritem as="li">查詢預約</StyleInformationBaritem>
      </StyleInformationBarList>
    </>
  );
};

export default InformationBarList;

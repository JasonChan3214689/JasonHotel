import styled from "styled-components";

import Modal from "../Modal";
import SignUpForm from "../../ui/SignUpForm";
import LoginForm from "../../ui/LogInForm";

const StyleInformationBarList = styled.ul`
  padding-right: 2rem;
  display: flex;
  gap: 2rem;
`;

const StyleInformationBaritem = styled.li`
  color: var(--color-white-300);
  position: relative;

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
  return (
    <>
      <StyleInformationBarList>
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
            <SignUpForm />
          </Modal.Window>
        </Modal>
        <li>查詢預約</li>
      </StyleInformationBarList>
    </>
  );
};

export default InformationBarList;

import React from "react";
import Modal from "../Modal";
import styled from "styled-components";
import SignUpForm from "../../features/auth/SignUpForm";
import LoginForm from "../../features/auth/LogInForm";

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

const RenderMeun = ({ closeMenu }) => {
  return (
    <>
      <Modal>
        <Modal.Open opens="login">
          <StyleInformationBaritem onClick={closeMenu}>
            登入
          </StyleInformationBaritem>
        </Modal.Open>
        <Modal.Window name="login">
          <LoginForm
            onClose={() => {
              Modal.close();
              closeMenu();
            }}
          />
        </Modal.Window>
      </Modal>

      <Modal>
        <Modal.Open opens="signup">
          <StyleInformationBaritem onClick={closeMenu}>
            註冊
          </StyleInformationBaritem>
        </Modal.Open>
        <Modal.Window name="signup">
          <SignUpForm
            onClose={() => {
              Modal.close();
              closeMenu();
            }}
          />
        </Modal.Window>
      </Modal>
    </>
  );
};

export default RenderMeun;

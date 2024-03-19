import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

import Modal from "../Modal";
import SignUpForm from "../../features/auth/SignUpForm";
import LoginForm from "../../features/auth/LogInForm";
import { useUser } from "../../hooks/user/useUser";
import { useLogout } from "../../hooks/user/useLogout";
import InformationSucessLogin from "./InformationSucessLogin";

const StyleInformationBarList = styled.ul`
  padding-right: 2rem;
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
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

const HamburgerMenu = styled.div`
  list-style: none;
  display: none;
  position: absolute;
  right: 0;
  top: 4%;
  background-color: var(--color-gold-600);
  padding: 1rem;
  z-index: 100;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    font-size: 1rem;
  }
`;

const HamburgerIcon = styled(motion.div)`
  cursor: pointer;
  z-index: 10;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const variants = {
  open: {
    translateY: 5,
  },
  closed: {
    rotate: 0,
    translateY: 0,
  },
};

const Hamburger = ({ toggleMenu }) => {
  return (
    <HamburgerIcon initial="closed" variants={variants} onClick={toggleMenu}>
      {[20, 30, 20].map((width, index) => (
        <motion.span
          key={index}
          transition={{ duration: 0.3 }}
          style={{
            display: "block",
            height: "2px",
            background: "white",
            marginBottom: "5px",
            width: `${width}px`,
          }}
        />
      ))}
    </HamburgerIcon>
  );
};

const InformationBarList = () => {
  const { user } = useUser();
  const { logout } = useLogout();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu called", !isMenuVisible);
    setMenuVisible(!isMenuVisible);
  };

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
      </StyleInformationBarList>

      <Hamburger toggleMenu={toggleMenu} />
      {isMenuVisible && (
        <HamburgerMenu>
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
        </HamburgerMenu>
      )}
    </>
  );
};

export default InformationBarList;

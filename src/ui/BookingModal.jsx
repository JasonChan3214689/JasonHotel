import styled from "styled-components";
import { createPortal } from "react-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { cloneElement } from "react";
import { device, size } from "../utils/breakpoints";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: var(--color-white-600);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  z-index: 1001;
  overflow-y: auto;

  @media ${device.small} {
    width: 60%;
  }

  @media ${device.med} {
    width: 50%;
  }

  @media ${device.large} {
    width: 25%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  overflow-x: hidden;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

const BookingModalContext = createContext();

function BookingModal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <BookingModalContext.Provider value={{ openName, close, open }}>
      {children}
    </BookingModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(BookingModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

const Window = ({ children, name }) => {
  const { openName, close } = useContext(BookingModalContext);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={close}>
          <HiMiniXMark />
        </Button>
        <div>{cloneElement(children, { onClose: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

BookingModal.Open = Open;
BookingModal.Window = Window;

export default BookingModal;

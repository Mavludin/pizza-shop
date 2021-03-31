import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(1, 1, 1, 0.5);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;
`

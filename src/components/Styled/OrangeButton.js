import styled from 'styled-components'

export const OrangeButton = styled.button`
  padding: 4px 20px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(255, 240, 230);
  color: rgb(209, 87, 0);
  border-radius: 9999px;
  margin-right: 20px;
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  &:hover {
    background-color: rgb(255, 210, 179);
  }
`

import styled from "styled-components"

interface IFooterBtns {
  children: React.ReactNode
  direction?: 'right'
}

// Styled
const Footer = styled.footer<{ $dir: boolean }>`
  display: flex;
  justify-content: ${({ $dir }) => $dir ? 'flex-end' : 'space-between'};
  margin: 90px 0 0;
  @media screen and (max-width: 900px) {
    background: var(--color-white);
    box-shadow: 0 0 16px var(--color-light-gray);
    padding: 15px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`

const FooterBtns: React.FC<IFooterBtns> = ({ children, direction }) => {
  return (
    <Footer $dir={!!direction}>
      {children}
    </Footer>
  )
}

export default FooterBtns

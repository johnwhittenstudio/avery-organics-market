import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 25px 60px;
  position: fixed;
  background-color: rgb(0, 104, 45);
  bottom: 0;
  width: 100%;
`

export const FooterHeader = styled.div`
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
    minmax(185px, 1fr));
  // grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
    minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: rgb(172, 255, 170);
  font-size: 12px;
  text-decoration: none;

  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 14px;
  color: rgb(172, 255, 170);
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
`;
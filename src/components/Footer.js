import React from 'react';
// // import { MDBFooter } from 'mdb-react-ui-kit';

// function Footer() {
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
//       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
//         <div className='me-5 d-none d-lg-block'>
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href='' className='me-4 text-reset'>
//             <i className='fab fa-facebook-f'></i>
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <i className='fab fa-twitter'></i>
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <i className='fab fa-google'></i>
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <i className='fab fa-instagram'></i>
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <i className='fab fa-linkedin'></i>
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <i className='fab fa-github'></i>
//           </a>
//         </div>
//       </section>

//       <section className=''>
//         <div className='container text-center text-md-start mt-5'>
//           <div className='row mt-3'>
//             <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>
//                 <i className='fas fa-gem me-3'></i>Company name
//               </h6>
//               <p>
//                 Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
//                 consectetur adipisicing elit.
//               </p>
//             </div>

//             <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Angular
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   React
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Vue
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Laravel
//                 </a>
//               </p>
//             </div>

//             <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Help
//                 </a>
//               </p>
//             </div>

//             <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p>
//                 <i className='fas fa-home me-3'></i> New York, NY 10012, US
//               </p>
//               <p>
//                 <i className='fas fa-envelope me-3'></i>
//                 info@example.com
//               </p>
//               <p>
//                 <i className='fas fa-phone me-3'></i> + 01 234 567 88
//               </p>
//               <p>
//                 <i className='fas fa-print me-3'></i> + 01 234 567 89
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         © 2021 Copyright:
//         <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

// export default Footer;



import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">History</FooterLink>
            <FooterLink href="#">Community</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Organic</FooterLink>
            <FooterLink href="#">Local</FooterLink>
            <FooterLink href="#">CSA</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Amy Young</FooterLink>
            <FooterLink href="#">Chris Depastene</FooterLink>
            <FooterLink href="#">John Whitten</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
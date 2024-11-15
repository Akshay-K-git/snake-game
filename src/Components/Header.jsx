import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
           <MDBNavbar light bgColor='primary' style={{backgroundImage:'url(./header.jpg)',backgroundSize:'cover'}}>
        <MDBContainer className=''>
          <MDBNavbarBrand href='#' >
            <img
              src='./logo.jpg'
              width={'60px'}
              height='60px'
              alt=''
              loading='lazy'
              className='border shadow' style={{borderRadius:'50%',boxShadow:'5px 5px 5px'}}
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
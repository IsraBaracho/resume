import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default function App() {
    const [openNavCentred, setOpenNavCentred] = useState(false);

    return (
        <MDBNavbar sticky expand='lg' light bgColor='light'>
        <MDBContainer >
            <MDBNavbarToggler
            type='button'
            data-target='#navbarCenteredExample'
            aria-controls='navbarCenteredExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavCentred(!openNavCentred)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar open={openNavCentred} center id='navbarCenteredExample' >
            <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link'>
                    Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}
import * as React from "react"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../styles/index.css'

import NavBar from "../components/navbar/navbar"
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';


const IndexPage = () => {
  return (
    <div>
      <NavBar/>
      <MDBContainer>
        <MDBRow style={{marginTop: `100px`}}>
          <h1 className="nomeProprio">Israel Baracho de Borges</h1>
        </MDBRow>
      </MDBContainer>
      <div style={{ height: `100vh` }}>

      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Israel de Borges</title>

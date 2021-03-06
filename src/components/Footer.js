import React from "react"
import { NavLinks } from './Nav'
import styled from 'styled-components'
const Container = styled.div`
    margin: 2em 0 1em 0;
    .copyright{
        display: flex;
        justify-content: center;
    }
    ul{
        display: flex;
        justify-content: center;
        li{
            margin: 0 .5em;
        }
    }
`

const Footer = ({ children }) => {

    return (
        <Container>
            <NavLinks />
            <hr style={{ margin: '1em 0' }} />
            <div className="copyright">
                <p>
                    copyright &copy;{new Date().getFullYear()} Oliver Meredith
            </p>
            </div>
        </Container>
    )
}

export default Footer
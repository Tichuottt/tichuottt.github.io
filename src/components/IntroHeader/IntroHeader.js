import classes from './IntroHeader.module.css'

import styled from "styled-components";

// const Image = styled.image`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//
// @media (min-width: 768px) {
//     width: auto;
// }
//
//
// &:focus {
//     outline: none;
// }
//
// &:hover,
// &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// `

const QRImage = styled.img`
   display: block;
   width: ${props => props?.display ? '23vw' : '0px'}; 
   margin: auto auto ${props => props?.display ? '1rem' : '0'};   
   transition: all 0.4s ease-out;
   border-radius: 12px;
   object-fit: cover;
   opacity: ${props => props?.display ? '1' : '0'};    
   
   @media (max-width: 550px) {
     width: ${props => props?.display ? '40vw' : '0px'};;
   }
`

const IntroHeader = (props) => {


    return (
        <div className={classes.introHeader}>
            <div className={classes.leftIntro}>
            <h2>Mobile Engineer</h2>
            <h2>App / Web</h2>
            <h2>Software Engineer</h2>
            </div>

            <h1>{'Techno\nlogies'}</h1>
        </div>


    )
}

export default IntroHeader

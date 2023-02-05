import classes from './LinkItem.module.css'
import {Link} from "react-router-dom";
import {useState} from "react";

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

const LinkItem = (props) => {
    const {name = '', url, icon, qrUrl} = props || {}
    const [isShowQR, setIsShowQR] = useState(false)

    const onMouseEnter = (e) => {
        setIsShowQR(true);
    }

    const onMouseLeave = (e) => {
        setIsShowQR(false);
    }


    return (
        <>
            {
                name === 'Resume' ?
                    <Link onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}
                          className={classes.link} to={url} target="_blank" rel="noopener noreferrer">
                        <h3>{name}</h3>
                    </Link> :
                    <a onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}
                       className={`${classes.link} ${classes[name.toLowerCase()]}`} //Multiple classes for css
                       href={url}
                       target="_blank"
                       rel="noreferrer">
                        <h3>{name}</h3>
                        {qrUrl ?
                            <img src={require('../../assets/img/qr-code.png')} alt={'qrcode-icon'}/> :
                            null
                        }
                    </a>
            }

            {
                qrUrl ?
                    <QRImage
                        display={isShowQR}
                        src={qrUrl}
                        alt="qrcode"
                    />
                    : null
            }

        </>
    )
}

export default LinkItem

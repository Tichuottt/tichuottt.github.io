import {useParams} from "react-router-dom";
import classes from './Resume.module.css'

const file = require('../../assets/Hua_Cat_Luong-Mobile_Engineer.pdf')

const Resume = () => {
    const params = useParams()

    return (
        <div className={classes.resume}>
            <iframe
                src={file}
                type='application/pdf'
                title='title'
            />
        </div>
    )
}

export default Resume

import classes from './Contacts.module.css'
import SocialNetworkList from "../NetworkList/SocialNetworkList";
import WorkNetworkList from "../NetworkList/WorkNetworkList";

const Contacts = (props) => {
    return (
        <div ref={props?.contactsRef} className={classes.contacts}>
            <h1>{'Contacts'}</h1>

            <div className={classes.contactsContainer}>
                <SocialNetworkList/>
                <WorkNetworkList/>
            </div>
        </div>


    )
}

export default Contacts

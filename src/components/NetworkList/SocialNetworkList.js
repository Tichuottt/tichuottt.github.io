import LinkItem from "../LinkItem/LinkItem";
import {SOCIAL_URL} from "../../utils/Const";
import classes from './NetworkList.module.css'

const SocialNetworkList = (props) => {
    const {} = props || {}

    return (
        <div className={classes['network-list']}>
            {
                SOCIAL_URL.map((item, index) => {
                    const {name, url, icon, qrUrl} = item || {}
                    console.log(qrUrl, name)
                    return (
                        <LinkItem key={item?.url} name={name} url={url} qrUrl={qrUrl}/>
                    )
                })
            }
        </div>
    )
}

export default SocialNetworkList

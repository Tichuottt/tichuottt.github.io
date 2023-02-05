import LinkItem from "../LinkItem/LinkItem";
import {WORK_URL} from "../../utils/Const";

const WorkNetworkList = (props) => {
    return (
        <>
            {
                WORK_URL.map((item, index) => {
                    const {name, url, icon, qrUrl} = item || {}
                    return (
                        <LinkItem key={item?.url} name={name} url={url} qrUrl={qrUrl}/>
                    )
                })
            }
        </>
    )
}

export default WorkNetworkList

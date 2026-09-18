import {Motivation} from "./Motivation/Motivation.jsx";
import {InfoList} from "./InfoList/InfoList.jsx";
import {IntroText} from "./IntroText/IntroText.jsx";
import {TopicNavigation} from "../../pages/Topic/TopicNavigation/TopicNavigation.jsx";
import {Layout} from "antd";

const {Sider} = Layout;

export const RightSidebar = ({isTopic, topic, items}) => {
    return (
        <Sider className='right-sidebar' width={276}>
            <div className="right-sidebar-card">
                {isTopic
                    ? <TopicNavigation topic={topic} />
                    : <IntroText/>}
                <InfoList
                    items={items}
                />
            </div>
            <Motivation isTopic={isTopic} topic={topic} />
        </Sider>
    )
}
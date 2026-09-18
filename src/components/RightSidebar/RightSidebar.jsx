import {Motivation} from "./Motivation/Motivation.jsx";
import {InfoList} from "./InfoList/InfoList.jsx";
import {IntroText} from "./IntroText/IntroText.jsx";
import {TopicNavigation} from "../../pages/Topic/TopicNavigation/TopicNavigation.jsx";
import {Flex, Layout} from "antd";

const {Sider} = Layout;

export const RightSidebar = ({isTopic, topic, items}) => {
    return (
        <Sider className='right-sidebar' width={276}>
            <div>
                {isTopic
                    ? <Flex vertical={true} gap={'16px'}>
                        <div className="right-sidebar-card">
                            <TopicNavigation topic={topic}/>
                        </div>
                        <div className="right-sidebar-card advice">
                            <InfoList items={items}/>
                        </div>
                    </Flex>
                    : <div className="right-sidebar-card">
                        <IntroText/>
                        <InfoList items={items}/>
                    </div>
                }
            </div>
            <Motivation isTopic={isTopic} topic={topic}/>
        </Sider>
    )
}
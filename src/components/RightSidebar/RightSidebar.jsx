import {BookOutlined, CodeOutlined, ExportOutlined, InfoCircleOutlined, WarningOutlined} from "@ant-design/icons";
import {Motivation} from "./Motivation/Motivation.jsx";
import topics from "../../data/data.jsx";
import {InfoList} from "./InfoList/InfoList.jsx";
import {IntroText} from "./IntroText/IntroText.jsx";
import {TopicNavigation} from "../TopicNavigation/TopicNavigation.jsx";
import {Layout} from "antd";

const {Sider} = Layout;

export const RightSidebar = ({isTopic, topic}) => {
    return (
        <Sider className='right-sidebar' width={276}>
            <div className="right-sidebar-card">
                {isTopic
                    ? <TopicNavigation topic={topic} />
                    : <IntroText/>}
                <InfoList
                    items={[
                        [BookOutlined, `${topics.length} тем`],
                        [InfoCircleOutlined, "Краткие объяснения"],
                        [CodeOutlined, "Примеры кода"],
                        [WarningOutlined, "Подводные камни"],
                        [ExportOutlined, "Ссылки на документацию"],
                    ]}
                />
            </div>
            <Motivation isTopic={isTopic}/>
        </Sider>
    )
}
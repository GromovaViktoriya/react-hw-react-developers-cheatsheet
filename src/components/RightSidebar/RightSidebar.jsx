import Sider from "antd/es/layout/Sider.js";
import {BookOutlined, CodeOutlined, ExportOutlined, InfoCircleOutlined, WarningOutlined} from "@ant-design/icons";
import {ReactArt} from "../../assets/svg/ReactArt.jsx";
import {Motivation} from "./Motivation/Motivation.jsx";
import topics from "../../data/data.jsx";
import {InfoList} from "./InfoList/InfoList.jsx";

export const RightSidebar = () => {
    return (
        <Sider className='right-sidebar' width={276}>
            <div className="right-sidebar-card">
                <ReactArt className="right-sidebar-image" />
                <p className="right-sidebar-intro">
                    React — это не сложно, если знать, где искать нужную информацию.
                </p>
                <hr className="right-sidebar-divider" />
                <h2 className="right-sidebar-title">В этом разделе:</h2>
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
            <Motivation isTopic={false}/>
        </Sider>
    )
}
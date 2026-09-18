import {RightSidebar} from "../../components/RightSidebar/RightSidebar.jsx";
import {Layout} from "antd";
import {useState} from "react";
import {Search} from "../../components/Search/Search.jsx";
import {IntroHomeText} from "./IntroHomeText/IntroHomeText.jsx";
import {Catalog} from "./Catalog/Catalog.jsx";
import {BookOutlined, CodeOutlined, ExportOutlined, InfoCircleOutlined, WarningOutlined} from "@ant-design/icons";
import topics from "../../data/data.jsx";


const {Content} = Layout;

export const Home = () => {
    const [query, setQuery] = useState('')
    const [showAll, setShowAll] = useState(false);

    return (
        <>
            <Content className={`main${!showAll ? " main-collapsed" : ""}`}>
                <IntroHomeText/>
                <Search query={query} setQuery={setQuery}/>
                <Catalog query={query} setQuery={setQuery} showAll={showAll} setShowAll={setShowAll}/>
            </Content>
            <RightSidebar isTopic={false} items={[
                [BookOutlined, `${topics.length} тем`],
                [InfoCircleOutlined, "Краткие объяснения"],
                [CodeOutlined, "Примеры кода"],
                [WarningOutlined, "Подводные камни"],
                [ExportOutlined, "Ссылки на документацию"],
            ]}/>
        </>
    )
}
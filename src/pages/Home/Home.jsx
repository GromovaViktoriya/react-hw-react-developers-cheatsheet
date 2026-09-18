import {RightSidebar} from "../../components/RightSidebar/RightSidebar.jsx";
import {Layout} from "antd";
import {TopicCard} from "../../components/TopicCard/TopicCard.jsx";
import topics from "../../data/data.jsx";

const {Content} = Layout;

export const Home = () => {
    return (
        <>
            <Content className='main'>

                <div className='catalog-grid'>
                    {topics.map((topic) => {
                        return (
                            <TopicCard key={topic.id} topic={topic} />
                        )
                    })}
                </div>
            </Content>
            <RightSidebar isTopic={false}/>
        </>
    )
}
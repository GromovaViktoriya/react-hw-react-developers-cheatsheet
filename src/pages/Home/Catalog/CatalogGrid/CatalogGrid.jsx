import {TopicCard} from "../../TopicCard/TopicCard.jsx";
import {Empty} from "antd";

export const CatalogGrid = ({query, setQuery, topicsFound, displayedTopics}) => {
    return (
        <div className={`catalog-grid ${topicsFound.length === 0 ? 'empty' : ''}`}>
            {displayedTopics.length !== 0 && displayedTopics.map((topic) => {
                return (
                    <TopicCard key={topic.id} topic={topic} query={query} setQuery={setQuery}/>
                )
            })}
            {displayedTopics.length === 0 && <Empty description={'Тема не найдена'}/>}
        </div>
    )
}
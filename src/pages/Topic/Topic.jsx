import {Pitfalls} from "./Pitfalls/Pitfalls.jsx";
import {useParams} from "react-router";
import topics from "../../data/data.jsx";
import {RightSidebar} from "../../components/RightSidebar/RightSidebar.jsx";
import {PushpinOutlined} from "@ant-design/icons";
import {DocumentationLink} from "./DocumentationLink/DocumentationLink.jsx";
import {TopicHeader} from "./TopicHeader/TopicHeader.jsx";
import {TopicSection} from "./TopicSection/TopicSection.jsx";

export const Topic = () => {
    const {id} = useParams();

    const topic = topics.find((topic) => topic.id === id);

    return (
        <>
            <article className={`topic-page topic-${topic.group}`}>
                <TopicHeader topic={topic}/>
                <section className="topic-section" id="summary">
                    <h2 className="section-label">Кратко</h2>
                    <p className="topic-text">{topic.summary}</p>
                </section>

                {topic.sections.map(section => {
                    return (
                        <TopicSection section={section}/>
                    );
                })}

                <Pitfalls topic={topic}/>
                <DocumentationLink topic={topic}/>
            </article>
            <RightSidebar topic={topic}
                          isTopic={true}
                          items={topic.advices.map(advice => ([PushpinOutlined, advice]))}
            />
        </>
    )
}
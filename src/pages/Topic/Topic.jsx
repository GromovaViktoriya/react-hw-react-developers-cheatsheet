import {Pitfalls} from "./Pitfalls/Pitfalls.jsx";
import {Link, useNavigate, useParams} from "react-router";
import topics, {menuItems, topicGroups} from "../../data/data.jsx";
import {RightSidebar} from "../../components/RightSidebar/RightSidebar.jsx";
import {ArrowLeftOutlined, ExclamationOutlined} from "@ant-design/icons";
import {DocumentationLink} from "./DocumentationLink/DocumentationLink.jsx";
import {ArticleBlock} from "./ArticleBlock/ArticleBlock.jsx";

export const Topic = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const topic = topics.find((topic) => topic.id === id);

    const groupData = menuItems.find((menuItem) => menuItem.key === topic.group);
    const icon = groupData?.children?.find(child => child.key === topic.id)?.icon;

    const handleOnClick = () => {
        navigate("/")
    }


    return (
        <>
            <article className={`topic-page topic-${topic.group}`}>
                <header className="topic-header">
                    <Link className="back-link"
                          to="/"
                          onClick={handleOnClick}
                    >
                        <ArrowLeftOutlined/> На главную
                    </Link>
                    <div className="topic-title-row">
                    <span className="topic-title-icon">
                          {icon}
                    </span>
                        <div className="topic-heading">
                            <p className="topic-eyebrow">
                                {topicGroups.find((group) => group.id === topic.group).title}
                            </p>
                            <h1 className="title-page">{topic.title}</h1>
                            <p className="topic-subtitle">
                                {topic.description}
                            </p>
                        </div>
                    </div>
                </header>

                <section className="topic-section">
                    <h2 className="section-label">Кратко</h2>
                    <p className="topic-text">{topic.summary}</p>
                </section>

                {topic.sections.map(section => {
                    return (
                        <section className="topic-section" id={id} key={section.id} aria-labelledby={id + '-heading'}>
                            <h2>{section.title}</h2>
                            {section.blocks.map(block => (
                                <ArticleBlock key={block.id} block={block}/>
                            ))}
                        </section>
                    );
                })}

                <Pitfalls topic={topic}/>
                <DocumentationLink topic={topic}/>
            </article>
            <RightSidebar topic={topic}
                          isTopic={true}
                          items={topic.advices.map(advice => ([ExclamationOutlined, advice]))}
            />
        </>
    )
}
import {ArticleBlock} from "../ArticleBlock/ArticleBlock.jsx";

export const TopicSection = ({section}) => {
    return (
        <section className="topic-section" id={section.id}>
            <h2>{section.title}</h2>
            {section.blocks.map(block => (
                <ArticleBlock key={block.id} block={block}/>
            ))}
        </section>
    )
}
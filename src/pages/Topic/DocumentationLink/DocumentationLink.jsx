import {ArrowRightOutlined, ExportOutlined} from "@ant-design/icons";

export const DocumentationLink = ({topic}) => {
    return (
        <section className="topic-section" id='documentation'>
            <h2 className="section-label">Документация</h2>
            <a
                className="docs-link"
                href={topic.documentation}
                target="_blank"
                rel="noreferrer"
            >
                <ExportOutlined className="ui-icon"/>
                <span>{`${topic.title} — документация`}</span>
                <ArrowRightOutlined className="ui-icon"/>
            </a>
        </section>
    )
}
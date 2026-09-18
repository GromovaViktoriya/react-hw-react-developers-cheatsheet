import {ArrowRightOutlined, ExportOutlined} from "@ant-design/icons";
import {Link} from "react-router";

export const DocumentationLink = ({topic}) => {
    return (
        <section className="topic-section">
            <h2 className="section-label">Документация</h2>
            <Link
                className="docs-link"
                to={topic.documentation}
                target="_blank"
                rel="noreferrer"
            >
                <ExportOutlined className="ui-icon" aria-hidden="true"/>
                <span>{`${topic.title} — документация`}</span>
                <ArrowRightOutlined className="ui-icon" aria-hidden="true"/>
            </Link>
        </section>
    )
}
import {useLocation} from "react-router";


export const TopicNavigation = ({topic}) => {
    const { hash } = useLocation();
    const currentHash = hash || "#summary";

    return (
        <nav className="topic-navigation-card">
            <h2 className="topic-navigation-title">На этой странице</h2>
            <ul className="topic-navigation-list">
                <li>
                    <a className={`topic-navigation-link ${currentHash === "#summary" ? "active" : ""}`} href="#summary">
                        Кратко
                    </a>
                </li>
                {topic?.sections?.map((section) => (
                    <li key={section.id}>
                        <a className={`topic-navigation-link ${currentHash === `#${section.id}` ? "active" : ""}`}
                            href={`#${section.id}`}>{section.title}
                        </a>
                    </li>
                ))}
                <li>
                    <a className={`topic-navigation-link ${currentHash === "#documentation" ? "active" : ""}`} href="#documentation">
                        Документация
                    </a>
                </li>
            </ul>
        </nav>
    )
}
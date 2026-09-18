import {sectionLinks} from "../../../data/data.jsx";


export const TopicNavigation = () => {
    return (
        <nav className="topic-navigation-card">
            <h2 className="topic-navigation-title">На этой странице</h2>
            <ul className="topic-navigation-list">
                {sectionLinks.map(([id, title]) => (
                    <li key={id}>
                        <a
                            className="topic-navigation-link"
                            href={`#${id}`}
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
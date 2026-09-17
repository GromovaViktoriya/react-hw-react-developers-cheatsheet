export const InfoList = ({items}) => {
    return (
        <ul className="right-sidebar-list">
            {items.map(([Icon, text]) => (
                <li className="right-sidebar-list-item" key={text}>
                    <Icon className="right-sidebar-list-icon" aria-hidden="true"/>
                    <span>{text}</span>
                </li>
            ))}
        </ul>
    );
}
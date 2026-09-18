import {WarningOutlined} from "@ant-design/icons";

export const Pitfalls = ({topic}) => {
    return (
        <div className="warning">
      <span className="warning-icon">
        <WarningOutlined/>
      </span>
            <div className="warning-content">
                <h2 className="warning-title">
                    Подводные камни
                </h2>
                <ul className="warning-list">
                    {topic.pitfalls.map((pitfall, i) => {
                        return (
                            <li key={i}>
                                {pitfall}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
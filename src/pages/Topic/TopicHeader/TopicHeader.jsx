import {Link} from "react-router";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {menuItems, topicGroups} from "../../../data/data.jsx";

export const TopicHeader = ({topic})=>{
    const groupData = menuItems.find((menuItem) => menuItem.key === topic.group);
    const icon = groupData?.children?.find(child => child.key === topic.id)?.icon;

    return (
        <header className="topic-header">
            <Link className="back-link" to="/">
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
    )
}
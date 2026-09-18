import {Card} from "antd";
import {menuItems, topicGroups} from "../../data/data.jsx";
import {Link, useNavigate} from "react-router";
import {ArrowRightOutlined} from "@ant-design/icons";

export const TopicCard = ({ topic }) => {
    const navigate = useNavigate();

    const category = topicGroups.find((group) => group.id === topic.group)?.title;
    const groupData = menuItems.find((menuItem) => menuItem.key === topic.group);
    const icon = groupData?.children?.find(child => child.key === topic.id)?.icon;

    const HandleClick = () => {
        navigate(`?topic=${topic.id}`);
    }

    return (
        <Card
            className={`topic-card topic-${topic.group}`}
            classNames={{ body: "topic-card-body" }}
        >
            <div className="topic-card-top">
        <span className="topic-icon">
         {icon}
        </span>
                <span className="topic-category">{category}</span>
            </div>
            <h3 className="topic-card-title">{topic.title}</h3>
            <p className="topic-card-description">{topic.description}</p>
            <Link
                className="topic-link"
                to={`?topic=${topic.id}`}
                aria-label={`Подробнее: ${topic.title}`}
                onClick={HandleClick}
            >
                Подробнее{" "}
                <ArrowRightOutlined className="topic-link-icon" aria-hidden="true" />
            </Link>
        </Card>
    );
}
import {BulbOutlined, HeartFilled} from "@ant-design/icons";

export const Motivation = ({isTopic, topic}) => {
    return (
        <div className="motivation">
            <BulbOutlined className="motivation-icon" aria-hidden="true"/>
            <div>
                <p className="motivation-text">
                    {isTopic
                        ? topic.motivation
                        : "Хороший разработчик не помнит всё — он знает, где посмотреть."}
                </p>
                <p className="motivation-text">
                    {isTopic ? "Чистой архитектуры!" : "Удачи в коде!"}{" "}
                    <HeartFilled className="ui-icon" aria-hidden="true"/>
                </p>
            </div>
        </div>
    );
}
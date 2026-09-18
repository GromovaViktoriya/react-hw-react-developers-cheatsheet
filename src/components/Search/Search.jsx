import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";


export const Search = ({query, setQuery}) => {

    return (
        <div className="home-search" role="search">
            <Input
                id="topic-search"
                size="large"
                placeholder="Поиск по темам…"
                prefix={<SearchOutlined/>}
                allowClear
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
        </div>
    )
}
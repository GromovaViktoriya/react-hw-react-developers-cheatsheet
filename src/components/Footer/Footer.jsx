import {GithubOutlined} from "@ant-design/icons";
import {Typography} from "antd";

export const Footer = ()=>{
    return (
        <footer className="footer">
            <a
                href="https://github.com/GromovaViktoriya/react-hw-react-developers-cheatsheet"
                target="_blank"
                rel="noreferrer"
                style={{color: 'inherit'}}
                className="github-link"
            >
                <GithubOutlined style={{fontSize: "30px", cursor: "pointer", transition: "color 0.3s"}}
                                className="github-icon"/>
            </a>
            <Typography.Text className='footer-text'>Redev course ©2026 Created by Viktoriya Gromova using Ant Design</Typography.Text>
        </footer>
    )
}
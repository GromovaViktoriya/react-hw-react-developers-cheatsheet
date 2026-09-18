import {CodeBlock} from "../CodeBlock/CodeBlock.jsx";

export const ArticleBlock = ({block}) => {
    {
        switch (block.type) {
            case 'paragraph':
                return <p>{block.text}</p>;
            case 'code':
                return <CodeBlock code={block.code} language={block.language}/>;
            case 'list':
                return <ul>{block.items.map((text, index) => <li key={index}>{text}</li>)}</ul>;
            default:
                return null;
        }
    }

}
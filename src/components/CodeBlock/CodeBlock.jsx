import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";
import {oneDark, oneLight} from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeBlock = ({code, isDark})=>{
    return (
        <div className="code-content">
            <div className="code-header">
                <span>JSX</span>
            </div>
            <SyntaxHighlighter
                className='code-block'
                language="jsx"
                style={isDark ? oneDark : oneLight}
                showLineNumbers={false}
                customStyle={{
                    margin: 0,
                    padding: '20px',
                    background: 'transparent',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    fontFamily: 'JetBrains Mono, monospace',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
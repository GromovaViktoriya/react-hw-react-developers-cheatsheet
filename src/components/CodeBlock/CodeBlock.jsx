import {oneDark, oneLight} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Typography} from "antd";
import {PrismLight} from "react-syntax-highlighter";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

PrismLight.registerLanguage('jsx', jsx);
PrismLight.registerLanguage('javascript', javascript);
PrismLight.registerLanguage('html', markup);
PrismLight.registerLanguage('bash', bash);

export const CodeBlock = ({code, language, isDark})=>{
    return (
        <div className="code-content">
            <div className="code-header">
                <span>JSX</span>
                <Typography.Text
                    copyable={{
                        text: code,
                        tooltips: ['Скопировать', 'Скопировано'],
                    }}
                >
                    Копировать
                </Typography.Text>
            </div>
            <PrismLight
                className='code-block'
                language={language}
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
            </PrismLight >
        </div>
    )
}
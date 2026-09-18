import {
    ApiOutlined,
    AppstoreAddOutlined,
    BlockOutlined,
    BuildOutlined,
    CodeOutlined,
    CompassOutlined,
    DashboardOutlined,
    DatabaseOutlined,
    FormOutlined,
    HourglassOutlined,
    InboxOutlined,
    LinkOutlined,
    PartitionOutlined,
    PushpinOutlined,
    RocketOutlined,
    ShareAltOutlined,
    SlidersOutlined,
    SyncOutlined,
    ThunderboltOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';

export const sectionLinks = [
    ["summary", "Кратко"],
    ["example", "Пример"],
    ["pitfalls", "Подводные камни"],
    ["documentation", "Документация"],
];

export const menuItems = [
    {
        key: 'project',
        label: 'Project',
        children: [
            { key: 'project-architecture', icon: <BuildOutlined />, label: 'Структура проекта' },
        ],
    },
    {
        key: 'basic',
        label: 'React basics',
        children: [
            { key: 'components', icon: <BlockOutlined />, label: 'Компоненты' },
            { key: 'jsx', icon: <CodeOutlined />, label: 'JSX и Fragment' },
            { key: 'props-and-children', icon: <ApiOutlined />, label: 'Props' },
            { key: 'events', icon: <ThunderboltOutlined />, label: 'События' },
            { key: 'lists-and-keys', icon: <UnorderedListOutlined />, label: 'Списки и key' },
            { key: 'render-and-reconciliation', icon: <PartitionOutlined />, label: 'Virtual DOM' },
        ],
    },
    {
        key: 'hooks',
        label: 'Hooks',
        children: [
            { key: 'use-state', icon: <InboxOutlined />, label: 'Состояние и useState' },
            { key: 'use-effect', icon: <SyncOutlined />, label: 'useEffect' },
            { key: 'use-ref', icon: <PushpinOutlined />, label: 'useRef' },
            { key: 'use-reducer', icon: <SlidersOutlined />, label: 'useReducer' },
            { key: 'context', icon: <ShareAltOutlined />, label: 'Context и useContext' },
            { key: 'use-callback', icon: <LinkOutlined />, label: 'useCallback' },
        ],
    },
    {
        key: 'advanced',
        label: 'Advanced',
        children: [
            { key: 'react-memo', icon: <DashboardOutlined />, label: 'Оптимизация' },
            { key: 'lazy-and-suspense', icon: <HourglassOutlined />, label: 'Lazy и Suspense' },
            { key: 'optimistic-updates', icon: <RocketOutlined />, label: 'Optimistic updates' },
            { key: 'hoc', icon: <AppstoreAddOutlined />, label: 'HOC' },
        ],
    },
    {
        key: 'routing',
        label: 'Routing',
        children: [
            { key: 'router-basics', icon: <CompassOutlined />, label: 'React Router' },
        ],
    },
    {
        key: 'forms',
        label: 'Forms',
        children: [
            { key: 'controlled-forms', icon: <FormOutlined />, label: 'Формы' },
        ],
    },
    {
        key: 'storage',
        label: 'Storage',
        children: [
            { key: 'web-storage', icon: <DatabaseOutlined />, label: 'Хранение данных' },
        ],
    },
];

export const topicGroups = [
    { id: "project", title: "Start of project", order: 1 },
    { id: "basic", title: "React basics", order: 2 },
    { id: "hooks", title: "Hooks", order: 3 },
    { id: "advanced", title: "Advanced", order: 4 },
    { id: "routing", title: "Routing", order: 5 },
    { id: "forms", title: "Forms", order: 6 },
    { id: "storage", title: "Storage", order: 7 }
];

export const topics = [
    {
        id: "project-architecture",
        title: "Структура проекта",
        group: "project",
        order: 1,
        description: "Структура проекта — это порядок, по которому код и другие файлы разложены по папкам.",
        pitfalls: [
            <>Не добавляй <strong>node_modules</strong> в Git: библиотеки можно установить заново.</>,
            <>Сохраняй <strong>package-lock.json</strong> вместе с проектом, чтобы версии библиотек можно было восстановить.</>,
            <>В Vite файл <strong>index.html</strong> находится в корне проекта, а не в public.</>,
            <>Настройки <strong>VITE_</strong> из .env доступны в браузере. Пароли и секретные ключи туда помещать нельзя.</>
        ],
        documentation: "https://vite.dev/guide/",
        advices: [
            "Называй папки и файлы по их назначению.",
            "Начни с нескольких нужных папок и расширяй структуру по мере работы."
        ],
        motivation: "Если ты понимаешь, где искать компонент, стили и данные, структура уже помогает тебе работать.",
        summary: "Когда у каждого файла есть своё место, работать с проектом проще. Посмотрим, где начинается приложение и куда складывать страницы, компоненты и данные.",
        sections: [
            {
                id: "folders",
                title: "Что где лежит",
                blocks: [
                    {
                        id: "folders-1",
                        type: "paragraph",
                        text: <>У React нет <strong>обязательного набора папок</strong>. Для небольшой шпаргалки достаточно структуры, в которой названия сразу подсказывают назначение файлов.</>
                    },
                    {
                        id: "folders-2",
                        type: "code",
                        language: "text",
                        caption: "Пример папок внутри src",
                        code: `src/
  components/   # Кнопки, меню, блоки кода
  pages/        # Главная страница и страница темы
  data/         # Массив тем
  styles/       # CSS
  assets/       # Изображения и шрифты
  App.jsx       # Собирает приложение
  main.jsx      # Запускает React`
                    },
                    {
                        id: "folders-3",
                        type: "paragraph",
                        text: <>В <strong>components</strong> попадают части, которые можно использовать повторно. В <strong>pages</strong> — целые экраны, собранные из этих частей. Когда появится общий хук или контекст, для них можно добавить отдельные папки.</>
                    }
                ]
            },
            {
                id: "root-files",
                title: "Файлы рядом с src",
                blocks: [
                    {
                        id: "root-files-1",
                        type: "list",
                        items: [
                            <><strong>package.json</strong> — список библиотек и команды запуска.</>,
                            <><strong>package-lock.json</strong> — точные версии зависимостей для npm.</>,
                            <><strong>index.html</strong> — HTML-страница, в которую подключается приложение.</>,
                            <><strong>public</strong> — файлы, которые сборщик копирует без обработки.</>,
                            <><strong>node_modules</strong> — установленные библиотеки; эта папка не хранится в Git.</>
                        ]
                    },
                    {
                        id: "root-files-2",
                        type: "paragraph",
                        text: <>В Vite <strong>index.html</strong> находится в корне проекта. Внутри него нужен элемент, в котором React будет показывать интерфейс.</>
                    },
                    {
                        id: "root-files-3",
                        type: "code",
                        language: "html",
                        caption: "Контейнер в index.html",
                        code: "<div id=\"root\"></div>"
                    }
                ]
            },
            {
                id: "entry",
                title: "Как приложение попадает на страницу",
                blocks: [
                    {
                        id: "entry-1",
                        type: "paragraph",
                        text: <><strong>main.jsx</strong> находит контейнер и передаёт React главный компонент. <strong>createRoot</strong> вызывается при запуске приложения.</>
                    },
                    {
                        id: "entry-2",
                        type: "code",
                        language: "jsx",
                        caption: "src/main.jsx",
                        code: `import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('root');
createRoot(container).render(<App />);`
                    },
                    {
                        id: "entry-3",
                        type: "paragraph",
                        text: <><strong>App.jsx</strong> описывает содержимое приложения. Для начала ему достаточно одного заголовка.</>
                    },
                    {
                        id: "entry-4",
                        type: "code",
                        language: "jsx",
                        caption: "src/App.jsx",
                        code: `export default function App() {
  return <h1>React Cheatsheet</h1>;
}`
                    }
                ]
            },
            {
                id: "imports",
                title: "Как связать файлы",
                blocks: [
                    {
                        id: "imports-1",
                        type: "paragraph",
                        text: <>Компонент <strong>экспортируют</strong> из своего файла и <strong>импортируют</strong> там, где хотят показать. Путь с <code>./</code> начинается от текущей папки.</>
                    },
                    {
                        id: "imports-2",
                        type: "code",
                        language: "jsx",
                        caption: "src/components/Header.jsx",
                        code: `export default function Header() {
  return <header>React Cheatsheet</header>;
}`
                    },
                    {
                        id: "imports-3",
                        type: "code",
                        language: "jsx",
                        caption: "src/App.jsx",
                        code: `import Header from './components/Header.jsx';

export default function App() {
  return <Header />;
}`
                    }
                ]
            },
            {
                id: "commands",
                title: "Как запустить проект",
                blocks: [
                    {
                        id: "commands-1",
                        type: "paragraph",
                        text: <>В готовом проекте на Vite сначала <strong>устанавливают библиотеки</strong>, затем запускают <strong>сервер разработки</strong>. Команда сборки создаёт файлы для публикации.</>
                    },
                    {
                        id: "commands-2",
                        type: "code",
                        language: "bash",
                        caption: "Команды в терминале из папки проекта",
                        code: `npm install
npm run dev

# Когда проект готов к публикации:
npm run build`
                    },
                    {
                        id: "commands-3",
                        type: "paragraph",
                        text: <>Названия команд зависят от <strong>scripts</strong> в package.json. Эти команды подходят для стандартного проекта Vite.</>
                    }
                ]
            }
        ]
    },
    {
        id: "components",
        title: "Компоненты",
        group: "basic",
        order: 1,
        description: "Компоненты — отдельные части интерфейса, которые можно создавать и использовать повторно.",
        pitfalls: [
            <>Имя компонента начинай с <strong>заглавной буквы</strong>, чтобы React отличал его от HTML-тега.</>,
            <>Используй компонент через <strong>JSX</strong>, а не вызывай его как обычную функцию.</>,
            <>Не объявляй один компонент <strong>внутри функции другого</strong>: это может приводить к потере состояния.</>,
            <>Во время создания разметки <strong>не изменяй переданные данные</strong> и внешние переменные.</>
        ],
        documentation: "https://react.dev/learn/your-first-component",
        advices: [
            "Выделяй компонент, когда у части интерфейса есть понятная самостоятельная задача.",
            "Давай имена по назначению: из названия должно быть понятно, что отображает компонент."
        ],
        motivation: "Раздели один экран на несколько понятных частей — так проще и писать код, и разбираться в нём.",
        summary: "Страницу удобно собирать из небольших частей: заголовка, меню, карточки темы. В React такие части называют компонентами.",
        sections: [
            {
                id: "function",
                title: "Компонент — функция с разметкой",
                blocks: [
                    {
                        id: "function-1",
                        type: "paragraph",
                        text: <>Функциональный компонент возвращает <strong>описание интерфейса</strong>. Обычно его записывают с помощью <strong>JSX</strong> — синтаксиса, похожего на HTML внутри JavaScript.</>
                    },
                    {
                        id: "function-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Greeting() {
  return <h1>Привет, React!</h1>;
}`
                    },
                    {
                        id: "function-3",
                        type: "paragraph",
                        text: <>Название начинается с <strong>заглавной буквы</strong>. Так React отличает <code>Greeting</code> от обычного HTML-тега.</>
                    }
                ]
            },
            {
                id: "composition",
                title: "Собираем страницу",
                blocks: [
                    {
                        id: "composition-1",
                        type: "paragraph",
                        text: <>Чтобы показать компонент, используем его как <strong>JSX-тег</strong>. Один компонент можно включить в другой. Тот, который включает, называют <strong>родительским</strong>. Вложенный — <strong>дочерним</strong>.</>
                    },
                    {
                        id: "composition-2",
                        type: "code",
                        language: "jsx",
                        caption: "Используем Greeting из предыдущего примера",
                        code: `function App() {
  return (
    <main>
      <Greeting />
      <p>Здесь будет шпаргалка.</p>
    </main>
  );
}`
                    },
                    {
                        id: "composition-3",
                        type: "paragraph",
                        text: <>Пиши компонент через JSX. React сам управляет его вызовами, <strong>состоянием и обновлениями</strong>.</>
                    }
                ]
            },
            {
                id: "stateless",
                title: "Без собственного состояния",
                blocks: [
                    {
                        id: "stateless-1",
                        type: "paragraph",
                        text: <><strong>Stateless-компонент</strong> не хранит свои изменяемые данные. Он может получать <strong>props</strong> и показывать их. Это не делает его «застывшим»: родитель может передать другое значение.</>
                    },
                    {
                        id: "stateless-2",
                        type: "code",
                        language: "jsx",
                        caption: "Имя приходит от родителя",
                        code: `function Greeting({ name }) {
  return <h2>Привет, {name}!</h2>;
}`
                    }
                ]
            },
            {
                id: "stateful",
                title: "С собственным состоянием",
                blocks: [
                    {
                        id: "stateful-1",
                        type: "paragraph",
                        text: <><strong>Stateful-компонент</strong> хранит <strong>state</strong> — свою память. После изменения state React обновляет интерфейс. У функционального компонента для этого есть хуки.</>
                    },
                    {
                        id: "stateful-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Нажатий: {count}
    </button>
  );
}`
                    },
                    {
                        id: "stateful-3",
                        type: "paragraph",
                        text: <>И stateless, и stateful могут быть обычными функциями. Классовые компоненты тоже поддерживаются, но для нового кода обычно используют <strong>функции с хуками</strong>.</>
                    }
                ]
            },
            {
                id: "purity",
                title: "Одна понятная задача",
                blocks: [
                    {
                        id: "purity-1",
                        type: "paragraph",
                        text: <>Хороший компонент легко описать <strong>одним предложением</strong>. Если он одновременно рисует меню, редактирует профиль и загружает список товаров, его стоит разделить.</>
                    },
                    {
                        id: "purity-2",
                        type: "paragraph",
                        text: <>При рендере компонент читает данные и описывает интерфейс. <strong>Изменения состояния</strong> выполняются через setter, а действия пользователя обрабатываются в специальных <strong>функциях-обработчиках</strong>.</>
                    }
                ]
            }
        ]
    },
    {
        id: "jsx",
        title: "JSX и Fragment",
        group: "basic",
        description: "JSX описывает разметку внутри JavaScript, а Fragment объединяет соседние элементы без лишней обёртки.",
        pitfalls: [
            <>JSX похож на HTML, но использует правила JavaScript и свои <strong>названия свойств</strong> (например, className).</>,
            <><strong>Fragment</strong> не добавляет DOM-элемент: на него нельзя повесить класс или стили.</>,
            <>Если группе в списке нужен <strong>key</strong>, используй полную запись <code>&lt;Fragment key=...&gt;</code>.</>
        ],
        advices: [
            "Отделяй сложные вычисления от JSX, чтобы разметку было легче читать.",
            "Добавляй div, когда он нужен для структуры или оформления; для простой группировки подходит Fragment."
        ],
        motivation: "Попробуй изменить одну переменную и посмотри, как JSX подставит её в разметку.",
        documentation: "https://react.dev/learn/writing-markup-with-jsx",
        order: 2,
        summary: "Компоненту нужно описать, что появится на странице. Для этого обычно используют JSX — запись, похожую на HTML, в которую можно подставлять JavaScript-значения.",
        sections: [
            {
                id: "jsx",
                title: "Немного о JSX",
                blocks: [
                    {
                        id: "jsx-1",
                        type: "paragraph",
                        text: <>В JSX можно подставлять JavaScript-значения через <strong>фигурные скобки</strong>. Для CSS-класса используется <strong>className</strong>. Соседнюю разметку можно объединить пустыми тегами <strong>Fragment</strong>.</>
                    },
                    {
                        id: "jsx-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function PageTitle() {
  const title = 'Компоненты';

  return (
    <>
      <h1 className="page-title">{title}</h1>
      <p>Начнём с небольшой функции.</p>
    </>
  );
}`
                    }
                ]
            },
            {
                id: "fragment",
                title: "Fragment: группа без лишнего div",
                blocks: [
                    {
                        id: "fragment-1",
                        type: "paragraph",
                        text: <>Чтобы вернуть несколько соседних JSX-элементов, их можно обернуть <strong>пустыми тегами</strong> <code>&lt;&gt;&lt;/&gt;</code>. В DOM отдельной обёртки не появится.</>
                    },
                    {
                        id: "fragment-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Intro() {
  return (
    <>
      <h1>React</h1>
      <p>Шпаргалка для изучения.</p>
    </>
  );
}`
                    }
                ]
            }
        ]
    },
    {
        id: "props-and-children",
        title: "Props",
        group: "basic",
        order: 3,
        description: "Props — это данные, которые родительский компонент передаёт дочернему.",
        pitfalls: [
            <>Нельзя <strong>изменять props напрямую</strong>, в том числе поля переданных объектов.</>,
            <>Данные передаются <strong>сверху вниз</strong> (от родителя к ребёнку). Чтобы ребёнок сообщил об изменении, нужна переданная ему функция.</>,
            <>Обновление props может обновить интерфейс даже у компонента <strong>без собственного состояния</strong>.</>
        ],
        documentation: "https://react.dev/learn/passing-props-to-a-component",
        advices: [
            "Передавай компоненту только нужные ему данные.",
            "Называй функции в props по действию, о котором они сообщают."
        ],
        motivation: "Попробуй использовать один компонент с разными данными — это и есть основа переиспользования.",
        summary: "До этого компонент мог показывать текст, записанный прямо внутри него. Props позволяют передать данные снаружи: один компонент — разные имена, подписи и настройки.",
        sections: [
            {
                id: "concept",
                title: "Props — аргументы компонента",
                blocks: [
                    {
                        id: "concept-1",
                        type: "paragraph",
                        text: <>Обычная JavaScript-функция получает аргументы. Компонент получает <strong>один объект props</strong>. Родитель передаёт значения, а дочерний компонент использует их в разметке.</>
                    }
                ]
            },
            {
                id: "passing",
                title: "Передаём и читаем",
                blocks: [
                    {
                        id: "passing-1",
                        type: "paragraph",
                        text: <>В родительском компоненте данные передаются как <strong>атрибуты JSX</strong>. Здесь <code>name</code> — название prop, а <code>Павел</code> — его значение.</>
                    },
                    {
                        id: "passing-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function App() {
  return <Greeting name="Павел" />;
}`
                    },
                    {
                        id: "passing-3",
                        type: "paragraph",
                        text: <>Greeting получает <strong>объект props</strong>. Имя читается из его свойства <code>name</code>.</>
                    },
                    {
                        id: "passing-4",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Greeting(props) {
  return <h1>Привет, {props.name}!</h1>;
}`
                    }
                ]
            },
            {
                id: "destructuring",
                title: "Достаём нужные свойства",
                blocks: [
                    {
                        id: "destructuring-1",
                        type: "paragraph",
                        text: <>Можно сразу перечислить нужные свойства в параметрах функции. Это <strong>деструктуризация</strong>: обычный способ разобрать объект в JavaScript.</>
                    },
                    {
                        id: "destructuring-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Profile({ name, role }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
    </article>
  );
}`
                    },
                    {
                        id: "destructuring-3",
                        type: "code",
                        language: "jsx",
                        caption: "Внутри JSX родителя",
                        code: `<>
  <Profile name="Анна" role="Дизайнер" />
  <Profile name="Максим" role="Разработчик" />
</>`
                    },
                    {
                        id: "destructuring-4",
                        type: "paragraph",
                        text: <>Разметка одна и та же. Меняются только данные, которые <strong>передал родитель</strong>.</>
                    }
                ]
            },
            {
                id: "values",
                title: "Строки, числа и boolean",
                blocks: [
                    {
                        id: "values-1",
                        type: "paragraph",
                        text: <>Строку можно написать в кавычках. Для чисел, boolean и других JavaScript-значений нужны <strong>фигурные скобки</strong>.</>
                    },
                    {
                        id: "values-2",
                        type: "code",
                        language: "jsx",
                        caption: "Передача трёх разных типов значений",
                        code: "<Profile name=\"Анна\" experience={3} isAvailable={true} />"
                    },
                    {
                        id: "values-3",
                        type: "paragraph",
                        text: <>Boolean удобно использовать в <strong>условии</strong>. Компонент выбирает нужный текст по переданному значению.</>
                    },
                    {
                        id: "values-4",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function StatusBadge({ isAvailable }) {
  return (
    <span>{isAvailable ? 'Доступен для проекта' : 'Сейчас занят'}</span>
  );
}`
                    }
                ]
            },
            {
                id: "objects",
                title: "Передаём объект",
                blocks: [
                    {
                        id: "objects-1",
                        type: "paragraph",
                        text: <>Несколько связанных значений можно передать <strong>одним объектом</strong>. Снаружи фигурные скобки включают JavaScript в JSX, внутри — создают сам объект.</>
                    },
                    {
                        id: "objects-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: "<Location location={{ city: 'Алматы', country: 'Казахстан' }} />"
                    },
                    {
                        id: "objects-3",
                        type: "code",
                        language: "jsx",
                        caption: "Читаем свойства полученного объекта",
                        code: `function Location({ location }) {
  return <p>{location.city}, {location.country}</p>;
}`
                    }
                ]
            },
            {
                id: "forward",
                title: "Передаём дальше",
                blocks: [
                    {
                        id: "forward-1",
                        type: "paragraph",
                        text: <>Полученный prop можно передать <strong>ещё одному компоненту</strong>. Каждый уровень сам решает, кому нужны эти данные.</>
                    },
                    {
                        id: "forward-2",
                        type: "code",
                        language: "jsx",
                        caption: "StatusBadge объявлен выше",
                        code: `function UserCard({ name, isAvailable }) {
  return (
    <article>
      <h2>{name}</h2>
      <StatusBadge isAvailable={isAvailable} />
    </article>
  );
}`
                    }
                ]
            },
            {
                id: "children",
                title: "children — содержимое внутри",
                blocks: [
                    {
                        id: "children-1",
                        type: "paragraph",
                        text: <>Всё между открывающим и закрывающим тегами компонента приходит через <strong>children</strong>. Так удобно делать обёртки: карточка отвечает за оформление, родитель — за её содержимое.</>
                    },
                    {
                        id: "children-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Card({ children }) {
  return <article className="card">{children}</article>;
}`
                    },
                    {
                        id: "children-3",
                        type: "code",
                        language: "jsx",
                        caption: "Использование внутри JSX",
                        code: `<Card>
  <h2>Props</h2>
  <p>Передача данных между компонентами.</p>
</Card>`
                    }
                ]
            },
            {
                id: "readonly",
                title: "Props только для чтения",
                blocks: [
                    {
                        id: "readonly-1",
                        type: "paragraph",
                        text: <>Компонент использует полученные данные, но <strong>не изменяет их</strong>. Это относится и к полям объектов: такой объект может использоваться ещё где-то в приложении.</>
                    },
                    {
                        id: "readonly-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Greeting({ user }) {
  // Не делаем: user.name = 'Другое имя';
  return <h1>Привет, {user.name}!</h1>;
}`
                    },
                    {
                        id: "readonly-3",
                        type: "paragraph",
                        text: <>При этом props могут обновляться: родитель передаст <strong>новое значение</strong>, и дочерний компонент покажет его. Для изменяемых данных в React есть <strong>state</strong>.</>
                    }
                ]
            }
        ]
    },
    {
        id: "events",
        title: "События",
        group: "basic",
        order: 4,
        description: "События позволяют приложению отвечать на действия пользователя.",
        pitfalls: [
            <>Передавай обработчик <strong>как функцию</strong>. Вызов функции при создании разметки не ждёт действия пользователя.</>,
            <><strong>preventDefault</strong> и <strong>stopPropagation</strong> выполняют разные задачи и не заменяют друг друга.</>,
            <>Обычная HTML-кнопка внутри формы может отправлять её. Для других действий указывай <code>type="button"</code>.</>,
            <>У Checkbox текущее состояние читается через <strong>checked</strong>, а не через текстовое value.</>
        ],
        documentation: "https://react.dev/learn/responding-to-events",
        advices: [
            "Выноси длинную логику в отдельный обработчик с понятным именем.",
            "Проверяй, что форму можно отправить не только кнопкой, но и клавишей Enter."
        ],
        motivation: "Начни с одного действия и одной реакции интерфейса. Остальные события работают по тому же принципу.",
        summary: "Интерфейс становится живым, когда отвечает на действия: нажатие кнопки, ввод текста, отправку формы. Для этого компонентам нужны обработчики событий.",
        sections: [
            {
                id: "click",
                title: "Нажатие кнопки",
                blocks: [
                    {
                        id: "click-1",
                        type: "paragraph",
                        text: <>Обработчик — функция, которую React вызовет при событии. Для клика она передаётся в <strong>onClick</strong>.</>
                    },
                    {
                        id: "click-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function SaveButton() {
  function handleClick() {
    console.log('Нажали «Сохранить»');
  }

  return <button onClick={handleClick}>Сохранить</button>;
}`
                    },
                    {
                        id: "click-3",
                        type: "paragraph",
                        text: <>Передаём <strong>саму функцию</strong>, без круглых скобок вызова. Тогда она выполнится после клика.</>
                    }
                ]
            },
            {
                id: "arguments",
                title: "Если нужно передать значение",
                blocks: [
                    {
                        id: "arguments-1",
                        type: "paragraph",
                        text: <>Короткая <strong>стрелочная функция</strong> позволяет вызвать обработчик с нужным аргументом.</>
                    },
                    {
                        id: "arguments-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function TopicButton() {
  function selectTopic(id) {
    console.log('Выбрана тема:', id);
  }

  return <button onClick={() => selectTopic('props')}>Props</button>;
}`
                    }
                ]
            },
            {
                id: "change",
                title: "Читаем текст из поля",
                blocks: [
                    {
                        id: "change-1",
                        type: "paragraph",
                        text: <>Обработчик получает <strong>объект события</strong>. У текстового поля введённое значение находится в <code>event.target.value</code>.</>
                    },
                    {
                        id: "change-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useState } from 'react';

function NameField() {
  const [name, setName] = useState('');

  return (
    <label>
      Имя
      <input value={name} onChange={event => setName(event.target.value)} />
    </label>
  );
}`
                    },
                    {
                        id: "change-3",
                        type: "paragraph",
                        text: <>Для флажка читается <strong>checked</strong> — отмечен он или нет.</>
                    }
                ]
            },
            {
                id: "submit",
                title: "Отправляем форму",
                blocks: [
                    {
                        id: "submit-1",
                        type: "paragraph",
                        text: <>Обычная отправка HTML-формы может перезагрузить страницу. <strong>preventDefault</strong> отменяет стандартное действие браузера, чтобы обработку выполнил наш код.</>
                    },
                    {
                        id: "submit-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Обрабатываем поиск');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" aria-label="Поиск" />
      <button type="submit">Найти</button>
    </form>
  );
}`
                    }
                ]
            },
            {
                id: "bubbling",
                title: "Событие может дойти до родителя",
                blocks: [
                    {
                        id: "bubbling-1",
                        type: "paragraph",
                        text: <>Клик по вложенной кнопке обычно вызывает и обработчик родителя. Это <strong>всплытие</strong>. <strong>stopPropagation</strong> останавливает его, но не отменяет стандартное действие браузера.</>
                    },
                    {
                        id: "bubbling-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Panel() {
  return (
    <div onClick={() => console.log('Клик по панели')}>
      <button onClick={event => {
        event.stopPropagation();
        console.log('Клик только по кнопке');
      }}>
        Действие
      </button>
    </div>
  );
}`
                    }
                ]
            },
            {
                id: "keyboard",
                title: "Реагируем на клавишу",
                blocks: [
                    {
                        id: "keyboard-1",
                        type: "paragraph",
                        text: <>У события клавиатуры есть <strong>key</strong> — название нажатой клавиши.</>
                    },
                    {
                        id: "keyboard-2",
                        type: "code",
                        language: "jsx",
                        caption: "Фрагмент внутри JSX",
                        code: `<input
  aria-label="Поиск"
  onKeyDown={event => {
    if (event.key === 'Escape') console.log('Нажат Escape');
  }}
/>`
                    }
                ]
            },
            {
                id: "targets",
                title: "Где произошло событие и где стоит обработчик",
                blocks: [
                    {
                        id: "targets-1",
                        type: "paragraph",
                        text: <><strong>target</strong> — элемент, с которого началось событие. <strong>currentTarget</strong> — элемент, чей обработчик сейчас выполняется. Они могут отличаться, если нажать на вложенную разметку.</>
                    },
                    {
                        id: "targets-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function SaveButton() {
  function handleClick(event) {
    console.log(event.target.tagName);        // SPAN при клике по надписи
    console.log(event.currentTarget.tagName); // BUTTON
  }
  return <button onClick={handleClick}><span>Сохранить</span></button>;
}`
                    },
                    {
                        id: "targets-3",
                        type: "paragraph",
                        text: <><strong>preventDefault</strong> отменяет стандартное действие браузера, например отправку формы с перезагрузкой. <strong>stopPropagation</strong> останавливает распространение события к другим элементам. Эти методы решают разные задачи.</>
                    },
                    {
                        id: "targets-4",
                        type: "paragraph",
                        text: <><code>stopImmediatePropagation</code> — метод нативного DOM-события, а не обычного объекта события React. Он не прерывает уже выполняющуюся JavaScript-функцию. Если следующий шаг обработчика не нужен, используй условие или return.</>
                    }
                ]
            }
        ]
    },
    {
        id: "lists-and-keys",
        title: "Списки и key",
        group: "basic",
        description: "Список превращает массив данных в элементы интерфейса. key помогает React узнавать записи при обновлениях.",
        pitfalls: [
            <>Случайный <strong>key</strong> при каждом рендере заставляет React считать запись новой.</>,
            <><strong>Индекс</strong> плохо подходит как key, если записи могут перемещаться, добавляться или удаляться.</>,
            <>key <strong>не передаётся компоненту</strong> как обычный prop: нужный id передай отдельно.</>,
            <>Короткая запись <strong>Fragment</strong> не принимает key.</>
        ],
        advices: [
            "Бери ключ из данных: например, topic.id.",
            "Проверь добавление и удаление записи, особенно если внутри списка есть поля ввода."
        ],
        motivation: "Список из трёх записей — уже достаточно хороший пример, чтобы проверить map и ключи.",
        documentation: "https://react.dev/learn/rendering-lists",
        order: 5,
        summary: "Когда карточек или пунктов меню много, не нужно писать разметку для каждого вручную. Массив можно отобразить через map, а каждой записи дать постоянный ключ.",
        sections: [
            {
                id: "keys",
                title: "Key: какая это запись",
                blocks: [
                    {
                        id: "keys-1",
                        type: "paragraph",
                        text: <>При выводе массива React нужен <strong>устойчивый ключ</strong> для каждой записи. Если порядок поменялся, <strong>key</strong> помогает связать новую позицию с прежней записью.</>
                    },
                    {
                        id: "keys-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function Topics({ topics }) {
  return (
    <ul>
      {topics.map(topic => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </ul>
  );
}`
                    },
                    {
                        id: "keys-3",
                        type: "paragraph",
                        text: <>Ключ должен быть <strong>уникальным</strong> среди соседей. Бери id из данных. Случайное число при каждом рендере заставит React считать запись новой.</>
                    }
                ]
            },
            {
                id: "fragment-key",
                title: "Если одной записи нужны два элемента",
                blocks: [
                    {
                        id: "fragment-key-1",
                        type: "paragraph",
                        text: <>Короткая запись Fragment <code>&lt;&gt;</code> <strong>не принимает key</strong>. Для группы внутри map используется полная запись.</>
                    },
                    {
                        id: "fragment-key-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { Fragment } from 'react';

function Glossary({ terms }) {
  return (
    <dl>
      {terms.map(term => (
        <Fragment key={term.id}>
          <dt>{term.title}</dt>
          <dd>{term.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}`
                    }
                ]
            }
        ]
    },
    {
        id: "render-and-reconciliation",
        title: "Virtual DOM",
        group: "basic",
        order: 6,
        description: "Virtual DOM — это описание интерфейса в памяти, с которым работает React при обновлении страницы.",
        pitfalls: [
            <>Повторный вызов компонента <strong>не означает</strong>, что вся его HTML-разметка создаётся заново.</>,
            <>React сопоставляет <strong>новое описание интерфейса с предыдущим</strong>, а не сравнивает Virtual DOM с каждой деталью реального DOM.</>,
            <>Virtual DOM <strong>не гарантирует</strong>, что любой код будет быстрым: тяжёлые вычисления всё ещё могут замедлять страницу.</>,
            <>Во время вычисления интерфейса <strong>не изменяй чужие данные и не запускай запросы</strong>: React может вызвать компонент повторно.</>
        ],
        documentation: "https://react.dev/learn/render-and-commit",
        advices: [
            "Сначала разберись в цепочке: изменились данные — React вычислил интерфейс — обновил страницу.",
            "Не нужно изучать внутреннее устройство Fiber, чтобы начать писать компоненты."
        ],
        motivation: "Для начала достаточно понимать общую последовательность обновления. К внутренним деталям можно вернуться позже.",
        summary: "Чтобы показать изменения на странице, React сначала вычисляет новый интерфейс, затем обновляет DOM. Разберём названия этих шагов без погружения во внутренний код библиотеки. После знакомства с состоянием и хуками к этой теме полезно вернуться.",
        sections: [
            {
                id: "dom",
                title: "DOM — страница глазами браузера",
                blocks: [
                    {
                        id: "dom-1",
                        type: "paragraph",
                        text: <>Браузер представляет HTML как дерево элементов — <strong>DOM</strong>. В нём есть заголовки, кнопки, поля ввода и связи между ними. Меняя DOM, можно менять то, что видит пользователь.</>
                    },
                    {
                        id: "dom-2",
                        type: "paragraph",
                        text: <>В React мы описываем, какой интерфейс нужен <strong>при текущих данных</strong>. Обновление элементов браузера React берёт на себя.</>
                    }
                ]
            },
            {
                id: "description",
                title: "Virtual DOM — описание интерфейса",
                blocks: [
                    {
                        id: "description-1",
                        type: "paragraph",
                        text: <>Компонент возвращает описание будущего интерфейса. Это представление в памяти обычно называют <strong>Virtual DOM</strong>. Оно помогает React сопоставлять результат предыдущего и нового рендера.</>
                    },
                    {
                        id: "description-2",
                        type: "code",
                        language: "jsx",
                        caption: "Компонент описывает текст для текущего count",
                        code: `function CounterText({ count }) {
  return <p>Нажатий: {count}</p>;
}`
                    },
                    {
                        id: "description-3",
                        type: "paragraph",
                        text: <>Если <code>count</code> изменился, React получает новое описание с другим числом. Сама страница при этом <strong>не загружается заново</strong>.</>
                    }
                ]
            },
            {
                id: "reconciliation",
                title: "Reconciliation — что изменилось",
                blocks: [
                    {
                        id: "reconciliation-1",
                        type: "paragraph",
                        text: <><strong>Reconciliation</strong>, или согласование, — это сопоставление нового дерева элементов с предыдущим. React учитывает типы элементов, их положение и ключи списков. Так он определяет, что сохранить, обновить или заменить.</>
                    },
                    {
                        id: "reconciliation-2",
                        type: "list",
                        items: [
                            <><strong>Render:</strong> React вызывает компоненты и вычисляет новый интерфейс.</>,
                            <><strong>Согласование:</strong> определяет отличия от предыдущего результата.</>,
                            <><strong>Commit:</strong> применяет нужные изменения к DOM.</>
                        ]
                    },
                    {
                        id: "reconciliation-3",
                        type: "code",
                        language: "jsx",
                        caption: "После клика меняется число в существующей кнопке",
                        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Нажатий: {count}
    </button>
  );
}`
                    },
                    {
                        id: "reconciliation-4",
                        type: "paragraph",
                        text: <>React сопоставляет <strong>свои описания интерфейса</strong>. Представление «React каждый раз сравнивает Virtual DOM со всем реальным DOM» неточно.</>
                    },
                    {
                        id: "reconciliation-5",
                        type: "paragraph",
                        text: <><strong>Повторный вызов компонента</strong> не означает, что браузер заново создаст все его элементы. Если результат остался прежним, менять DOM может быть вообще не нужно. Сравнение идёт по дереву элементов, а не по строкам исходного кода.</>
                    },
                    {
                        id: "reconciliation-6",
                        type: "paragraph",
                        text: <>React использует практичные правила сопоставления. Они не гарантируют математически минимальное число операций для любого дерева. Главное для разработчика — правильно описать интерфейс и дать элементам <strong>устойчивые ключи</strong>.</>
                    }
                ]
            },
            {
                id: "identity",
                title: "Почему важны тип и key",
                blocks: [
                    {
                        id: "identity-1",
                        type: "paragraph",
                        text: <>Если на прежнем месте остаётся <strong>тот же тип компонента с тем же ключом</strong>, React обычно сохраняет его состояние. Смена типа или ключа может означать, что это уже другой компонент.</>
                    },
                    {
                        id: "identity-2",
                        type: "code",
                        language: "jsx",
                        caption: "id помогает узнавать запись при перестановке списка",
                        code: `function TopicList({ topics }) {
  return (
    <ul>
      {topics.map(topic => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </ul>
  );
}`
                    }
                ]
            },
            {
                id: "fiber",
                title: "Fiber — как React организует работу",
                blocks: [
                    {
                        id: "fiber-1",
                        type: "paragraph",
                        text: <><strong>Fiber</strong> — внутреннее устройство React для работы с деревом компонентов. Оно позволяет разделять вычисление интерфейса на части и учитывать важность обновлений. Некоторые вычисления React может приостановить или начать заново.</>
                    },
                    {
                        id: "fiber-2",
                        type: "paragraph",
                        text: <>В код приложения Fiber не импортируют. Для нас практический вывод такой: во время рендера <strong>нельзя менять чужие данные или запускать запросы</strong>. Рендер должен спокойно переносить повторные вызовы.</>
                    },
                    {
                        id: "fiber-3",
                        type: "paragraph",
                        text: <>Возможность прерывать работу относится к подготовке нового интерфейса. Применение подготовленных изменений к DOM — <strong>отдельный этап</strong>: React не показывает пользователю произвольную половину незавершённого дерева.</>
                    },
                    {
                        id: "fiber-4",
                        type: "paragraph",
                        text: <>Fiber не делает любой код быстрым. Долгая обычная JavaScript-функция всё ещё может занять основной поток. <strong>useTransition</strong> помогает отметить несрочное обновление React, но не переносит вычисления в другой поток. Практический пример есть в теме «Оптимизация рендера».</>
                    }
                ]
            }
        ]
    },
    {
        id: "use-state",
        title: "Состояние и useState",
        group: "hooks",
        order: 1,
        description: "State — это память компонента, а useState позволяет хранить и обновлять её.",
        pitfalls: [
            <>Вызывай <strong>useState</strong> в начале компонента, а не внутри условия, цикла или обработчика события.</>,
            <>Функция обновления <strong>не меняет переменную сразу</strong> внутри уже работающего обработчика. Новое значение придёт при следующем вызове компонента.</>,
            <><strong>Не изменяй объект или массив состояния напрямую</strong>: React может не заметить такое изменение.</>,
            <>Новое начальное значение в props <strong>не сбрасывает</strong> уже созданное состояние автоматически.</>,
            <>При удалении компонента со страницы его локальное состояние <strong>теряется</strong>.</>
        ],
        documentation: "https://react.dev/reference/react/useState",
        advices: [
            "Храни в состоянии только то, что действительно нужно помнить между обновлениями.",
            "Если значение легко вычислить из уже имеющихся данных, обычно не нужно хранить его отдельно."
        ],
        motivation: "Понимание состояния поможет тебе собрать большинство интерактивных элементов страницы.",
        summary: "Обычная переменная не просит React обновить экран. State решает сразу две задачи: сохраняет данные компонента и позволяет показать их новое значение.",
        sections: [
            {
                id: "pair",
                title: "Значение и функция обновления",
                blocks: [
                    {
                        id: "pair-1",
                        type: "paragraph",
                        text: <><strong>useState</strong> возвращает пару: текущее значение и <strong>setter</strong> — функцию для его изменения. Начальное значение указывают в скобках useState.</>
                    },
                    {
                        id: "pair-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Нажатий: {count}
    </button>
  );
}`
                    },
                    {
                        id: "pair-3",
                        type: "paragraph",
                        text: <>После клика setter запрашивает обновление. React <strong>снова вызывает</strong> Counter, и count уже содержит новое число.</>
                    }
                ]
            },
            {
                id: "previous",
                title: "Если новое значение зависит от старого",
                blocks: [
                    {
                        id: "previous-1",
                        type: "paragraph",
                        text: <>В setter можно передать <strong>функцию</strong>. React вызовет её с предыдущим значением и сохранит результат. Так удобно выполнять несколько последовательных обновлений.</>
                    },
                    {
                        id: "previous-2",
                        type: "code",
                        language: "jsx",
                        caption: "Обработчик внутри Counter: прибавит 3",
                        code: `function addThree() {
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
}`
                    },
                    {
                        id: "previous-3",
                        type: "paragraph",
                        text: <><code>previous</code> — выбранное нами имя параметра. В каждую следующую функцию попадёт результат предыдущей.</>
                    }
                ]
            },
            {
                id: "snapshot",
                title: "Почему переменная не меняется сразу",
                blocks: [
                    {
                        id: "snapshot-1",
                        type: "paragraph",
                        text: <>Каждый рендер видит <strong>своё значение state</strong>. Setter не переписывает переменную внутри уже работающей функции.</>
                    },
                    {
                        id: "snapshot-2",
                        type: "code",
                        language: "jsx",
                        caption: "Ещё один вариант обработчика Counter",
                        code: `function handleClick() {
  setCount(count + 1);
  console.log(count); // Значение текущего рендера
}`
                    },
                    {
                        id: "snapshot-3",
                        type: "paragraph",
                        text: <>Setter не возвращает Promise. <code>await</code> <strong>не сделает</strong> count новым на следующей строке.</>
                    },
                    {
                        id: "snapshot-4",
                        type: "paragraph",
                        text: <>React может объединить несколько обновлений в один рендер — это называют <strong>batching</strong>. Сеттер ставит обновление в очередь, но не возвращает Promise: <code>await setCount(...)</code> не даст новое значение count в текущем обработчике.</>
                    }
                ]
            },
            {
                id: "object",
                title: "Обновляем объект",
                blocks: [
                    {
                        id: "object-1",
                        type: "paragraph",
                        text: <>При изменении объекта <strong>создаём новую копию</strong>. Оператор <code>...</code> переносит прежние свойства, после чего можно заменить нужное поле.</>
                    },
                    {
                        id: "object-2",
                        type: "code",
                        language: "jsx",
                        caption: "Внутри компонента с импортированным useState",
                        code: `const [user, setUser] = useState({ name: 'Анна', city: 'Алматы' });

function rename() {
  setUser(previous => ({ ...previous, name: 'Вика' }));
}`
                    },
                    {
                        id: "object-3",
                        type: "paragraph",
                        text: <>Город сохранится. Прямое присваивание полю старого объекта использовать <strong>не нужно</strong>.</>
                    }
                ]
            },
            {
                id: "array",
                title: "Обновляем массив",
                blocks: [
                    {
                        id: "array-1",
                        type: "paragraph",
                        text: <>Для массива правило такое же: <strong>создаём новый массив</strong>. Разворот добавляет запись, filter возвращает массив без удалённой записи.</>
                    },
                    {
                        id: "array-2",
                        type: "code",
                        language: "jsx",
                        caption: "Внутри компонента с импортированным useState",
                        code: `const [topics, setTopics] = useState(['Props']);

function addTopic() {
  setTopics(previous => [...previous, 'State']);
}

function removeProps() {
  setTopics(previous => previous.filter(topic => topic !== 'Props'));
}`
                    }
                ]
            },
            {
                id: "sharing",
                title: "Где хранить общее состояние",
                blocks: [
                    {
                        id: "sharing-1",
                        type: "paragraph",
                        text: <>У каждого экземпляра компонента своё состояние. Если значение нужно двум соседним компонентам, его обычно <strong>переносят к их общему родителю</strong>. Родитель передаёт значение через props, а функции обновления — через обработчики.</>
                    },
                    {
                        id: "sharing-2",
                        type: "paragraph",
                        text: <>Данные, которые легко вычислить из существующего state, <strong>отдельно хранить не обязательно</strong>. Это помогает избежать расхождений между двумя копиями.</>
                    }
                ]
            },
            {
                id: "derived",
                title: "Не храним то, что легко посчитать",
                blocks: [
                    {
                        id: "derived-1",
                        type: "paragraph",
                        text: <>Если значение полностью получается из существующих данных, <strong>вычисляй его при рендере</strong>. Так не придётся следить, чтобы две копии информации оставались одинаковыми.</>
                    },
                    {
                        id: "derived-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function TaskCount({ tasks }) {
  const completed = tasks.filter(task => task.done).length;
  return <p>Выполнено: {completed} из {tasks.length}</p>;
}`
                    }
                ]
            },
            {
                id: "class-state",
                title: "Дополнительно: состояние в классах",
                blocks: [
                    {
                        id: "class-state-1",
                        type: "paragraph",
                        text: <>В классовых компонентах читают <code>this.state</code> и вызывают <code>this.setState</code>. Его объектное обновление объединяется с прежним состоянием на верхнем уровне. Сеттер <strong>useState работает иначе</strong>: полностью заменяет своё значение. Поэтому остальные поля объекта в хуке нужно копировать самостоятельно.</>
                    }
                ]
            }
        ]
    },
    {
        id: "use-effect",
        title: "useEffect",
        group: "hooks",
        order: 2,
        description: "Синхронизация компонента с браузером, запросами и подписками: зависимости, загрузка и очистка.",
        pitfalls: [
            <>Эффект с зависимостями запускается <strong>и при монтировании</strong>, а не только после их изменения.</>,
            <>Очистка выполняется <strong>перед повторной синхронизацией</strong> и при размонтировании.</>,
            <>Не делай callback эффекта async и <strong>не подавляй проверку зависимостей</strong> без объяснения причины.</>,
            <>Fetch требует <strong>проверки HTTP-статуса</strong>. Ненужный ответ не должен менять состояние.</>,
            <>Пустой массив <strong>не обещает один запуск</strong> за всё время жизни приложения: возможны повторное монтирование и проверка StrictMode.</>,
            <>Не создавай эффект для значения, которое можно <strong>вычислить при рендере</strong>.</>
        ],
        documentation: "https://react.dev/reference/react/useEffect",
        advices: [
            "Для каждого таймера или подписки сразу продумывай очистку.",
            "Проверяй эффект при появлении, изменении зависимостей и удалении компонента."
        ],
        motivation: "Один таймер с правильной очисткой поможет понять жизненный цикл лучше, чем заучивание названий методов.",
        summary: "Компонент появляется на странице, обновляется и может исчезнуть. Если ему нужен таймер, подписка или связь с браузером, эту работу нужно запускать и вовремя останавливать.",
        sections: [
            {
                id: "lifecycle",
                title: "Три этапа жизни",
                blocks: [
                    {
                        id: "lifecycle-1",
                        type: "list",
                        items: [
                            <><strong>Монтирование</strong> — компонент впервые появляется в интерфейсе.</>,
                            <><strong>Обновление</strong> — React пересчитывает его разметку с текущими данными.</>,
                            <><strong>Размонтирование</strong> — компонент удаляется.</>
                        ]
                    },
                    {
                        id: "lifecycle-2",
                        type: "paragraph",
                        text: <><strong>useEffect</strong> связывает компонент с внешней системой. Он выполняется после применения изменений интерфейса. Это не точная копия всех методов жизненного цикла классов.</>
                    }
                ]
            },
            {
                id: "first-effect",
                title: "Первый эффект",
                blocks: [
                    {
                        id: "first-effect-1",
                        type: "paragraph",
                        text: <>Пусть заголовок вкладки должен соответствовать заголовку страницы. Работа с <code>document</code> относится к браузеру, поэтому размещаем её в эффекте.</>
                    },
                    {
                        id: "first-effect-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useEffect } from 'react';

function Page({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <h1>{title}</h1>;
}`
                    },
                    {
                        id: "first-effect-3",
                        type: "paragraph",
                        text: <><code>title</code> указан в <strong>зависимостях</strong>. Когда он изменится, React повторит эффект с новым значением.</>
                    }
                ]
            },
            {
                id: "dependencies",
                title: "Когда запускается эффект",
                blocks: [
                    {
                        id: "dependencies-1",
                        type: "list",
                        items: [
                            <><strong>Без массива зависимостей</strong> — после первого и каждого следующего рендера, применённого React.</>,
                            <><strong>С пустым массивом</strong> — при монтировании; повторное монтирование запустит его снова.</>,
                            <><strong>С зависимостями</strong> — при монтировании и после изменения любого указанного значения.</>
                        ]
                    },
                    {
                        id: "dependencies-2",
                        type: "paragraph",
                        text: <>Перечисляй <strong>используемые props, state</strong> и другие значения, создаваемые внутри компонента. Не убирай зависимости только ради более редкого запуска.</>
                    },
                    {
                        id: "dependencies-3",
                        type: "paragraph",
                        text: <>React сравнивает зависимости через <code>Object.is</code>. У заново созданных объектов и функций другая ссылка, даже если их содержимое выглядит прежним. Импортированная функция и стабильный setter useState не меняются от рендера к рендеру; проверка ESLint помогает отличить их от зависимостей, которые действительно нужно указать.</>
                    }
                ]
            },
            {
                id: "cleanup",
                title: "Останавливаем начатую работу",
                blocks: [
                    {
                        id: "cleanup-1",
                        type: "paragraph",
                        text: <>Эффект может вернуть <strong>функцию очистки</strong>. Для таймера она остановит интервал перед новым запуском эффекта и при удалении компонента.</>
                    },
                    {
                        id: "cleanup-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useEffect, useState } from 'react';

function Timer({ delay = 1000 }) {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTicks(previous => previous + 1);
    }, delay);

    return () => clearInterval(id);
  }, [delay]);

  return <p>Тиков: {ticks}</p>;
}`
                    },
                    {
                        id: "cleanup-3",
                        type: "paragraph",
                        text: <>Поменялся <code>delay</code>: React останавливает старый таймер и создаёт новый. Компонент исчез: React просто останавливает таймер.</>
                    }
                ]
            },
            {
                id: "strict-mode",
                title: "Почему в разработке бывает два запуска",
                blocks: [
                    {
                        id: "strict-mode-1",
                        type: "paragraph",
                        text: <><strong>StrictMode</strong> может дополнительно выполнить запуск, очистку и запуск эффекта. Так React проверяет, умеет ли компонент корректно останавливать свою работу.</>
                    },
                    {
                        id: "strict-mode-2",
                        type: "paragraph",
                        text: <>Если после проверки осталось два таймера или две подписки, <strong>нужно исправить очистку</strong>.</>
                    }
                ]
            },
            {
                id: "no-effect",
                title: "Когда эффект не нужен",
                blocks: [
                    {
                        id: "no-effect-1",
                        type: "paragraph",
                        text: <>Данные для отображения часто можно <strong>вычислить прямо в компоненте</strong>. Для этого не нужно создавать дополнительный state и обновлять его эффектом.</>
                    },
                    {
                        id: "no-effect-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function FullName({ firstName, lastName }) {
  const fullName = firstName + ' ' + lastName;
  return <p>{fullName}</p>;
}`
                    },
                    {
                        id: "no-effect-3",
                        type: "paragraph",
                        text: <>Действие, вызванное конкретным нажатием, обычно выполняется <strong>в обработчике этого нажатия</strong>.</>
                    }
                ]
            },
            {
                id: "request",
                title: "Загружаем данные и показываем результат",
                blocks: [
                    {
                        id: "request-1",
                        type: "paragraph",
                        text: <>Запрос не возвращает данные мгновенно. Пока ждём ответ, показываем загрузку; после ответа — результат или сообщение об ошибке. Начнём с функции запроса. Она проверяет ответ и возвращает адрес картинки.</>
                    },
                    {
                        id: "request-2",
                        type: "code",
                        language: "javascript",
                        caption: "api.js — запрос и проверка ответа",
                        code: `export async function loadDog() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  if (!response.ok) throw new Error('Ошибка HTTP: ' + response.status);
  const data = await response.json();
  if (data.status !== 'success' || typeof data.message !== 'string') {
    throw new Error('Неожиданный ответ сервера');
  }
  return data.message;
}`
                    },
                    {
                        id: "request-3",
                        type: "paragraph",
                        text: <>Теперь используем эту функцию в компоненте. <strong>Один объект хранит стадию загрузки и картинку</strong>: так связанные данные меняются вместе.</>
                    },
                    {
                        id: "request-4",
                        type: "code",
                        language: "jsx",
                        caption: "DogPhoto.jsx — компонент целиком",
                        code: `import { useEffect, useState } from 'react';
import { loadDog } from './api.js';

export default function DogPhoto() {
  const [result, setResult] = useState({ status: 'loading', image: '' });

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const image = await loadDog();
        if (!cancelled) setResult({ status: 'success', image });
      } catch {
        if (!cancelled) setResult({ status: 'error', image: '' });
      }
    }
    void load();
    return () => { cancelled = true; };
  }, []);

  if (result.status === 'loading') return <p role="status">Загружаем…</p>;
  if (result.status === 'error') return <p role="alert">Не удалось загрузить фото.</p>;
  return <img src={result.image} alt="Случайная собака" />;
}`
                    },
                    {
                        id: "request-5",
                        type: "paragraph",
                        text: <>Флаг <code>cancelled</code> <strong>запрещает уже ненужному ответу менять состояние</strong>. Сам сетевой запрос он не останавливает; для отмены fetch можно использовать AbortController. Здесь URL постоянный. Если он зависит от prop, добавь этот prop в зависимости и возвращай loading перед каждым новым запросом.</>
                    },
                    {
                        id: "request-6",
                        type: "paragraph",
                        text: <>Функция, переданная в useEffect, <strong>не должна быть async</strong>: такая функция вернула бы Promise вместо очистки. Асинхронную работу мы вынесли во вложенную <code>load</code>. Проверка <code>response.ok</code> нужна потому, что fetch сам по себе не считает HTTP 404 или 500 отклонением Promise.</>
                    }
                ]
            },
            {
                id: "listener",
                title: "Подписались — не забудем отписаться",
                blocks: [
                    {
                        id: "listener-1",
                        type: "paragraph",
                        text: <>Та же схема подходит для событий браузера: подписка создаётся при запуске эффекта, <strong>очистка снимает именно эту подписку</strong>.</>
                    },
                    {
                        id: "listener-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useEffect } from 'react';

function ConnectionHint() {
  useEffect(() => {
    function handleOffline() { console.log('Соединение потеряно'); }
    window.addEventListener('offline', handleOffline);
    return () => window.removeEventListener('offline', handleOffline);
  }, []);
  return <p>Следим за соединением</p>;
}`
                    },
                    {
                        id: "listener-3",
                        type: "paragraph",
                        text: <>Очистка нужна, если эффект оставляет активную работу или подписку. Простое присваивание <code>document.title</code> не требует остановки таймера или отписки. <strong>Не добавляй пустую cleanup-функцию просто для порядка</strong>.</>
                    }
                ]
            },
            {
                id: "legacy",
                title: "Дополнительно: жизненный цикл в классах",
                blocks: [
                    {
                        id: "legacy-1",
                        type: "paragraph",
                        text: <>В старых проектах можно встретить <strong>componentDidMount, componentDidUpdate и componentWillUnmount</strong>. Они описывают появление, обновление и удаление классового компонента. Для чтения такого кода полезно знать названия; писать новые компоненты можно функциями.</>
                    },
                    {
                        id: "legacy-2",
                        type: "paragraph",
                        text: <>Не запоминай правило «useEffect с зависимостью — это только обновление». Он запускается <strong>и при монтировании</strong>. Его очистка тоже связана не только с удалением: при смене зависимостей она останавливает прежнюю синхронизацию перед новой.</>
                    }
                ]
            }
        ]
    },
    {
        id: "use-ref",
        title: "useRef",
        group: "hooks",
        order: 3,
        description: "useRef хранит ссылку на DOM-элемент или служебное значение между рендерами.",
        pitfalls: [
            <>Изменение <code>ref.current</code> <strong>не вызывает рендер</strong>: для данных на экране обычно нужен state.</>,
            <>До появления DOM-элемента <code>ref.current</code> может быть <strong>null</strong>.</>,
            <><strong>Не меняй управляемую React разметку вручную</strong> через ref без необходимости.</>
        ],
        documentation: "https://react.dev/learn/manipulating-the-dom-with-refs",
        advices: [
            "Используй ref для фокуса, прокрутки и других действий с DOM.",
            "Для обычного отображения данных начинай с props и state."
        ],
        motivation: "Поставь фокус в поле по кнопке — это небольшой, но полезный пример работы с ref.",
        summary: "Иногда компоненту нужно обратиться к конкретному элементу страницы или запомнить значение, которое само не меняет интерфейс. Для этих задач подходит useRef.",
        sections: [
            {
                id: "focus",
                title: "Ref: обратиться к элементу",
                blocks: [
                    {
                        id: "focus-1",
                        type: "paragraph",
                        text: <>Иногда нужно поставить фокус в поле или прокрутить страницу до элемента. <strong>useRef</strong> создаёт объект, в <code>current</code> которого React может сохранить DOM-элемент.</>
                    },
                    {
                        id: "focus-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useRef } from 'react';

function Search() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} aria-label="Поиск" />
      <button onClick={() => inputRef.current?.focus()}>
        Ввести запрос
      </button>
    </>
  );
}`
                    },
                    {
                        id: "focus-3",
                        type: "paragraph",
                        text: <>До появления поля <code>current</code> равен <strong>null</strong>. Знак <code>?.</code> позволяет вызвать focus только тогда, когда элемент уже есть.</>
                    }
                ]
            },
            {
                id: "memory",
                title: "Ref и state — разная память",
                blocks: [
                    {
                        id: "memory-1",
                        type: "paragraph",
                        text: <>useRef также хранит <strong>служебное значение между рендерами</strong>. Изменение current <strong>не сообщает React</strong>, что нужно обновить экран.</>
                    },
                    {
                        id: "memory-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useRef } from 'react';

function ClickLogger() {
  const clicks = useRef(0);

  function handleClick() {
    clicks.current += 1;
    console.log('Кликов:', clicks.current);
  }

  return <button onClick={handleClick}>Посчитать в консоли</button>;
}`
                    },
                    {
                        id: "memory-3",
                        type: "paragraph",
                        text: <>Если число должно отображаться на странице, используй <strong>state</strong>. Ref подходит для значения, которое нужно коду, но само не управляет разметкой.</>
                    }
                ]
            }
        ]
    },
    {
        id: "use-reducer",
        title: "useReducer",
        group: "hooks",
        description: "useReducer собирает правила изменения состояния в одну функцию и обновляет его через действия.",
        pitfalls: [
            <>Reducer должен быть <strong>чистой функцией</strong>: без запросов и изменения прежнего state.</>,
            <>useReducer <strong>не делает состояние общим</strong> для всего приложения автоматически.</>,
            <>dispatch <strong>не меняет переменную state</strong> в уже выполняющемся обработчике.</>
        ],
        advices: [
            "Называй действия по смыслу: добавить задачу, удалить задачу, сбросить форму.",
            "Для одного простого значения useState обычно короче."
        ],
        motivation: "Сначала опиши словами, какие действия меняют данные. Это и будет основой reducer.",
        documentation: "https://react.dev/reference/react/useReducer",
        order: 4,
        summary: "Если обработчики стали содержать много связанных правил, логику обновления удобно вынести из них. useReducer помогает описать, какие действия бывают и как каждое меняет состояние.",
        sections: [
            {
                id: "concept",
                title: "Состояние, действие и reducer",
                blocks: [
                    {
                        id: "concept-1",
                        type: "paragraph",
                        text: <>Когда правил изменения состояния становится много, их удобно собрать в <strong>reducer</strong> — функцию, которая получает текущее состояние и описание действия, а возвращает новое состояние. <strong>dispatch</strong> отправляет это действие.</>
                    }
                ]
            },
            {
                id: "example",
                title: "Отправляем действие через dispatch",
                blocks: [
                    {
                        id: "example-1",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'reset': return { count: 0 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Сбросить</button>
    </>
  );
}`
                    }
                ]
            },
            {
                id: "choice",
                title: "Когда это полезно",
                blocks: [
                    {
                        id: "choice-1",
                        type: "paragraph",
                        text: <>Счётчик здесь показывает устройство хука; для такого маленького компонента достаточно useState. Reducer становится полезнее, когда одно действие согласованно меняет <strong>несколько полей</strong>. Внутри него нельзя запускать запросы или менять прежний объект state.</>
                    },
                    {
                        id: "choice-2",
                        type: "paragraph",
                        text: <>useReducer <strong>не делает состояние глобальным</strong>. Чтобы поделиться им, передай state и dispatch через props или Context.</>
                    }
                ]
            }
        ]
    },
    {
        id: "context",
        title: "Context и useContext",
        group: "hooks",
        order: 5,
        description: "Context позволяет передавать общие данные компонентам без цепочки промежуточных props.",
        pitfalls: [
            <>Компонент должен находиться <strong>внутри нужного Provider</strong>, иначе он получит запасное значение, заданное в createContext.</>,
            <>Создавай контекст <strong>вне функции компонента</strong>, чтобы он не создавался заново при каждом обновлении.</>,
            <><strong>Не складывай все несвязанные данные в один контекст</strong>: это затрудняет поддержку и может вызывать лишние обновления.</>,
            <>Если данные нужны только одному компоненту, обычного useState часто достаточно.</>
        ],
        documentation: "https://react.dev/reference/react/useContext",
        advices: [
            "Сначала попробуй обычные props. Используй Context, когда передача через промежуточные компоненты действительно мешает.",
            "Разделяй контексты по назначению данных."
        ],
        motivation: "Начни с одного общего значения. Когда понятен его путь от Provider к компоненту, контекст уже не кажется сложным.",
        summary: "Если тема оформления нужна в нескольких частях страницы, передавать её через каждую промежуточную обёртку неудобно. Context позволяет читать общие данные там, где они нужны.",
        sections: [
            {
                id: "purpose",
                title: "Что даёт Context",
                blocks: [
                    {
                        id: "purpose-1",
                        type: "paragraph",
                        text: <>Context передаёт значение выбранной части дерева компонентов. <strong>Промежуточные компоненты могут вообще не знать об этих данных</strong>.</>
                    },
                    {
                        id: "purpose-2",
                        type: "paragraph",
                        text: <>Сам по себе Context <strong>не хранит изменяемое состояние</strong>. Для этого можно использовать useState, а через Context передавать значение и функцию его изменения.</>
                    }
                ]
            },
            {
                id: "drilling",
                title: "Когда props приходится передавать через посредников",
                blocks: [
                    {
                        id: "drilling-1",
                        type: "paragraph",
                        text: <>Иногда промежуточный компонент не использует данные, а только передаёт их дальше. Это называют <strong>props drilling</strong>. Один-два таких перехода вполне нормальны. Context полезен, когда длинная цепочка начинает мешать читать и менять код.</>
                    },
                    {
                        id: "drilling-2",
                        type: "code",
                        language: "jsx",
                        caption: "Panel передаёт имя, но сам его не использует",
                        code: `function Page({ name }) { return <Panel name={name} />; }
function Panel({ name }) { return <UserName name={name} />; }
function UserName({ name }) { return <p>{name}</p>; }`
                    },
                    {
                        id: "drilling-3",
                        type: "paragraph",
                        text: <>Перед добавлением Context подумай, можно ли передать готовый дочерний элемент через <strong>children</strong>. Иногда этого достаточно.</>
                    }
                ]
            },
            {
                id: "create",
                title: "Создаём контекст",
                blocks: [
                    {
                        id: "create-1",
                        type: "paragraph",
                        text: <>Контекст создают <strong>вне функции компонента</strong>. В аргументе указывают запасное значение: его получит потребитель, если выше нет Provider.</>
                    },
                    {
                        id: "create-2",
                        type: "code",
                        language: "jsx",
                        caption: "ThemeContext.js",
                        code: `import { createContext } from 'react';

export const ThemeContext = createContext('light');`
                    }
                ]
            },
            {
                id: "provider",
                title: "Указываем область доступа",
                blocks: [
                    {
                        id: "provider-1",
                        type: "paragraph",
                        text: <><strong>Provider передаёт value</strong> всем потребителям внутри себя. Здесь темой смогут пользоваться компоненты в Settings.</>
                    },
                    {
                        id: "provider-2",
                        type: "code",
                        language: "jsx",
                        caption: "App.jsx",
                        code: `import { ThemeContext } from './ThemeContext.js';
import Settings from './Settings.jsx';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Settings />
    </ThemeContext.Provider>
  );
}`
                    }
                ]
            },
            {
                id: "read",
                title: "Читаем через useContext",
                blocks: [
                    {
                        id: "read-1",
                        type: "paragraph",
                        text: <><strong>useContext</strong> получает значение ближайшего Provider выше текущего компонента. Props для этого не нужны.</>
                    },
                    {
                        id: "read-2",
                        type: "code",
                        language: "jsx",
                        caption: "Settings.jsx",
                        code: `import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.js';

export default function Settings() {
  const theme = useContext(ThemeContext);
  return <p>Выбрана тема: {theme}</p>;
}`
                    }
                ]
            },
            {
                id: "change",
                title: "Добавляем изменение темы",
                blocks: [
                    {
                        id: "change-1",
                        type: "paragraph",
                        text: <>В следующем самостоятельном примере value — <strong>объект со значением и функцией</strong>. Кнопка вызывает функцию, состояние родителя меняется, и потребитель получает новое значение.</>
                    },
                    {
                        id: "change-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Тема: {theme}
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeButton />
    </ThemeContext.Provider>
  );
}`
                    },
                    {
                        id: "change-3",
                        type: "paragraph",
                        text: <>Кнопка в этом варианте обязательно должна быть внутри Provider. Чтобы тема влияла на оформление, её отдельно связывают с CSS или ConfigProvider Ant Design.</>
                    }
                ]
            },
            {
                id: "scope",
                title: "Не всё должно быть общим",
                blocks: [
                    {
                        id: "scope-1",
                        type: "paragraph",
                        text: <>При изменении value обновляются компоненты, читающие этот контекст. Несвязанные данные удобно <strong>разделять на несколько контекстов</strong>. Состояние одного поля ввода обычно достаточно оставить в его компоненте.</>
                    },
                    {
                        id: "scope-2",
                        type: "paragraph",
                        text: <>Изменение value оповещает потребителей этого контекста. Это <strong>не означает, что Context обязательно повторно вызывает каждого потомка</strong>. Отдельно потомки могут обновиться из-за обычного рендера родителя. memo не блокирует получение нового значения контекста.</>
                    },
                    {
                        id: "scope-3",
                        type: "paragraph",
                        text: <>Для объектов важна ссылка: новый объект в value считается новым значением. Если измерения показали лишние обновления, можно разделить контексты или сохранить объект через <strong>useMemo</strong>. Начинать с этого для простой темы оформления не обязательно.</>
                    }
                ]
            },
            {
                id: "consumer",
                title: "Дополнительно: Consumer в существующем коде",
                blocks: [
                    {
                        id: "consumer-1",
                        type: "paragraph",
                        text: <>До распространения хуков значение часто читали через <strong>Consumer</strong>. Он вызывает вложенную функцию и передаёт ей значение. В новом функциональном компоненте useContext обычно читается проще.</>
                    },
                    {
                        id: "consumer-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { ThemeContext } from './ThemeContext.js';

function ThemeLabel() {
  return (
    <ThemeContext.Consumer>
      {theme => <p>Тема: {theme}</p>}
    </ThemeContext.Consumer>
  );
}`
                    },
                    {
                        id: "consumer-3",
                        type: "paragraph",
                        text: <>Запись <code>ThemeContext.Provider</code> подходит для React 18 и 19. В React 19 также можно писать провайдер как <code>ThemeContext</code> с prop value. Запасное значение createContext используется только при отсутствии провайдера: <code>value={undefined}</code> его не включает.</>
                    }
                ]
            }
        ]
    },
    {
        id: "use-callback",
        title: "useCallback",
        group: "hooks",
        order: 6,
        description: "useCallback позволяет сохранять одну и ту же функцию между обновлениями компонента, пока не меняются её зависимости.",
        pitfalls: [
            <>useCallback <strong>не запрещает JavaScript создавать функцию</strong> при выполнении компонента: React лишь может вернуть сохранённую ранее.</>,
            <>Если функция читает меняющиеся props или state, их <strong>нужно учитывать в зависимостях</strong>.</>,
            <>Пустой массив зависимостей <strong>не является универсальным решением</strong>: функция может запомнить устаревшие данные.</>,
            <>Не оборачивай все обработчики в useCallback автоматически. Для большинства простых кнопок он <strong>не нужен</strong>.</>
        ],
        documentation: "https://react.dev/reference/react/useCallback",
        advices: [
            "Перед использованием ответь на вопрос: кому важно получить ту же самую функцию?",
            "Сначала разберись с React.memo, затем с тем, как useCallback помогает ему."
        ],
        motivation: "Главное здесь — различать код функции и саму функцию как отдельное значение в памяти.",
        summary: "Иногда дочерний компонент получает те же данные, но всё равно обновляется из-за новой функции в props. useCallback помогает сохранить ссылку на обработчик.",
        sections: [
            {
                id: "references",
                title: "Почему две одинаковые функции — разные",
                blocks: [
                    {
                        id: "references-1",
                        type: "paragraph",
                        text: <>При выполнении компонента функции внутри него <strong>создаются заново</strong>. Их код может совпадать, но для JavaScript это разные объекты.</>
                    },
                    {
                        id: "references-2",
                        type: "code",
                        language: "javascript",
                        caption: "Принцип сравнения функций",
                        code: `const first = () => 1;
const second = () => 1;

console.log(first === second); // false`
                    }
                ]
            },
            {
                id: "cache",
                title: "Что сохраняет useCallback",
                blocks: [
                    {
                        id: "cache-1",
                        type: "paragraph",
                        text: <>Хук возвращает <strong>прежнюю функцию</strong>, пока не изменились её зависимости. Он не вызывает её и не ускоряет код внутри.</>
                    },
                    {
                        id: "cache-2",
                        type: "code",
                        language: "jsx",
                        caption: "Внутри компонента; useCallback импортирован из react",
                        code: `const handleReset = useCallback(() => {
  setCount(0);
}, []);`
                    },
                    {
                        id: "cache-3",
                        type: "paragraph",
                        text: <>Здесь функция не читает count, а setter имеет стабильную ссылку. Поэтому пустой массив зависимостей подходит.</>
                    }
                ]
            },
            {
                id: "memo",
                title: "Как это связано с React.memo",
                blocks: [
                    {
                        id: "memo-1",
                        type: "paragraph",
                        text: <><strong>memo</strong> может пропустить обновление дочернего компонента с прежними props. Стабильный callback помогает этому сравнению.</>
                    },
                    {
                        id: "memo-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { memo, useCallback, useState } from 'react';

const ResetButton = memo(function ResetButton({ onReset }) {
  return <button onClick={onReset}>Сбросить</button>;
});

function Counter() {
  const [count, setCount] = useState(0);
  const reset = useCallback(() => setCount(0), []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Число: {count}</button>
      <ResetButton onReset={reset} />
    </>
  );
}`
                    },
                    {
                        id: "memo-3",
                        type: "paragraph",
                        text: <>Изменение count не меняет reset. У ResetButton остаются прежние props. На такой маленькой кнопке это учебный пример, ощутимого ускорения ждать не нужно.</>
                    }
                ]
            },
            {
                id: "dependencies",
                title: "Если функция читает props или state",
                blocks: [
                    {
                        id: "dependencies-1",
                        type: "paragraph",
                        text: <>Значения, которые функция использует, <strong>должны быть в зависимостях</strong>. Иначе сохранённая функция может продолжить работать со старыми данными.</>
                    },
                    {
                        id: "dependencies-2",
                        type: "code",
                        language: "jsx",
                        caption: "Внутри компонента: text — state, onSave — prop",
                        code: `const handleSave = useCallback(() => {
  onSave(text);
}, [onSave, text]);`
                    }
                ]
            },
            {
                id: "choice",
                title: "Когда стоит применять",
                blocks: [
                    {
                        id: "choice-1",
                        type: "paragraph",
                        text: <>useCallback полезен, если <strong>сохранение ссылки действительно влияет на работу</strong>: например, функция передаётся в memo-компонент. Для обычного обработчика без такой задачи достаточно простой функции.</>
                    },
                    {
                        id: "choice-2",
                        type: "paragraph",
                        text: <>useCallback сохраняет ссылку на функцию, а не результат её вызова, и не делает её тело быстрее. Написанная внутри JSX обёртка остаётся новой функцией при каждом рендере, даже если она вызывает сохранённый обработчик.</>
                    },
                    {
                        id: "choice-3",
                        type: "code",
                        language: "jsx",
                        caption: "Вариант 1: обёртка в JSX родителя",
                        code: "<Row onDelete={() => handleDelete(item.id)} />"
                    },
                    {
                        id: "choice-4",
                        type: "code",
                        language: "jsx",
                        caption: "Вариант 2: передать id отдельно",
                        code: "<Row id={item.id} onDelete={handleDelete} />"
                    },
                    {
                        id: "choice-5",
                        type: "paragraph",
                        text: <>Во втором варианте Row сам вызывает <code>onDelete(id)</code>. Польза появляется, если Row мемоизирован, а остальные его props тоже не меняются. Для обычной небольшой кнопки обёртка — нормальный вариант.</>
                    }
                ]
            }
        ]
    },
    {
        id: "react-memo",
        title: "Оптимизация рендера",
        group: "advanced",
        order: 1,
        description: "Memo, useMemo и useTransition помогают уменьшить лишнюю работу и управлять обновлениями интерфейса.",
        pitfalls: [
            <><strong>useMemo</strong> не ускоряет первое вычисление: результат всё равно нужно получить.</>,
            <>Новый объект, массив или функция в props <strong>считается новым значением</strong>, даже если содержимое выглядит прежним.</>,
            <>В зависимости useMemo нужно включать используемые данные, которые <strong>могут меняться</strong>.</>,
            <>Не изменяй данные и <strong>не запускай запросы</strong> внутри функции useMemo.</>,
            <>Для маленьких компонентов и быстрых вычислений эти инструменты могут добавить <strong>больше сложности, чем пользы</strong>.</>
        ],
        documentation: "https://react.dev/reference/react/memo",
        advices: [
            "Сначала добейся правильной работы, а затем проверяй, что действительно замедляет интерфейс.",
            "Сравнивай поведение до и после оптимизации; при необходимости используй React DevTools."
        ],
        motivation: "Не нужно оптимизировать всё заранее. Важнее понимать, какую именно лишнюю работу ты убираешь.",
        summary: "React.memo и useMemo помогают избежать повторной работы. Первый относится к компоненту, второй — к результату вычисления.",
        sections: [
            {
                id: "rerender",
                title: "Откуда берутся повторные вызовы",
                blocks: [
                    {
                        id: "rerender-1",
                        type: "paragraph",
                        text: <>После обновления родителя React <strong>обычно снова вызывает его дочерние компоненты</strong>. Это нормальная часть работы. Оптимизация нужна, когда такая работа заметно замедляет интерфейс.</>
                    }
                ]
            },
            {
                id: "memo",
                title: "React.memo: прежние props",
                blocks: [
                    {
                        id: "memo-1",
                        type: "paragraph",
                        text: <><strong>memo</strong> оборачивает компонент. Если props остались прежними, React может пропустить его повторный вызов.</>
                    },
                    {
                        id: "memo-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { memo } from 'react';

const Greeting = memo(function Greeting({ name }) {
  return <h2>Привет, {name}!</h2>;
});`
                    },
                    {
                        id: "memo-3",
                        type: "paragraph",
                        text: <>memo <strong>не блокирует</strong> изменение собственного state или контекста, который компонент читает. Это оптимизация, а не запрет на обновления.</>
                    },
                    {
                        id: "memo-4",
                        type: "paragraph",
                        text: <>Собственную функцию сравнения props добавляют редко. Она должна учитывать всё, что влияет на результат и поведение, включая функции. Если проигнорировать изменившийся обработчик, компонент может продолжить использовать старые данные.</>
                    }
                ]
            },
            {
                id: "usememo",
                title: "useMemo: прежний результат",
                blocks: [
                    {
                        id: "usememo-1",
                        type: "paragraph",
                        text: <><strong>useMemo</strong> сохраняет результат функции. Зависимости не изменились — можно использовать прежний результат. Изменились — нужно вычислить его заново.</>
                    },
                    {
                        id: "usememo-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useMemo } from 'react';

function Total({ prices }) {
  const sum = useMemo(
    () => prices.reduce((total, price) => total + price, 0),
    [prices]
  );

  return <p>Сумма: {sum}</p>;
}`
                    },
                    {
                        id: "usememo-3",
                        type: "paragraph",
                        text: <>Для пары чисел useMemo <strong>избыточен</strong>. Здесь маленький расчёт нужен, чтобы увидеть устройство хука.</>
                    }
                ]
            },
            {
                id: "references",
                title: "Почему важны ссылки",
                blocks: [
                    {
                        id: "references-1",
                        type: "paragraph",
                        text: <>Новый массив или объект <strong>не равен предыдущему</strong>, даже если содержимое одинаковое. memo сравнивает каждый prop по значению для примитивов и <strong>по ссылке для объектов и функций</strong>.</>
                    },
                    {
                        id: "references-2",
                        type: "code",
                        language: "javascript",
                        caption: "Сравнение массивов",
                        code: `console.log([1, 2] === [1, 2]); // false

const items = [1, 2];
console.log(items === items); // true`
                    }
                ]
            },
            {
                id: "together",
                title: "Используем вместе",
                blocks: [
                    {
                        id: "together-1",
                        type: "paragraph",
                        text: <>Здесь useMemo сохраняет массив, а memo помогает пропустить обновление списка, пока его <code>items</code> остаётся прежним.</>
                    },
                    {
                        id: "together-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { memo, useMemo } from 'react';

const List = memo(function List({ items }) {
  return <ul>{items.map(item => <li key={item.id}>{item.title}</li>)}</ul>;
});

function SearchResults({ topics, query }) {
  const items = useMemo(
    () => topics.filter(topic => topic.title.includes(query)),
    [topics, query]
  );

  return <List items={items} />;
}`
                    },
                    {
                        id: "together-3",
                        type: "paragraph",
                        text: <>Если родитель каждый раз создаёт новый <code>topics</code>, зависимость тоже меняется. Сохранение результата тогда <strong>не поможет</strong> пропустить вычисление.</>
                    }
                ]
            },
            {
                id: "measure",
                title: "Сначала проверяем пользу",
                blocks: [
                    {
                        id: "measure-1",
                        type: "paragraph",
                        text: <><strong>Не нужно оборачивать всё подряд</strong>. Начни с измерения медленного действия, затем оптимизируй его. Программа должна правильно работать и без мемоизации.</>
                    }
                ]
            },
            {
                id: "profiler",
                title: "Измеряем медленное место",
                blocks: [
                    {
                        id: "profiler-1",
                        type: "paragraph",
                        text: <>React DevTools помогает увидеть обновления компонентов. Для небольшой проверки можно обернуть участок в <strong>Profiler</strong>: onRender получает данные о завершённом обновлении.</>
                    },
                    {
                        id: "profiler-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { Profiler } from 'react';

function report(id, phase, actualDuration) {
  console.log(id, phase, actualDuration.toFixed(1) + ' мс');
}

function MeasuredArea({ children }) {
  return <Profiler id="topic-list" onRender={report}>{children}</Profiler>;
}`
                    },
                    {
                        id: "profiler-3",
                        type: "paragraph",
                        text: <><code>actualDuration</code> — время рендера этого дерева, а <strong>не время запроса</strong> или всей отрисовки браузера. Сравни одно и то же действие до и после изменения. Профилирование добавляет накладные расходы; обычная production-сборка его отключает.</>
                    }
                ]
            },
            {
                id: "transition",
                title: "Дополнительно: срочное и несрочное обновление",
                blocks: [
                    {
                        id: "transition-1",
                        type: "paragraph",
                        text: <>Текст в поле должен появляться сразу. Перестроение большого списка можно отметить как несрочное через <strong>useTransition</strong>. React сможет отложить подготовку такого обновления, чтобы обработать более срочное.</>
                    },
                    {
                        id: "transition-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { memo, useState, useTransition } from 'react';

const Results = memo(function Results({ items, query }) {
  return <ul>{items.filter(item => item.title.includes(query))
    .map(item => <li key={item.id}>{item.title}</li>)}</ul>;
});

function Search({ items }) {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [pending, startTransition] = useTransition();

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
    startTransition(() => setQuery(value));
  }

  return (
    <>
      <input aria-label="Поиск" value={text} onChange={handleChange} />
      {pending && <p role="status">Обновляем список…</p>}
      <Results items={items} query={query} />
    </>
  );
}`
                    },
                    {
                        id: "transition-3",
                        type: "paragraph",
                        text: <>Два значения здесь намеренные: <code>text</code> показывает введённое, <code>query</code> — запрос для списка. Results мемоизирован, чтобы не пересчитывать список только из-за срочного обновления text. Ссылка на <code>items</code> тоже должна оставаться прежней, пока сами данные не меняются.</>
                    },
                    {
                        id: "transition-4",
                        type: "paragraph",
                        text: <>Функция внутри <code>startTransition</code> выполняется сразу. Этот API меняет приоритет обновления состояния, но <strong>не запускает вычисления в фоне</strong>. Очень долгий filter всё ещё может тормозить: тогда нужны изменение алгоритма, виртуализация списка или Web Worker.</>
                    }
                ]
            }
        ]
    },
    {
        id: "lazy-and-suspense",
        title: "Lazy и Suspense",
        group: "advanced",
        description: "Lazy позволяет загрузить код компонента позже, а Suspense показывает ожидание загрузки.",
        pitfalls: [
            <>В показанном варианте загружаемый модуль должен иметь <strong>default-экспорт</strong> компонента.</>,
            <>Suspense показывает ожидание, но <strong>не заменяет обработку ошибки</strong>.</>,
            <>lazy кеширует результат импорта: простой сброс границы ошибок <strong>не обязательно повторит загрузку</strong>.</>,
            <>Не стоит дробить на чанки каждую <strong>маленькую кнопку</strong>, которая нужна сразу.</>
        ],
        advices: [
            "Начни с отдельной страницы или тяжёлого виджета.",
            "Оставь меню снаружи области ожидания, чтобы навигация не исчезала во время загрузки."
        ],
        motivation: "Выдели один тяжёлый раздел и проверь, что пользователь видит и при ожидании, и при ошибке.",
        documentation: "https://react.dev/reference/react/lazy",
        order: 2,
        summary: "Не весь код приложения нужен при первом открытии. Тяжёлый редактор или отдельную страницу можно загрузить, когда пользователь до них доберётся.",
        sections: [
            {
                id: "lazy",
                title: "Загружаем тяжёлый раздел позже",
                blocks: [
                    {
                        id: "lazy-1",
                        type: "paragraph",
                        text: <>memo и useMemo сокращают повторную работу. <strong>lazy</strong> решает другую задачу: позволяет загрузить код компонента, когда он понадобился. Сборщик выносит динамический import в отдельную часть сборки — <strong>чанк</strong>.</>
                    },
                    {
                        id: "lazy-2",
                        type: "code",
                        language: "jsx",
                        caption: "App.jsx — загрузка начнётся при первом показе Settings",
                        code: `import { lazy, Suspense, useState } from 'react';

const Settings = lazy(() => import('./Settings.jsx'));

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Настройки</button>
      {open && (
        <Suspense fallback={<p>Загружаем настройки…</p>}>
          <Settings />
        </Suspense>
      )}
    </>
  );
}`
                    },
                    {
                        id: "lazy-3",
                        type: "code",
                        language: "jsx",
                        caption: "Settings.jsx",
                        code: `export default function Settings() {
  return <h2>Настройки</h2>;
}`
                    },
                    {
                        id: "lazy-4",
                        type: "paragraph",
                        text: <>lazy <strong>объявляют вне компонента</strong>. Загружаемый модуль в этом варианте должен иметь default-экспорт компонента. Небольшую кнопку, которая сразу нужна на странице, обычно нет смысла выносить в отдельный чанк.</>
                    }
                ]
            },
            {
                id: "waiting",
                title: "Что показывает Suspense",
                blocks: [
                    {
                        id: "waiting-1",
                        type: "paragraph",
                        text: <><strong>Suspense</strong> показывает fallback, пока загружается lazy-компонент. Обычный fetch внутри useEffect он <strong>не отслеживает</strong>: для такого запроса loading и error остаются в состоянии компонента.</>
                    }
                ]
            },
            {
                id: "load-error",
                title: "Если раздел не загрузился",
                blocks: [
                    {
                        id: "load-error-1",
                        type: "paragraph",
                        text: <>Если импорт завершится ошибкой, её может показать <strong>Error Boundary</strong> — граница ошибок выше компонента. Ниже минимальный вариант для клиентского приложения. Для такой границы React пока использует классовый API.</>
                    },
                    {
                        id: "load-error-2",
                        type: "code",
                        language: "jsx",
                        caption: "SectionErrorBoundary.jsx",
                        code: `import { Component } from 'react';

export default class SectionErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }

  render() {
    if (this.state.failed) {
      return (
        <div role="alert">
          <p>Раздел не открылся.</p>
          <button onClick={() => window.location.reload()}>Обновить страницу</button>
        </div>
      );
    }
    return this.props.children;
  }
}`
                    },
                    {
                        id: "load-error-3",
                        type: "paragraph",
                        text: <>Оборачивай Suspense этой границей; пример есть в теме роутинга. lazy сохраняет результат загрузки, включая ошибку. Поэтому простой сброс границы <strong>не обязательно повторит import</strong>. Кнопка здесь явно перезагружает страницу; несохранённые данные формы при этом могут потеряться. Ошибки обработчиков и обычных асинхронных запросов эта граница не заменяет — их обрабатывают отдельно.</>
                    }
                ]
            }
        ]
    },
    {
        id: "optimistic-updates",
        title: "Оптимистичные обновления",
        group: "advanced",
        description: "Интерфейс временно показывает ожидаемый результат, пока сервер подтверждает действие.",
        pitfalls: [
            <>useOptimistic требует <strong>React 19</strong>; это дополнительный материал после useState и useTransition.</>,
            <>Вызов обновления <strong>вне Action</strong> не создаёт правильное ожидание запроса.</>,
            <>Если <strong>не обновить основное состояние</strong> после успеха, временного результата недостаточно.</>,
            <>Несколько одновременных запросов требуют продуманного порядка обработки ответов.</>
        ],
        advices: [
            "Начни с одного действия и блокировки повторной отправки на время запроса.",
            "Проверь успех и ошибку: пользователь должен понимать, сохранилось ли действие."
        ],
        motivation: "Освой сначала обычное сохранение с ожиданием. Затем добавь быстрый отклик поверх работающей логики.",
        documentation: "https://react.dev/reference/react/useOptimistic",
        order: 3,
        summary: "Когда действие почти всегда проходит успешно, можно показать его результат сразу. Но интерфейсу всё равно нужны подтверждение сервера и понятное поведение при ошибке. Здесь используется useOptimistic из React 19.",
        sections: [
            {
                id: "concept",
                title: "Временный и подтверждённый результат",
                blocks: [
                    {
                        id: "concept-1",
                        type: "paragraph",
                        text: <>Иногда интерфейс показывает ожидаемый результат ещё до ответа сервера: например, сразу увеличивает число лайков. <strong>useOptimistic</strong> в React 19 хранит такую временную версию на время Action — операции, запущенной через startTransition.</>
                    },
                    {
                        id: "concept-2",
                        type: "paragraph",
                        text: <>В этом примере <code>saveLike</code> — переданная функция запроса. При успехе она возвращает подтверждённое сервером число лайков, при ошибке отклоняет Promise. Подключи её к API своего проекта.</>
                    }
                ]
            },
            {
                id: "example",
                title: "Показываем лайк до ответа сервера",
                blocks: [
                    {
                        id: "example-1",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useOptimistic, useState, useTransition } from 'react';

function LikeButton({ initialLikes = 0, saveLike }) {
  const [likes, setLikes] = useState(initialLikes);
  const [shownLikes, addLike] = useOptimistic(likes, value => value + 1);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState('');

  function handleClick() {
    setError('');
    startTransition(async () => {
      addLike();
      try {
        const confirmedLikes = await saveLike();
        startTransition(() => setLikes(confirmedLikes));
      } catch {
        setError('Лайк не сохранился. Попробуй ещё раз.');
      }
    });
  }

  return (
    <>
      <button disabled={pending} onClick={handleClick}>♥ {shownLikes}</button>
      {error && <p role="alert">{error}</p>}
    </>
  );
}`
                    }
                ]
            },
            {
                id: "confirmation",
                title: "Что происходит после ответа",
                blocks: [
                    {
                        id: "confirmation-1",
                        type: "paragraph",
                        text: <>После успеха обновляется <strong>настоящее состояние</strong> likes. После ошибки оно остаётся прежним, и с завершением Action временная прибавка исчезает. Одного вызова addLike без Action и без сохранения подтверждённого результата <strong>недостаточно</strong>. Блокировка кнопки здесь не даёт отправлять несколько лайков одновременно.</>
                    }
                ]
            }
        ]
    },
    {
        id: "hoc",
        title: "HOC",
        group: "advanced",
        order: 4,
        description: "HOC — функция, которая принимает компонент и возвращает новый компонент с дополнительным поведением.",
        pitfalls: [
            <><strong>Не создавай HOC-обёртку внутри обновляющегося компонента</strong>: React может каждый раз считать её новым компонентом.</>,
            <><strong>Передавай исходному компоненту все props</strong>, которые ему нужны.</>,
            <><strong>Не изменяй сам исходный компонент</strong>: добавляй поведение через обёртку.</>,
            <>Большое количество обёрток затрудняет чтение. Используй HOC, когда он <strong>действительно убирает повторяющуюся логику</strong>.</>
        ],
        documentation: "https://legacy.reactjs.org/docs/higher-order-components.html",
        advices: [
            "Пиши HOC для одной понятной задачи.",
            "Если повторяется только логика с хуками, рассмотри собственный хук вместо обёртки."
        ],
        motivation: "Достаточно запомнить цепочку: компонент на входе — дополнительное поведение — новый компонент на выходе.",
        summary: "Если нескольким компонентам нужна одинаковая обёртка с поведением, её можно оформить отдельной функцией. Такой приём называется HOC.",
        sections: [
            {
                id: "idea",
                title: "Функция, которая возвращает компонент",
                blocks: [
                    {
                        id: "idea-1",
                        type: "paragraph",
                        text: <>HOC расшифровывается как <strong>Higher-Order Component</strong>. Он принимает компонент и возвращает новый компонент-обёртку. Исходный компонент остаётся прежним.</>
                    },
                    {
                        id: "idea-2",
                        type: "paragraph",
                        text: <>Обёртка может показывать загрузку, добавлять общие данные или выполнять повторяющуюся проверку.</>
                    }
                ]
            },
            {
                id: "wrapper",
                title: "Добавляем состояние загрузки",
                blocks: [
                    {
                        id: "wrapper-1",
                        type: "paragraph",
                        text: <>Создадим обёртку: пока данные загружаются, она показывает сообщение. Когда загрузка закончилась — отображает <strong>переданный компонент</strong>.</>
                    },
                    {
                        id: "wrapper-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `function withLoading(Component) {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) return <p>Загрузка…</p>;
    return <Component {...props} />;
  };
}`
                    },
                    {
                        id: "wrapper-3",
                        type: "paragraph",
                        text: <><code>isLoading</code> нужен обёртке. Остальные props она <strong>передаёт дальше</strong>, чтобы исходный компонент получил свои данные.</>
                    }
                ]
            },
            {
                id: "apply",
                title: "Применяем к компоненту",
                blocks: [
                    {
                        id: "apply-1",
                        type: "code",
                        language: "jsx",
                        caption: "withLoading объявлен в предыдущем примере",
                        code: `function Profile({ name }) {
  return <h2>{name}</h2>;
}

const ProfileWithLoading = withLoading(Profile);`
                    },
                    {
                        id: "apply-2",
                        type: "paragraph",
                        text: <>Создание обёртки размещается <strong>вне функции другого компонента</strong>. Это позволяет сохранить один и тот же тип компонента между рендерами.</>
                    }
                ]
            },
            {
                id: "use",
                title: "Выбираем, что показать",
                blocks: [
                    {
                        id: "use-1",
                        type: "code",
                        language: "jsx",
                        caption: "В JSX родителя: сообщение «Загрузка…»",
                        code: "<ProfileWithLoading isLoading={true} name=\"Анна\" />"
                    },
                    {
                        id: "use-2",
                        type: "code",
                        language: "jsx",
                        caption: "В JSX родителя: профиль с именем",
                        code: "<ProfileWithLoading isLoading={false} name=\"Анна\" />"
                    },
                    {
                        id: "use-3",
                        type: "paragraph",
                        text: <>Проверка загрузки не попала внутрь Profile. Эту же обёртку можно применить <strong>к другому компоненту</strong>.</>
                    }
                ]
            },
            {
                id: "alternatives",
                title: "Когда достаточно хука",
                blocks: [
                    {
                        id: "alternatives-1",
                        type: "paragraph",
                        text: <>Если нужно повторно использовать только логику состояния или эффектов, часто удобнее <strong>собственный хук</strong>. HOC полезен, когда нужна именно обёртка, а также при работе с библиотеками и существующим кодом.</>
                    }
                ]
            }
        ]
    },
    {
        id: "router-basics",
        title: "React Router v6",
        group: "routing",
        order: 1,
        description: "React Router связывает адрес страницы с нужным компонентом и позволяет переходить между разделами без полной перезагрузки.",
        pitfalls: [
            <>Не смешивай примеры разных версий React Router. В этой карточке используется <strong>v6</strong>.</>,
            <>Ссылки и хуки роутера должны находиться <strong>внутри BrowserRouter</strong>. Второй BrowserRouter внутри первого не нужен.</>,
            <>Без <strong>Outlet</strong> вложенная страница не появится в родительской разметке.</>,
            <>Для обычных переходов внутри приложения используй <strong>Link</strong> или <strong>NavLink</strong>. Внешние ссылки можно оставлять обычными HTML-ссылками.</>,
            <>На опубликованном сайте сервер должен уметь открывать вложенные адреса. Иначе обновление такой страницы может вернуть <strong>404</strong>.</>
        ],
        documentation: "https://reactrouter.com/6.30.1/start/overview",
        advices: [
            "Сначала настрой главную и одну внутреннюю страницу.",
            "Проверь переход по ссылке, кнопку браузера «Назад» и обновление внутренней страницы."
        ],
        motivation: "Когда один адрес открывает нужную страницу, остальные маршруты строятся по тому же принципу.",
        summary: "Маршрут связывает адрес в браузере с экраном приложения. React Router помогает открывать нужную страницу и переходить между ними без полной перезагрузки.",
        sections: [
            {
                id: "install",
                title: "Подключаем React Router v6",
                blocks: [
                    {
                        id: "install-1",
                        type: "paragraph",
                        text: <>В этой теме используются API шестой версии. Для нового примера устанавливаем именно её.</>
                    },
                    {
                        id: "install-2",
                        type: "code",
                        language: "bash",
                        caption: "Терминал в папке проекта",
                        code: "npm install react-router-dom@6"
                    },
                    {
                        id: "install-3",
                        type: "paragraph",
                        text: <><strong>BrowserRouter</strong> размещают выше маршрутов и ссылок. Один такой роутер может обслуживать всё приложение.</>
                    }
                ]
            },
            {
                id: "routes",
                title: "Адрес и страница",
                blocks: [
                    {
                        id: "routes-1",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/topics" element={<h1>Темы</h1>} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`
                    },
                    {
                        id: "routes-2",
                        type: "paragraph",
                        text: <><strong>Routes</strong> выбирает подходящий маршрут. <code>path</code> — адрес, <code>element</code> — то, что нужно отобразить. Знак <code>*</code> обрабатывает остальные адреса.</>
                    }
                ]
            },
            {
                id: "links",
                title: "Переходим по ссылке",
                blocks: [
                    {
                        id: "links-1",
                        type: "paragraph",
                        text: <><strong>Link</strong> выполняет внутренний переход. <strong>NavLink</strong> дополнительно знает, соответствует ли ссылка открытому маршруту.</>
                    },
                    {
                        id: "links-2",
                        type: "code",
                        language: "jsx",
                        caption: "Menu должен находиться внутри BrowserRouter",
                        code: `import { Link, NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <NavLink
        to="/topics"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Темы
      </NavLink>
    </nav>
  );
}`
                    }
                ]
            },
            {
                id: "params",
                title: "Получаем часть адреса",
                blocks: [
                    {
                        id: "params-1",
                        type: "paragraph",
                        text: <>Двоеточие обозначает <strong>динамический параметр</strong>. При адресе <code>/topics/props</code> параметр <code>id</code> будет строкой "props".</>
                    },
                    {
                        id: "params-2",
                        type: "code",
                        language: "jsx",
                        caption: "Внутри Routes",
                        code: "<Route path=\"/topics/:id\" element={<TopicPage />} />"
                    },
                    {
                        id: "params-3",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useParams } from 'react-router-dom';

function TopicPage() {
  const { id } = useParams();
  return <h1>Тема: {id}</h1>;
}`
                    }
                ]
            },
            {
                id: "nested",
                title: "Общий макет и вложенная страница",
                blocks: [
                    {
                        id: "nested-1",
                        type: "paragraph",
                        text: <>Родительский маршрут может рисовать общий макет. <strong>Outlet</strong> — место, куда React Router подставляет дочернюю страницу.</>
                    },
                    {
                        id: "nested-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>React Cheatsheet</header>
      <main><Outlet /></main>
    </>
  );
}`
                    },
                    {
                        id: "nested-3",
                        type: "code",
                        language: "jsx",
                        caption: "Альтернативная конфигурация внутри BrowserRouter",
                        code: `<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<h1>Главная</h1>} />
    <Route path="topics" element={<h1>Темы</h1>} />
  </Route>
</Routes>`
                    },
                    {
                        id: "nested-4",
                        type: "paragraph",
                        text: <><code>index</code> открывается <strong>по адресу родителя</strong>. У дочернего пути здесь нет начального слеша.</>
                    }
                ]
            },
            {
                id: "navigate",
                title: "Переходим из обработчика",
                blocks: [
                    {
                        id: "navigate-1",
                        type: "paragraph",
                        text: <><strong>useNavigate</strong> подходит для перехода после действия. Для обычной навигационной ссылки лучше оставить Link.</>
                    },
                    {
                        id: "navigate-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/')}>На главную</button>;
}`
                    },
                    {
                        id: "navigate-3",
                        type: "paragraph",
                        text: <>После публикации проверь обновление вложенного адреса в браузере: <strong>сервер должен возвращать приложение и по этому пути</strong>.</>
                    }
                ]
            },
            {
                id: "location",
                title: "Читаем текущий адрес",
                blocks: [
                    {
                        id: "location-1",
                        type: "paragraph",
                        text: <><code>useParams</code> читает именованные части маршрута. <strong>useLocation</strong> даёт текущий адрес целиком: <code>pathname</code> — путь, <code>search</code> — строка после вопросительного знака, <code>hash</code> — часть после решётки.</>
                    },
                    {
                        id: "location-2",
                        type: "code",
                        language: "jsx",
                        caption: "Компонент внутри BrowserRouter",
                        code: `import { useLocation } from 'react-router-dom';

function CurrentPage() {
  const { pathname } = useLocation();
  return <p>Открыт раздел: {pathname}</p>;
}`
                    }
                ]
            },
            {
                id: "lazy-route",
                title: "Подгружаем страницу при переходе",
                blocks: [
                    {
                        id: "lazy-route-1",
                        type: "paragraph",
                        text: <>Оставим меню снаружи Suspense. Пока грузится новая страница, меню останется на месте, а внутри области страницы появится подсказка. Граница ошибок взята из темы «Lazy и Suspense».</>
                    },
                    {
                        id: "lazy-route-2",
                        type: "code",
                        language: "jsx",
                        caption: "App.jsx — самостоятельная точка входа роутера",
                        code: `import { lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SectionErrorBoundary from './SectionErrorBoundary.jsx';

const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <nav><Link to="/">Главная</Link> · <Link to="/catalog">Каталог</Link></nav>
      <SectionErrorBoundary>
        <Suspense fallback={<p>Загружаем страницу…</p>}>
          <Routes>
            <Route path="/" element={<h1>Главная</h1>} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="*" element={<h1>Страница не найдена</h1>} />
          </Routes>
        </Suspense>
      </SectionErrorBoundary>
    </BrowserRouter>
  );
}`
                    },
                    {
                        id: "lazy-route-3",
                        type: "code",
                        language: "jsx",
                        caption: "pages/CatalogPage.jsx",
                        code: "export default function CatalogPage() { return <h1>Каталог</h1>; }"
                    },
                    {
                        id: "lazy-route-4",
                        type: "paragraph",
                        text: <>Если <code>BrowserRouter</code> уже стоит в main.jsx, <strong>не добавляй второй</strong>: оставь в App только его содержимое. Этот пример — замена предыдущего App, а не вложенный роутер.</>
                    }
                ]
            },
            {
                id: "private-route",
                title: "Дополнительно: страница после входа",
                blocks: [
                    {
                        id: "private-route-1",
                        type: "paragraph",
                        text: <>Пока проверяется сессия, показываем ожидание. После проверки решаем: открыть содержимое или перейти на вход. Так пользователь с действующей сессией <strong>не получит преждевременный редирект</strong>.</>
                    },
                    {
                        id: "private-route-2",
                        type: "code",
                        language: "jsx",
                        caption: "status приходит из твоей логики сессии",
                        code: `import { Navigate } from 'react-router-dom';

function RequireAuth({ status, children }) {
  if (status === 'loading') return <p>Проверяем вход…</p>;
  if (status !== 'authenticated') return <Navigate to="/login" replace />;
  return children;
}`
                    },
                    {
                        id: "private-route-3",
                        type: "code",
                        language: "jsx",
                        caption: "Фрагмент внутри Routes; authStatus и ProfilePage определены в приложении",
                        code: `<Route path="/profile" element={
  <RequireAuth status={authStatus}><ProfilePage /></RequireAuth>
} />`
                    },
                    {
                        id: "private-route-4",
                        type: "paragraph",
                        text: <>Маршрут <code>/login</code> должен существовать отдельно от этой обёртки. <code>replace</code> заменяет текущую запись истории. Такая проверка управляет интерфейсом; доступ к данным API <strong>всё равно проверяет сервер</strong>.</>
                    }
                ]
            }
        ]
    },
    {
        id: "controlled-forms",
        title: "Формы",
        group: "forms",
        order: 1,
        description: "Формы собирают ввод пользователя, проверяют его и передают данные для дальнейшей обработки.",
        pitfalls: [
            <>Не храни одно поле <strong>одновременно</strong> в Ant Design Form и отдельном useState: появятся два источника значения.</>,
            <>Для текстового поля используется <strong>value</strong>, для флажка — <strong>checked</strong>.</>,
            <><strong>initialValues</strong> задаёт начальные значения. Для заполнения уже открытой Ant Design-формы полученными данными используй <strong>form.setFieldsValue</strong>.</>,
            <>Успешная проверка формы <strong>ещё не означает успешное сохранение</strong> на сервере. Результат запроса и его ошибки обрабатываются отдельно.</>
        ],
        documentation: "https://ant.design/components/form/",
        advices: [
            "Начни с Ant Design Form: он уже подходит к выбранным компонентам интерфейса.",
            "Показывай, что исправить в поле, и не позволяй повторно отправлять форму, пока запрос выполняется."
        ],
        motivation: "Небольшая форма с понятными подписями и ошибками — уже полезная часть настоящего приложения.",
        summary: "Форма должна собрать данные, подсказать ошибки и обработать отправку. Сначала посмотрим, как значение связано с полем, затем соберём форму на Ant Design.",
        sections: [
            {
                id: "controlled",
                title: "Кто хранит введённое значение",
                blocks: [
                    {
                        id: "controlled-1",
                        type: "paragraph",
                        text: <>В управляемом поле значение хранится в <strong>state</strong>. <code>value</code> показывает его в input, <code>onChange</code> сохраняет новый ввод.</>
                    },
                    {
                        id: "controlled-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useState } from 'react';

function NameField() {
  const [name, setName] = useState('');
  return (
    <input
      aria-label="Имя"
      value={name}
      onChange={event => setName(event.target.value)}
    />
  );
}`
                    },
                    {
                        id: "controlled-3",
                        type: "paragraph",
                        text: <>В неуправляемом поле значение хранит <strong>сам элемент браузера</strong>. Его можно прочитать при отправке через FormData. В проекте с Ant Design управление полями удобно поручить Form.</>
                    }
                ]
            },
            {
                id: "antd",
                title: "Минимальная форма Ant Design",
                blocks: [
                    {
                        id: "antd-1",
                        type: "paragraph",
                        text: <><strong>Form</strong> объединяет поля. <strong>Form.Item</strong> задаёт имя поля в итоговом объекте. <strong>onFinish</strong> получает этот объект после успешной проверки.</>
                    },
                    {
                        id: "antd-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { Button, Form, Input } from 'antd';

function ProfileForm() {
  return (
    <Form onFinish={values => console.log(values)}>
      <Form.Item name="name" label="Имя">
        <Input />
      </Form.Item>
      <Button htmlType="submit">Сохранить</Button>
    </Form>
  );
}`
                    },
                    {
                        id: "antd-3",
                        type: "paragraph",
                        text: <>Form сам связывает именованное поле с его значением. Отдельный useState для этого же поля <strong>не нужен</strong>.</>
                    }
                ]
            },
            {
                id: "rules",
                title: "Добавляем проверку",
                blocks: [
                    {
                        id: "rules-1",
                        type: "paragraph",
                        text: <><strong>rules</strong> описывает требования к значению. Если email пустой или записан неверно, Form покажет сообщение и не вызовет onFinish.</>
                    },
                    {
                        id: "rules-2",
                        type: "code",
                        language: "jsx",
                        caption: "Добавь внутрь Form",
                        code: `<Form.Item name="email" label="Email" rules={[
  { required: true, message: 'Введите email' },
  { type: 'email', message: 'Проверьте адрес почты' },
]}>
  <Input />
</Form.Item>`
                    }
                ]
            },
            {
                id: "checkbox",
                title: "Флажок хранит checked",
                blocks: [
                    {
                        id: "checkbox-1",
                        type: "paragraph",
                        text: <>Checkbox использует <strong>checked</strong> вместо value. Об этом нужно сообщить Form.Item.</>
                    },
                    {
                        id: "checkbox-2",
                        type: "code",
                        language: "jsx",
                        caption: "Внутри Form; Checkbox импортируется из antd",
                        code: `<Form.Item name="tips" valuePropName="checked">
  <Checkbox>Показывать подсказки</Checkbox>
</Form.Item>`
                    }
                ]
            },
            {
                id: "initial",
                title: "Начальные значения и данные позже",
                blocks: [
                    {
                        id: "initial-1",
                        type: "paragraph",
                        text: <><strong>initialValues</strong> заполняет форму при создании. Если нужно изменить уже открытые поля, используй экземпляр <strong>form</strong> и <strong>setFieldsValue</strong>.</>
                    },
                    {
                        id: "initial-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { Button, Form, Input } from 'antd';

function ProfileForm() {
  const [form] = Form.useForm();

  return (
    <Form form={form} initialValues={{ name: '' }}>
      <Form.Item name="name" label="Имя"><Input /></Form.Item>
      <Button onClick={() => form.setFieldsValue({ name: 'Анна' })}>
        Заполнить имя
      </Button>
    </Form>
  );
}`
                    }
                ]
            },
            {
                id: "submission",
                title: "Проверка и сохранение — два шага",
                blocks: [
                    {
                        id: "submission-1",
                        type: "paragraph",
                        text: <><code>onFinish</code> означает, что значения прошли правила формы. Сохранение на сервере <strong>выполняется отдельно</strong>: запрос может завершиться ошибкой.</>
                    },
                    {
                        id: "submission-2",
                        type: "paragraph",
                        text: <>На время запроса кнопке можно передать <code>loading</code>. После ответа нужно <strong>показать результат</strong>. Проверка на клиенте помогает пользователю, но сервер также должен проверять данные.</>
                    }
                ]
            },
            {
                id: "ids",
                title: "Связываем подпись с полем: useId",
                blocks: [
                    {
                        id: "ids-1",
                        type: "paragraph",
                        text: <>Нажатие на подпись должно переводить фокус в поле. Для этого <code>htmlFor</code> у label и <code>id</code> у input должны совпадать. <strong>useId</strong> помогает создать отдельный идентификатор для каждого экземпляра компонента.</>
                    },
                    {
                        id: "ids-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useId } from 'react';

function EmailField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Почта</label>
      <input id={id} type="email" name="email" />
    </>
  );
}`
                    },
                    {
                        id: "ids-3",
                        type: "paragraph",
                        text: <>В Ant Design эту связь обычно организует <strong>Form.Item</strong> с name и label. useId не предназначен для key в списке: ключ берут из самих данных.</>
                    }
                ]
            },
            {
                id: "form-libraries",
                title: "Дополнительно: React Hook Form, Formik и Yup",
                blocks: [
                    {
                        id: "form-libraries-1",
                        type: "paragraph",
                        text: <>Ant Design Form уже управляет значениями и проверками. Для проекта с Ant Design можно начать с него. <strong>React Hook Form</strong> и <strong>Formik</strong> — другие способы организовать форму; выбирать все три одновременно не нужно.</>
                    },
                    {
                        id: "form-libraries-2",
                        type: "paragraph",
                        text: <>В React Hook Form обычное поле подключают через <code>register</code>. <strong>Controller</strong> связывает библиотеку с управляемым компонентом, у которого свой способ передать значение и обработать изменение. <strong>Yup</strong> описывает правила данных; в React Hook Form его подключают через resolver. Сам по себе Controller не подключает Yup.</>
                    },
                    {
                        id: "form-libraries-3",
                        type: "code",
                        language: "bash",
                        caption: "Только если выбираешь этот вариант",
                        code: "npm install react-hook-form"
                    },
                    {
                        id: "form-libraries-4",
                        type: "code",
                        language: "jsx",
                        caption: "Самостоятельная альтернатива Ant Design Form",
                        code: `import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox } from 'antd';

function ConsentForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: { agreed: false }
  });
  return (
    <form onSubmit={handleSubmit(values => console.log(values))}>
      <Controller name="agreed" control={control}
        rules={{ validate: value => value || 'Подтверди согласие' }}
        render={({ field, fieldState }) => (
          <>
            <Checkbox name={field.name} ref={field.ref}
              checked={field.value} onBlur={field.onBlur}
              onChange={event => field.onChange(event.target.checked)}>
              Я согласен
            </Checkbox>
            {fieldState.error && <p role="alert">{fieldState.error.message}</p>}
          </>
        )}
      />
      <Button htmlType="submit">Продолжить</Button>
    </form>
  );
}`
                    },
                    {
                        id: "form-libraries-5",
                        type: "paragraph",
                        text: <>Checkbox получает <code>checked</code>, а не <code>value</code>. Одно поле <strong>не нужно одновременно</strong> регистрировать через register и Controller или отдавать под управление Form.Item с name. У формы должен быть понятный источник значений.</>
                    }
                ]
            }
        ]
    },
    {
        id: "web-storage",
        title: "Хранение данных",
        group: "storage",
        order: 1,
        description: "Браузерные хранилища позволяют сохранять данные за пределами текущего состояния React.",
        pitfalls: [
            <>Запись в хранилище сама по себе <strong>не обновляет React-интерфейс</strong>. Отображаемые данные нужно обновить и в состоянии.</>,
            <>localStorage и sessionStorage хранят строки. При чтении объекта не забывай <strong>преобразовать JSON обратно</strong>.</>,
            <><strong>Не храни здесь пароли</strong> и секретные ключи: данные могут быть доступны JavaScript страницы.</>,
            <>Данные <strong>не гарантированно сохраняются навсегда</strong>: пользователь может очистить их, а запись может завершиться ошибкой.</>,
            <>Для важной информации браузер <strong>не должен быть единственным местом</strong> хранения.</>
        ],
        documentation: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
        advices: [
            "Выбирай хранилище по тому, как долго нужны данные и должен ли получать их сервер.",
            "Удаляй конкретные записи, а не очищай всё хранилище сайта без необходимости."
        ],
        motivation: "Сохрани один черновик и обнови страницу. Так сразу видно, какую задачу решает хранилище.",
        summary: "После перезагрузки страницы локальный state создаётся заново. Чтобы сохранить настройку или черновик дольше, можно использовать хранилище браузера.",
        sections: [
            {
                id: "choice",
                title: "Какое хранилище выбрать",
                blocks: [
                    {
                        id: "choice-1",
                        type: "list",
                        items: [
                            <><strong>localStorage</strong> — небольшие данные, которые должны пережить закрытие браузера.</>,
                            <><strong>sessionStorage</strong> — данные для текущей сессии вкладки.</>,
                            <><strong>localForage</strong> — библиотека для асинхронного хранения объектов и других данных, обычно через IndexedDB.</>
                        ]
                    },
                    {
                        id: "choice-2",
                        type: "paragraph",
                        text: <>Запись может не удаться, а пользователь может удалить данные. Важная информация <strong>не должна существовать только в браузере</strong>.</>
                    }
                ]
            },
            {
                id: "local",
                title: "localStorage: строка под ключом",
                blocks: [
                    {
                        id: "local-1",
                        type: "paragraph",
                        text: <>Запись состоит из <strong>ключа и строкового значения</strong>. По тому же ключу её можно прочитать или удалить.</>
                    },
                    {
                        id: "local-2",
                        type: "code",
                        language: "javascript",
                        caption: "Код для браузера",
                        code: `localStorage.setItem('cheatsheet:theme', 'dark');

const theme = localStorage.getItem('cheatsheet:theme');
console.log(theme); // 'dark'

localStorage.removeItem('cheatsheet:theme');`
                    },
                    {
                        id: "local-3",
                        type: "paragraph",
                        text: <>Если записи нет, <code>getItem</code> вернёт <strong>null</strong>. Префикс cheatsheet помогает отличать настройки проекта от других записей.</>
                    }
                ]
            },
            {
                id: "json",
                title: "Сохраняем объект",
                blocks: [
                    {
                        id: "json-1",
                        type: "paragraph",
                        text: <>localStorage хранит строки. <strong>JSON.stringify</strong> превращает объект в строку, <strong>JSON.parse</strong> восстанавливает его после чтения.</>
                    },
                    {
                        id: "json-2",
                        type: "code",
                        language: "javascript",
                        caption: "Учитываем ошибку доступа и повреждённый JSON",
                        code: `try {
  const settings = { theme: 'dark', fontSize: 16 };
  localStorage.setItem('cheatsheet:settings', JSON.stringify(settings));

  const text = localStorage.getItem('cheatsheet:settings');
  const saved = text === null ? null : JSON.parse(text);
  console.log(saved);
} catch (error) {
  console.error('Не удалось прочитать или сохранить настройки', error);
}`
                    }
                ]
            },
            {
                id: "session",
                title: "sessionStorage: в пределах вкладки",
                blocks: [
                    {
                        id: "session-1",
                        type: "paragraph",
                        text: <>API такой же. Обновление страницы сохраняет данные, <strong>закрытие вкладки обычно завершает их срок жизни</strong>.</>
                    },
                    {
                        id: "session-2",
                        type: "code",
                        language: "javascript",
                        caption: "Временный запрос поиска",
                        code: `sessionStorage.setItem('cheatsheet:query', 'useState');

const query = sessionStorage.getItem('cheatsheet:query');
console.log(query); // 'useState'`
                    }
                ]
            },
            {
                id: "forage",
                title: "localForage: объект без ручного JSON",
                blocks: [
                    {
                        id: "forage-1",
                        type: "paragraph",
                        text: <><strong>localForage</strong> устанавливается отдельно. Операции асинхронные: <code>await</code> ждёт их завершения. Объект можно передать напрямую.</>
                    },
                    {
                        id: "forage-2",
                        type: "code",
                        language: "bash",
                        caption: "Терминал",
                        code: "npm install localforage"
                    },
                    {
                        id: "forage-3",
                        type: "code",
                        language: "javascript",
                        caption: "Вызови saveNote из обработчика",
                        code: `import localforage from 'localforage';

async function saveNote() {
  try {
    await localforage.setItem('note', { text: 'Повторить Props' });
    const note = await localforage.getItem('note');
    console.log(note);
  } catch (error) {
    console.error('Не удалось сохранить заметку', error);
  }
}`
                    }
                ]
            },
            {
                id: "react",
                title: "Связываем с React",
                blocks: [
                    {
                        id: "react-1",
                        type: "paragraph",
                        text: <>Хранилище <strong>само не обновляет JSX</strong>. В примере текст показывается из state, а по кнопке сохраняется в localStorage. Это компонент для браузерного приложения.</>
                    },
                    {
                        id: "react-2",
                        type: "code",
                        language: "jsx",
                        caption: "",
                        code: `import { useState } from 'react';

function Draft() {
  const [text, setText] = useState(() => {
    try { return localStorage.getItem('draft') ?? ''; }
    catch { return ''; }
  });

  function save() {
    try { localStorage.setItem('draft', text); }
    catch (error) { console.error('Не удалось сохранить', error); }
  }

  return (
    <>
      <input aria-label="Черновик" value={text}
        onChange={event => setText(event.target.value)} />
      <button onClick={save}>Сохранить</button>
    </>
  );
}`
                    }
                ]
            },
            {
                id: "cookies",
                title: "Чем отличаются cookies",
                blocks: [
                    {
                        id: "cookies-1",
                        type: "paragraph",
                        text: <><strong>Cookies</strong> браузер может отправлять серверу вместе с подходящими запросами. localStorage и sessionStorage автоматически в запрос не попадают. Для пользовательской сессии способ хранения выбирают вместе с серверной частью.</>
                    },
                    {
                        id: "cookies-2",
                        type: "paragraph",
                        text: <><strong>Пароли и секретные ключи</strong> нельзя складывать в доступные JavaScript хранилища.</>
                    }
                ]
            }
        ]
    }
];

export default topics;
import topics from "../../../data/data.jsx";
import {CatalogHeader} from "./CatalogHeader/CatalogHeader.jsx";
import {CatalogGrid} from "./CatalogGrid/CatalogGrid.jsx";

export const Catalog = ({query, setQuery, showAll, setShowAll}) => {
    const normalized = query.toLocaleLowerCase("ru").trim();

    const topicsFound = topics.filter((topic) =>
        `${topic.title} ${topic.description} ${topic.group}`
            .toLocaleLowerCase("ru")
            .includes(normalized),
    );

    const isSearching = normalized.length > 0;
    const displayedTopics = (showAll || isSearching) ? topicsFound : topicsFound.slice(0, 12);


    return (
        <>
            <CatalogHeader showAll={showAll}
                           setShowAll={setShowAll}
                           topicsFound={topicsFound}
                           isSearching={isSearching}
            />
            <CatalogGrid query={query}
                         setQuery={setQuery}
                         topicsFound={topicsFound}
                         displayedTopics={displayedTopics}
            />
        </>
    )
}
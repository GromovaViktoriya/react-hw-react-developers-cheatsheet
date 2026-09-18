import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

export const CatalogHeader = ({isSearching, topicsFound, showAll, setShowAll}) => {
    const handleOnClick = () => {
        setShowAll(!showAll)
    }

    return (
        <div className="catalog-header">
            <h2 className="catalog-title" id="catalog-title">
                Каталог тем
            </h2>
            {!isSearching && topicsFound.length > 12 && (
                <button className="catalog-link" onClick={handleOnClick}>
                    {showAll ? (
                        <>
                            <ArrowLeftOutlined className="catalog-link-icon-left" aria-hidden="true" /> Свернуть
                        </>
                    ) : (
                        <>
                            Все темы <ArrowRightOutlined className="catalog-link-icon-right" aria-hidden="true" />
                        </>
                    )}
                </button>
            )}
        </div>
    )
}
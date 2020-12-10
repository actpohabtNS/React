import React from "react";

class Pages extends React.Component {
    render() {
        const {page, total_pages, updatePage} = this.props;

        const setPageClassName = (page, spec_page) => {
            let clName = "page-item";

            if (page === spec_page)
                clName += " disabled";
            
            return clName;
        };

        return (
            <div className="col-12">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={setPageClassName(page, 1)}>
                            <a className="page-link" href="#" aria-label="Previous"
                                onClick={updatePage.bind(null, page-1)}
                            >
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>

                        <li className={setPageClassName(page, 1)}>
                            <a className="page-link" href="#"
                                onClick={updatePage.bind(null, 1)}
                            >
                                1
                            </a>
                        </li>

                        <li className="page-item disabled">
                            <a className="page-link" href="#">
                                ...
                            </a>
                        </li>

                        <li className="page-item active">
                            <a className="page-link" href="#">
                                {page}
                            </a>
                        </li>
                        
                        <li className="page-item disabled">
                            <a className="page-link" href="#">
                                ...
                            </a>
                        </li>

                        <li className={setPageClassName(page, total_pages)}>
                            <a className="page-link" href="#"
                                onClick={updatePage.bind(null, total_pages)}
                            >
                                {total_pages}
                            </a>
                        </li>

                        <li className={setPageClassName(page, total_pages)}>
                            <a className="page-link" href="#" aria-label="Next"
                                onClick={updatePage.bind(null, page+1)}
                            >
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pages;
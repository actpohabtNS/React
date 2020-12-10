import { render } from "@testing-library/react";
import React from "react";

class MovieTabs extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.sortBy !== this.props.sortBy;
    };

    render() {
        const {sortBy, updateSortBy} = this.props;
        const handleClick = value => {
        return event => {
                updateSortBy(value);
            }
        };

        const getClassName = (value) => {
            return `nav-link ${sortBy === value ? "active" : ""}`;
        };

        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div
                        className={getClassName("popularity.desc")}
                        onClick={handleClick("popularity.desc")}
                        style={{cursor: "pointer"}}
                    >
                        Popularity
                    </div>
                </li>
    
                <li className="nav-item">
                    <div 
                        className={getClassName("revenue.desc")}
                        onClick={handleClick("revenue.desc")}
                        style={{cursor: "pointer"}}
                    >
                        Revenue
                    </div>
                </li>
    
                <li className="nav-item">
                    <div 
                        className={getClassName("vote_average.desc")}
                        onClick={handleClick("vote_average.desc")}
                        style={{cursor: "pointer"}}
                    >
                        Vote average
                    </div>
                </li>
            </ul>
        )
    };
}

export default MovieTabs;
import React, { Fragment } from 'react'
import {
    Header,
    Input
} from "semantic-ui-react";

const SearchProfiles = ({ loadingSearch, handleSearchChange }) => {
    return (
        <Fragment>
            <Header floated="right">
                <Input
                    loading={loadingSearch}
                    onChange={handleSearchChange}
                    size="mini"
                    icon="search"
                    name="searchTerm"
                    placeholder="Search Someone"
                />
            </Header>
        </Fragment>
    )
}

export default SearchProfiles

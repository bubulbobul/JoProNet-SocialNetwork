import React, { Fragment } from 'react'
import {
    Header,
    Input
} from "semantic-ui-react";

const PostsSearch = ({ loadingSearch, handleSearchChange }) => {
    return (
        <Fragment>
            <Header floated="right">
                <Input
                    loading={loadingSearch}
                    onChange={handleSearchChange}
                    size="mini"
                    icon="search"
                    name="searchTerm"
                    placeholder="Search Posts by name"
                />
            </Header>
        </Fragment>
    )
}

export default PostsSearch;

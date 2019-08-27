import React, { Fragment } from 'react'
import { Pagination, Dropdown, Grid } from 'semantic-ui-react'

const ProfilesPagination = ({
    totalProfiles,
    profilePerPage,
    handlePaginationChange,
    handleChangeProfilePerPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProfiles / profilePerPage); i++) {
        pageNumbers.push(i)
    }

    const totalPages = pageNumbers.length.toString();

    const options = [
        { key: 5, text: "5", value: 5 },
        { key: 10, text: "10", value: 10 },
        { key: 15, text: "15", value: 15 },
        { key: 20, text: "20", value: 20 },
    ]

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }

    return (
        <Fragment >
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column />
                    <Grid.Column textAlign="center">
                        <Pagination
                            defaultActivePage={1}
                            totalPages={totalPages}
                            onPageChange={handlePaginationChange}
                            onClick={scrollUp}
                            firstItem={null}
                            lastItem={null}
                            pointing
                            secondary
                        />
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <Dropdown
                            options={options}
                            text="Number of profile per page"
                            value={profilePerPage}
                            onChange={handleChangeProfilePerPage}
                            // style={{ zIndex: "10001" }}
                            floated="right"
                        />
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </Fragment>
    )
}

export default ProfilesPagination
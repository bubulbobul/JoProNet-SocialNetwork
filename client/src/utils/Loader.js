import React, { Fragment } from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export const Loading = () => (
  <Fragment>
    <Dimmer active>
      <Loader size='massive'>Loading ...</Loader>
    </Dimmer>
  </Fragment>
);

export const LoadingProfile = () => (
  <Dimmer active inverted>
    <Loader size='massive'>Loading ...</Loader>
  </Dimmer>
);

export const LoaderInlineCentered = () => (
  <Fragment>
    <Segment>
      <Dimmer active>
        <Loader active inline='centered'>
          Loading ...
        </Loader>
      </Dimmer>
    </Segment>
  </Fragment>
);

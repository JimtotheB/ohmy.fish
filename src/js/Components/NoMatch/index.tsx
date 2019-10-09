import * as React from "react";
import {Anchor, Box, Text} from "grommet";

export const NoMatch = () => (
  <Box
    direction="row"
    gap="small"
    margin='small'
    pad='xlarge'
    background={'brand'}
    justify="center"
  >
    <Text>404! That page wasn't found.</Text>
  </Box>
)
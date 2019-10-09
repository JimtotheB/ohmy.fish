import * as React from "react";
import {Anchor, Box, Text} from "grommet";

export const MenuLinks = () => (
  <Box
    direction="row"
    gap="small"
    margin='small'
    pad={{bottom: 'small', horizontal: "large"}}
    justify="start"
  >

    <Anchor
      href={'https://github.com/oh-my-fish/oh-my-fish/blob/master/README.md'}
      target="_blank"
      label={<Text size={'small'}>OMF! on github</Text>}
    />
    <Anchor
      href={'http://fishshell.com/docs/current/index.html'}
      target="_blank"
      label={<Text size={'small'}>The Fish Shell</Text>}
    />
  </Box>
)
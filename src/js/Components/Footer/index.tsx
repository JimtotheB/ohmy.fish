import * as React from "react";
import {Anchor, Box, Text} from "grommet";

export const Footer = () => (
  <Box
    direction="row"
    gap="small"
    margin='small'
    background='brand'
    pad='large'
    justify="center"
  >
    <Text>Copyright © 2019 Jim Bulkowski. Website and Code Licenced under the MIT License.</Text>
    <Anchor href={'https://github.com/JimtotheB/ohmy.fish'} label='Want to Contribute?'/>
  </Box>
)
import {Heading, Box, ResponsiveContext, Text, Anchor} from "grommet";
import {MenuLinks} from "./MenuLinks";
import * as React from "react";

export const Nav = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
        direction='column'
        background='brand'
        margin={'xsmall'}
        >
          <Box
            direction='row'
            margin={'small'}
            // align={'center'}
            round={'xsmall'}
            // alignSelf={size === 'small' || size === 'xsmall' ? 'center' : 'start'}
            gap="small"
            pad={{top:'small', horizontal: "large" }}
          >
            <Anchor
              href={'/'}
              label={<Text size={'xlarge'}>Oh My Fish! The Fish Shell Framework</Text>}
            />
          </Box>
          <MenuLinks/>
        </Box>

      )}
    </ResponsiveContext.Consumer>
  )
}
/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project tv.trivnow.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */
import * as React from 'react'
// const React = window.React
import {Box} from 'grommet'
import {PackageList} from "../../Components/PackageList";

import {fromPairs, map, split, trim, compose, compact} from 'lodash/fp'

const inner = compose(map(trim), split('='))
const transformer = compose(fromPairs, map(inner), compact, split('\n'))

import {OMF_Packages} from "../../../OMF_PKGS";

export const LandingContainer = ({filter}) => {
  return (
    <Box
      fill
      direction={'column'}
    >
      <PackageList display={filter}/>
    </Box>
  )
}

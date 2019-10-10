/**
 * @file Theme
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project omfpackages.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */
import {grommet, dark} from 'grommet/themes'
import {deepMerge} from "grommet/utils";

const theme = {
  global: {
    active: {
      color: 'white',
      background: {
        color: 'fishbg',
        opacity: 100
      }
    },
    colors: {
      background: 'white',
      brand: 'fishbg',
      fishbg: 'rgb(32, 45, 83)',
      fishHead: 'rgb(173, 36, 49)',
      fishTail: 'rgb(206,113,39)',
      "accent-1": '#FD6FFF',
      "accent-2": '#60EB9F',
      "accent-3": '#60EBE1',
      "accent-4": '#FFCA58',
      "neutral-1": '#EB6060',
      "neutral-2": '#01C781',
      "neutral-3": '#6095EB',
      "neutral-4": '#FFB200',
      focus: 'fishTail'
    }
  },
  anchor: {
    color: {
      dark: 'fishTail',
      light: 'brand'
    }
  },
  button: {
    border: {
      radius: '5px'
    },
    color: 'fishbg'
  },
  formField: {
    border: {
      color: 'brand'
    }
  }

}

export const Theme = deepMerge(grommet, theme)

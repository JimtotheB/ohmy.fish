import * as React from 'react'
// const React = window.React
import {Button, Box, Text, Anchor, InfiniteScroll, Form, FormField, TextInput} from 'grommet'
import {Close, Search} from 'grommet-icons'
import {Link} from 'react-router-dom'
import {OMF_Packages} from "../../../OMF_PKGS";



export class PackageList extends React.Component {
  props: {display: string}
  state: { display: string, searchBox?: boolean, searchString?: boolean}

  constructor(props) {
    super(props)

    let display = props.display ? props.display : 'theme'
    this.state = {
      display: display,
    }

  }

  activeFilter(filter) {
    return this.state.display === filter
  }

  getLen(filter) {
    return OMF_Packages[filter].length
  }

  getAnchorText(item){
    return item.maintainer ? `${item.name} - ${item.maintainer}` : item.name
  }

  getPackagelist(){
    let pkgs = OMF_Packages[this.state.display]
    let list = this.state.searchBox ? pkgs.filter((item => {return this.state.searchString ? item.name.includes(this.state.searchString) : true })) : pkgs
    return list
  }

  showThemes() {
    this.setState({display: 'theme'})
  }

  showPlugins() {
    this.setState({display: 'plugin'})
  }

  showSearch(){
    this.setState({searchBox: true})
  }
  resetBox(){
    this.setState({searchBox: false})
  }
  showBox(){
    return (
      <Box
        direction='row'
      >
        {!this.state.searchBox &&
        <Button
          active={this.activeFilter('search')}
          onClick={() => this.showSearch()}
          icon={<Search />}
          label='Search'
        />}

        {this.state.searchBox &&
          <Form
            onChange={(changes) => {
              if (changes.searchString) {
                this.setState({searchString: changes.searchString})
              }
            }}
          >
            <FormField name='searchString'
                       placeholder={`Search ${this.state.display === 'theme' ? 'themes' : 'plugins'}`}/>
          </Form>
        }
        {this.state.searchBox && <Close color='brand' onClick={() => {this.resetBox()}}/>}
      </Box>
    )
  }

  render() {
    return (
      <Box
        direction={'column'}
      >
        <Box
          align={'center'}
          overflow={'auto'}
          gap={'small'}
        >

          <Box
            flex={false}
            margin={'xsmall'}
            round={'xsmall'}
            width={'xlarge'}
            direction={'row'}
            gap={'small'}
          >

            {this.showBox()}

            <Link to={'/themes'}>
              <Button
                active={this.activeFilter('theme')}
                label={`Show ${this.getLen('theme')} Themes`}
              />
            </Link>

            <Link to={'/plugins'}>
              <Button
                active={this.activeFilter('plugin')}
                label={`Show ${this.getLen('plugin')} Plugins`}
              />
            </Link>
          </Box>

          <InfiniteScroll items={this.getPackagelist()} step={10}>
            {(item, index) => (
              <Box
                flex={false}
                key={index}
                pad='medium'
                background={`brand`}
                margin={'xsmall'}
                elevation={'large'}
                round={'xsmall'}
                width={'xlarge'}
                direction={'column'}
                gap={'small'}
                onClick={() => {
                }}
                // align='center'
              >
                <Anchor href={item.repository} label={this.getAnchorText(item)}/>
                {item.description && <Text color='white'>{item.description}</Text>}
              </Box>
            )}
          </InfiniteScroll>
        </Box>
      </Box>
    )
  }
}
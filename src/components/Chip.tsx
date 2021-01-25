import * as React from 'react'
import { Chip as MuiChip, ChipProps } from '@material-ui/core'

interface Props extends ChipProps {
  label: string
}

class Chip extends React.Component<Props, never> {
  render() {
    return (
      <MuiChip 
        key={this.props.label}
        variant='outlined'
        label={this.props.label}
        icon={<i className="fas fa-film fa-lg" />}
        color='default'
      />
    )
  }
}

export default Chip

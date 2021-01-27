import * as React from 'react'
import { Chip as MuiChip, ChipProps, createStyles, makeStyles, Theme } from '@material-ui/core'

interface Props extends ChipProps {
  label: string
}

const  Chip = (props: Props) =>  {
    const classes = useStyles();
    return (
      <MuiChip 
        classes={{
          root: classes.root, 
          icon: classes.icon
        }}
        variant='outlined'
        label={props.label}
        icon={<i className="fas fa-film fa-lg" />}
      />
    )
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      borderColor: 'white',
    },
    icon: {
      color: 'white'
    }
  }),
);

export default Chip

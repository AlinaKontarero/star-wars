import * as React from 'react'
import {
  Column,
  ColumnProps,
  Table as VirtualizedTable,
  TableCellProps,
  SortDirectionType,
  SortIndicator
} from 'react-virtualized'
import 'react-virtualized/styles.css'

interface Props {

}

class Table extends React.Component<Props, never> {
  render() {
    return (
      <VirtualizedTable
        sort={this.props.onSort}
        width={width}
        height={this.getHeight()}
        headerHeight={this.props.headerHeight}
        rowHeight={this.props.rowHeight}
        rowCount={this.getRowCount()}
        rowGetter={({ index }) => this.props.data[index]}
        className={`pendula-table ${this.props.className || ''}`}
      >
        {this.props.columns.map(columnProps => (
          <Column
            key={`tablecolumn-${columnProps.dataKey}`}
            {...columnProps}
            cellRenderer={this.getCellRenderer(columnProps)}
            headerRenderer={() => this.headerRenderer(columnProps)}
          />
        ))}
      </VirtualizedTable>
    )
  }
}

export default Table
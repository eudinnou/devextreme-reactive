import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'clsx';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { getBorder } from './utils';

const PREFIX = 'TableStubCell';
export const classes = {
  cell: `${PREFIX}-cell`,
  footer: `${PREFIX}-footer`,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${classes.cell}`]: {
    padding: 0,
  },
  [`&.${classes.footer}`]: {
    borderTop: getBorder(theme),
  },
}));

export const TableStubCell = ({
  className,
  tableRow,
  tableColumn,
  forwardedRef,
  ...restProps
}) => (
  <StyledTableCell
    ref={forwardedRef}
    className={classNames(classes.cell, className)}
    classes={{ footer: classes.footer }}
    {...restProps}
  />
);

TableStubCell.propTypes = {
  className: PropTypes.string,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

TableStubCell.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  forwardedRef: undefined,
};

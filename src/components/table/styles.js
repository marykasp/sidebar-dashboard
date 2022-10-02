import { styled } from "@mui/system";
import TableCell from "@mui/material/TableCell";

export const CustomizedTableCell = styled(TableCell)`
  color: purple;

  &.status {
    padding: 5px;
    border-radius: 2px;
  }
`;

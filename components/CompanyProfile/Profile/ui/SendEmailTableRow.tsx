import { Checkbox } from "@/components/layouts/Form";
import { GridTableItem } from "@/components/layouts";
import { formatDate } from "@/lib/utils/formatDate";

type SendEmailTableRowT = {
  position: string;
  createdAt: string;
  views: number;
};

const SendEmailTableRow: React.FC<SendEmailTableRowT> = (props) => {
  return (
    <>
      <GridTableItem>
        <Checkbox />
      </GridTableItem>

      <GridTableItem>{props.position}</GridTableItem>

      <GridTableItem>{formatDate(props.createdAt)}</GridTableItem>

      <GridTableItem>22</GridTableItem>

      <GridTableItem>{props.views}</GridTableItem>
    </>
  );
};

export default SendEmailTableRow;

import {
  AddTable,
  AddColumnBefore,
  AddColumnAfter,
  DeleteColumn,
  AddRowAfter,
  AddRowBefore,
  DeleteRow,
  RemoveTable,
  MergeCells,
  SplitCell,
  ToggleHeaderColumn,
  ToggleHeaderRow,
  ToggleHeaderCell,
  MergeOrSplit,
  FixTables,
  NextCell,
  PreviousCell,
} from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const Tables: React.FC = () => {
  return (
    <MenuGroup title="Tables">
      <AddTable />

      <RemoveTable />

      <ToggleHeaderColumn />

      <ToggleHeaderRow />

      <ToggleHeaderCell />

      <AddColumnBefore />

      <AddColumnAfter />

      <DeleteColumn />

      <AddRowBefore />

      <AddRowAfter />

      <DeleteRow />

      <MergeOrSplit />

      <MergeCells />

      <SplitCell />

      <FixTables />

      <NextCell />

      <PreviousCell />
    </MenuGroup>
  );
};

export default Tables;

import * as GR from "./";

type GroupsT = React.FC & {
  Listing: typeof GR.Listing;
  Headings: typeof GR.Headings;
  Alignment: typeof GR.Alignment;
  TextStyling: typeof GR.TextStyling;
  Utils: typeof GR.Utils;
  Others: typeof GR.Others;
  Controls: typeof GR.Controls;
  Tables: typeof GR.Tables;
};

const Groups: GroupsT = () => {
  return <div>Groups</div>;
};

Groups.Listing = GR.Listing;
Groups.Headings = GR.Headings;
Groups.Alignment = GR.Alignment;
Groups.TextStyling = GR.TextStyling;
Groups.Utils = GR.Utils;
Groups.Others = GR.Others;
Groups.Controls = GR.Controls;
Groups.Tables = GR.Tables;

export default Groups;

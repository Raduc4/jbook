import { useTypedSelector } from "../hooks/use-typped-selector";
import CellListItem from "./cell-list-item";
const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderdCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));
  return <div>{renderdCells}</div>;
};

export default CellList;

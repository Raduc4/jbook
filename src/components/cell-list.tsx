import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typped-selector";
import CellListItem from "./cell-list-item";
import { AddCell } from "./add-cell";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));
  return (
    <div>
      <div className={cells.length === 0 ? "foce-visible" : ""}>
        <AddCell previousCellId={null} />
      </div>
      {renderedCells}
    </div>
  );
};

export default CellList;

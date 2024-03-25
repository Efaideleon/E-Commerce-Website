import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TableProps } from './interfaces';
import "./Table.css"

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for overall expansion

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded); // Toggle expansion state
  };

  return (
    <table className={isExpanded ? 'expanded' : ''}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.header} onClick={handleHeaderClick}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { isExpanded && data.map((row) => (
          <tr key={uuidv4()}>
            {isExpanded ? ( // Conditionally render cells based on expansion state
              columns.map((column) => (
                <td key={uuidv4()}>{row[column.accessor] as string || ''}</td>
              ))
            ) : (
              <td></td> // Render a single empty cell when collapsed
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table;
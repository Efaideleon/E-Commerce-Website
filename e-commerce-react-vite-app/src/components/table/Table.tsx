import { v4 as uuidv4 } from 'uuid';
import { TableProps } from './interfaces';

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.header}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={uuidv4()}>
            {columns.map((column) => (
              <td key={uuidv4()}>{row[column.accessor] as string || ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
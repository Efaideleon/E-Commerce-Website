import Table from "./Table";
import { Column } from "./interfaces";
import { Person } from "../data/types";
import { peopleData } from "../data/personal_data";
export default function TableRenderer() {

    const columns: Column<Person>[] = [
        { header: "Name", accessor: "name" },
        { header: "Age", accessor: "age" },
    ];

    return (
        <>
            <Table data={peopleData} columns={columns} />
        </>
    )
}

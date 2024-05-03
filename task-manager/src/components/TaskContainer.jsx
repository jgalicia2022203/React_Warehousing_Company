import { useRef, useState } from "react";
import './tableStyle.css'
import { FaRegEdit } from "react-icons/fa";
import Table from "./Table.jsx";


export default function TaskContainer() {
    const columnsRef = useRef([
        {
            name: "id",
            position: 0,
            isSelected: false,
            type: "number"
        },
        {
            name: "TASK NAME",
            position: 1,
            isSelected: false,
            type: "string",
        },
        {
            name: "DESCRIPTION",
            position: 2,
            isSelected: false,
            type: "string"
        },
        {
            name: "CREATOR NAME",
            position: 3,
            isSelected: false,
            type: "string"
        },
        {
            name: "END DATE",
            position: 4,
            isSelected: false,
            type: Date
        },
        {
            name: "OPTIONS",
            position: 5,
            isSelected: false,
            type: "string"
        }
    ]);

    const [rows, setRows] = useState([
        {
            id: 1,
            "TASK NAME": "React",
            "DESCRIPTION": "lalalala",
            "CREATOR NAME": "lalala",
            "END DATE": "12/05/2024",
            "OPTIONS": <button className="custom-button">
                <FaRegEdit />
            </button>
        }
    ]);

    return (
        <div className="flex flex-col gap-3">
            <Table
                columns={columnsRef.current}
                rows={rows}
            />
        </div>
    )
}
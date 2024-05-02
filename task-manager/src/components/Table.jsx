import './tableStyle.css'

export default function Table({columns, rows}){

    return(
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        {columns.map((colum) =>{
                            return(
                                <th
                                    className='cursor-pointer'
                                    onClick={() => onSortBy(colum, columns)}
                                    key={colum.position}
                                >
                                    <div className='flex gap-3 items-center'>
                                        <span>{colum.name}</span>
                                    </div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) =>(
                        <tr key={row.id}>
                            {columns.map((colum)=>(
                                <td key={colum.position}>
                                    {row[colum.name]}
                                </td>
                            ))}
                        </tr>
                    ))}

                    {rows.length === 0 && (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className='no-data'
                            >
                                NO DATA AVAILABLE
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
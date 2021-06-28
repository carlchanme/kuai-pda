import React from 'react';
import {Table} from "react-bootstrap";

const OptionsTable = ({json}) => {
    return (
        <Table striped bordered size="sm">
            <thead>
            <tr>
                {json?.heading.map((title, index) => <th key={index}>{title}</th>)}
            </tr>
            </thead>
            <tbody>
            {json?.body.map((row) => {
                return <tr>
                    {row?.map((label, index) => <td key={index}><div>{label}</div></td>)}
                </tr>
            })}
            </tbody>
        </Table>
    );
}
export default OptionsTable;
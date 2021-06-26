import React from 'react';

function Table({type, col1, col2}) {

    return (
        <table>          
            <tr class={type}>
                <td>{col1}</td>
                <td>{col2}</td>
            </tr>
        </table>
    );
}

export default Table;
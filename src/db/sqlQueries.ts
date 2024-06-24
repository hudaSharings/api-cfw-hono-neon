
export function selectQuery(tableName: string, columns: string[], conditions: any = {}, orderBy: string = 'id DESC'): string {
	let columnStr = columns.join(', ');
    if (columns.length === 0 || columns.includes('*')) {
        columnStr = '*';
    }
	let sql = `SELECT ${columnStr} FROM ${tableName}`;
    const params: any[] = [];

    if (Object.keys(conditions).length > 0) {
        sql += ' WHERE';
        const conditionsArray = Object.keys(conditions).map((key,index) => {
			index++;
			params.push(conditions[key]);
			return `"${key}" = $${index}`
			});
        sql += ` ${conditionsArray.join(' AND ')}`;
    }

  //  sql += ` ORDER BY ${orderBy}`;

	sql =replaceParams(sql,params)
    return sql;
}

export function insertQuery(tableName: string, data: any): string {
    const columns = Object.keys(data).join(', ');
    const values = Object.keys(data).map((key) => `$${key}`).join(', ');

    return `INSERT INTO ${tableName} (${columns}) VALUES (${values}) RETURNING *`;
}

export function updateQuery(tableName: string, id: number, data: any): string {
    const columns = Object.keys(data).map((key) => `${key} = $${key}`);
    return `UPDATE ${tableName} SET ${columns.join(', ')} WHERE id = ${id} RETURNING *`;
}

export function deleteQuery(tableName: string, id: number): string {
    return `DELETE FROM ${tableName} WHERE id = ${id} RETURNING *`;
}


function replaceParams(query: string, params: (string | number)[]): string {
	return query.replace(/\$(\w+)/g, (match, number) => {
	  const index = parseInt(number, 10) - 1;
	  if (typeof params[index] !== 'undefined') {
		const value = params[index];
		return typeof value === 'number' ? value.toString() : `'${value}'`;
	  }
	  return match;
	});
  }


// function replaceParams(query: string, params: (string | number)[]): string {
//     return query.replace(/\$(\d+)/g, (match, number) => {
// 		console.log("entered")
//         const index = parseInt(number, 10) - 1;
// 		console.log(number)
// 		console.log(index)
//         if (typeof params[index] !== 'undefined') {
//             const value = params[index];
//             if (typeof value === 'number') {
//                 return value.toString();
//             } else if (typeof value === 'string') {
//                 // Escape single quotes in the string to prevent SQL injection
//                 return `'${value.replace(/'/g, "''")}'`;
//             }
//         }
//         return match; // Return the original match if the parameter is undefined
//     });
// }

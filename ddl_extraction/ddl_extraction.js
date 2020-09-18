const doExtraction = () => {
  const ddlStr = document.getElementById('textArea').value;
  
	const rows = ddlStr.replace(/(?:\r\n|\r|\n)/g, '').split(',');
	const rowObjList = rows
		.map((str) => {
			const [columnName, dataType, ...isNullList] = str.split(' ');
			const notNull = isNullList.length === 1 ? ' ' : 'TRUE';
			return columnName ? { columnName, dataType, notNull } : undefined;
		})
		.filter((it) => it !== undefined);

	const columnNames = rowObjList.map(({ columnName }) => columnName.replace(/"/g,'')).join('</br>');
	const dataTypes = rowObjList.map(({ dataType }) => dataType).join('</br>');
  const notNullList = rowObjList.map(({ notNull }) => notNull).join('</br>');
  
  document.getElementById('columnNames').innerHTML = columnNames;
  document.getElementById('dataTypes').innerHTML = dataTypes;
  document.getElementById('notNullList').innerHTML = notNullList;
};

document.getElementById('transButton').addEventListener('click', doExtraction);

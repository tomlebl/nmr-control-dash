//Utility functions that adds key property into any table data object retrieve from the server
//Allowing to render antD table component

export const addKey = tableData =>
	tableData.map((i, index) => {
		return { ...i, key: index }
	})

// Helper function for adding property into the row object that will be used to highlight rows with the same ExpNo
export const highlightRows = tableData => {
	let highlight = false
	const newTableData = tableData.map((row, index) => {
		const prevRow = tableData[index - 1]
		if (prevRow && prevRow.datasetName !== row.datasetName) {
			highlight = !highlight
		}
		return { ...row, highlight }
	})
	return newTableData
}

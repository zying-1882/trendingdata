import React from 'react';

export const IndividualData = ({individualExcelData}) =>{
	// console.log(individualExcelData)
	return(
			<>
				<th>{individualExcelData.Id}</th>
				<th>{individualExcelData.Date}</th>
				<th>{individualExcelData.inverterOne}</th>
				<th>{individualExcelData.inverterTwo}</th>
				<th>{individualExcelData.AInverterone}</th>
				<th>{individualExcelData.AInvertertwo}</th>
			</>
			

		)
}

export default IndividualData;
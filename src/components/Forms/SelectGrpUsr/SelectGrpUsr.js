import React from 'react'
import { Form, Select, Space } from 'antd'

const SelectGrpUsr = props => {
	const { groupList, onGrpChange, token } = props
	let userList = props.userList

	const { Option } = Select

	const grpOptions = groupList.map(i => (
		<Option value={i.id} key={i.id}>
			{i.name}
		</Option>
	))

	const usrOptions = userList.map(i => (
		<Option value={i.id} key={i.id}>
			{`[${i.username}] ${i.fullName}`}
		</Option>
	))

	return (
		<Space size='large'>
			<Form.Item label='Group' name='groupId'>
				<Select
					style={{ width: 150 }}
					onChange={value => {
						props.formRef.current.setFieldsValue({ userId: undefined })
						onGrpChange(token, value, false)
					}}>
					{grpOptions}
				</Select>
			</Form.Item>
			<Form.Item label='Username' name='userId'>
				<Select style={{ width: 250 }}>{usrOptions}</Select>
			</Form.Item>
		</Space>
	)
}

export default SelectGrpUsr

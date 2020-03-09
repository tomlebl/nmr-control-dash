import React from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import {
	DashboardOutlined,
	TeamOutlined,
	UserOutlined,
	HistoryOutlined,
	PoundOutlined,
	SettingOutlined,
	ExperimentOutlined,
	DeploymentUnitOutlined,
	BarChartOutlined
} from '@ant-design/icons'
import logoRound from '../../assets/logo-round-small.png'
import logoWideDark from '../../assets/logo-wide-dark.png'

import classes from './AdminMenu.module.css'

const { SubMenu } = Menu

const AdminMenu = props => {
	const logo = props.collapsed ? logoRound : logoWideDark
	const handleClick = e => {
		props.history.push({ pathname: e.keyPath[0] })
	}

	return (
		<nav>
			<div className={classes.Logo} onClick={() => window.location.reload()}>
				<img src={logo} alt='NOMAD logo round' />
			</div>

			<Menu
				onClick={handleClick}
				theme='dark'
				mode='inline'
				defaultSelectedKeys={['/']}
				selectedKeys={[props.location.pathname]}>
				<Menu.Item key='/dashboard'>
					<DashboardOutlined />
					<span>Dashboard</span>
				</Menu.Item>
				<SubMenu
					key='user management'
					title={
						<span>
							<TeamOutlined />
							<span>User Management</span>
						</span>
					}>
					<Menu.Item key='/dashboard/users'>
						<UserOutlined />
						<span>Manage Users</span>
					</Menu.Item>
					<Menu.Item key='/dashboard/groups'>
						<TeamOutlined />
						<span>Manage Groups</span>
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key='usage'
					title={
						<span>
							<BarChartOutlined />
							<span>Usage Statistics</span>
						</span>
					}>
					<Menu.Item key='/dashboard/history'>
						<HistoryOutlined />
						<span>History Tables</span>
					</Menu.Item>
					<Menu.Item key='/dashboard/accounting'>
						<PoundOutlined />
						<span>Accounting</span>
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key='settings'
					title={
						<span>
							<SettingOutlined />
							<span>Settings</span>
						</span>
					}>
					<Menu.Item key='/dashboard/instruments'>
						<DeploymentUnitOutlined />
						<span>Instruments</span>
					</Menu.Item>
					<Menu.Item key='/dashboard/experiments'>
						<ExperimentOutlined />
						<span>Experiments</span>
					</Menu.Item>
				</SubMenu>
			</Menu>
		</nav>
	)
}

export default withRouter(AdminMenu)

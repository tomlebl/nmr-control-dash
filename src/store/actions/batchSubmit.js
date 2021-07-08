import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'
import errorHandler from './errorHandler'

export const toggleAddRack = () => ({
	type: actionTypes.TOGGLE_ADD_RACK
})

export const setActiveRackId = rackId => ({
	type: actionTypes.SET_ACTIVE_RACK_ID,
	payload: rackId
})

export const addRackSuccess = payload => ({
	type: actionTypes.ADD_RACK_SUCCESS,
	payload
})

export const addRack = (formData, token) => {
	return dispatch => {
		axios
			.post('/batch-submit/racks', formData, {
				headers: { Authorization: 'Bearer ' + token }
			})
			.then(res => {
				dispatch(addRackSuccess(res.data))
			})
			.catch(err => {
				dispatch(errorHandler(err))
			})
	}
}

export const getRacksSuccess = payload => ({
	type: actionTypes.GET_RACKS_SUCCESS,
	payload
})

export const getRacks = () => {
	return dispatch => {
		axios
			.get('/batch-submit/racks')
			.then(res => {
				dispatch(getRacksSuccess(res.data))
			})
			.catch(err => {
				dispatch(errorHandler(err))
			})
	}
}

export const closeRackSuccess = payload => ({
	type: actionTypes.CLOSE_RACK_SUCCESS,
	payload
})

export const closeRackStart = () => ({
	type: actionTypes.CLOSE_RACK_START
})

export const closeRack = (rackId, token) => {
	return dispatch => {
		dispatch(closeRackStart())
		axios
			.patch('/batch-submit/racks/' + rackId, null, {
				headers: { Authorization: 'Bearer ' + token }
			})
			.then(res => {
				dispatch(closeRackSuccess(res.data))
			})
			.catch(err => {
				dispatch(errorHandler(err))
			})
	}
}

export const deleteRackStart = () => ({
	type: actionTypes.DELETE_RACK_START
})

export const deleteRackSuccess = payload => ({
	type: actionTypes.DELETE_RACK_SUCCESS,
	payload
})

export const deleteRack = (rackId, token) => {
	return dispatch => {
		dispatch(deleteRackStart())
		axios
			.delete('/batch-submit/racks/' + rackId, {
				headers: { Authorization: 'Bearer ' + token }
			})
			.then(res => {
				dispatch(deleteRackSuccess(res.data))
			})
			.catch(err => {
				dispatch(errorHandler(err))
			})
	}
}
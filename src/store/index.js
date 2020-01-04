import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [],
    cellToEdit: null,
    rowsToHide: [],
    dataForGraff: null
  },
  mutations: {
    SET_DATA(state, payload) {
      state[payload.key] = payload.value
    },
    EDIT_SELECTED_CELL(state, payload) {
      const index = state.tableData.map(e => e.id).indexOf(payload.rowId)
      state.tableData[index].data[payload.date] = payload.value
    },
    SET_ROWS_TO_HIDE(state, id) {
      if (!state.rowsToHide.includes(id)) {
        state.rowsToHide.push(id);
        if (state.cellToEdit && state.cellToEdit.rowId === id) {
          state.cellToEdit = null

        }
      } else {
        let index = state.rowsToHide.indexOf(id)
        state.rowsToHide.splice(index, 1);
      }
    }
  },
  actions: {
    setData( { commit }, payload) {
      commit('SET_DATA', payload)
    },
    editSelectedCell ({ commit }, payload) {
      commit('EDIT_SELECTED_CELL', payload)
    },
    setRowsToHide ({ commit }, id) {
      commit('SET_ROWS_TO_HIDE', id)
    }
  },
  modules: {
  }
})

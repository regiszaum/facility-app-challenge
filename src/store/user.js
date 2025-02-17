import { createStore } from 'vuex';

// Função para carregar o estado do localStorage
const loadState = () => {
  const storedState = localStorage.getItem('userStore');
  if (storedState) {
    return JSON.parse(storedState);
  }
  return {
    authenticated: false,
    users: [
      { email: 'admin@facilitaapp.com', password: '12345', name: 'Administrador', role_label: 'Admin', role: 'adm' },
      { email: 'user@facilitaapp.com', password: '12345', name: 'Eduardo Pereira da Costa', role_label: 'Front-end Developer', role: 'user' },
    ],
  };
};

export default createStore({
  state: loadState(), // Carrega o estado inicial do localStorage
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value;
      console.log('Authenticated:', state.authenticated); // Verifique se está sendo atualizado
      localStorage.setItem('userStore', JSON.stringify(state));
    },
  },
  actions: {
    login({ commit, state }, { email, password }) {
      const user = state.users.find(u => u.email === email && u.password === password);
      if (user) {
        commit('SET_AUTHENTICATED', true);
        return true;
      }
      return false;
    },
    forgot({ state }, { email }) {
      const user = state.users.find(u => u.email === email);
      if (user) {
        return true;
      }
    },
    logout({ commit }) {
      commit('SET_AUTHENTICATED', false);
      localStorage.removeItem('userStore');
    },
  },
});
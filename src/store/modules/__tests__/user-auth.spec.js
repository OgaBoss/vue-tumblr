import flushPromises from 'flush-promises';
import cloneDeep from 'lodash.clonedeep';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import Notification from '../notification';
import UserAuthentication from '../user-authentication';

jest.mock('../../../services/firebase.js');

const localVue = createLocalVue();
localVue.use(Vuex);

const payload = {
  email: 'test@test.com',
  password: 'password',
  username: 'ogaboss',
};

describe('Authentication Store', () => {
  const state = {
    user: {
      email: 'test@test.com',
    },
  };

  describe('Getters', () => {
    test('test that i can get uset data', () => {
      const response = UserAuthentication.getters.getUserData(state);
      expect(response.email).toEqual(state.user.email);
    });
  });

  describe('Mutation', () => {
    test('test that i can set user data', () => {
      UserAuthentication.mutations.setUserData(state, { email: 'dami@test.com' });
      expect(state.user.email).toEqual('dami@test.com');
    });
  });

  describe('Actions', () => {
    test('user can sign up', async () => {
      expect.assertions(2);

      const context = {
        dispatch: jest.fn(),
      };
      UserAuthentication.actions.createNewAccount(context, payload);
      await flushPromises();
      expect(context.dispatch).toHaveBeenCalledWith('actionSetNotificationMessages', [
        'Account creation successfull',
      ]);
      expect(context.dispatch).toHaveBeenCalledWith('actionSetNotificationType', 'success');
    });
  });
});

describe('Authentication Store Test', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(UserAuthentication));
  });

  test('Getters and Mutations', () => {
    expect(store.state.user).toEqual({});
    expect(store.getters.getUserData).toEqual({});

    store.commit('setUserData', { email: 'test@test.com' });

    expect(store.state.user).toEqual({ email: 'test@test.com' });
  });

  test('actions', async () => {
    await store.dispatch('createNewAccount', payload);
    expect(store.getters.getUserData).toEqual({});
  });
});

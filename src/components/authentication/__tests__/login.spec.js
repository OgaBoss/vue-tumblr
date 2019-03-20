/* eslint-disable no-undef */
import {
  shallowMount,
  createLocalVue,
  RouterLinkStub
} from '@vue/test-utils';
import LoginComponent from '../LoginComponent.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('Login CMP', () => {
  const wrapper = shallowMount(LoginComponent, {
    localVue,
    router,
    stubs: {
      RouterLink: RouterLinkStub,
    },
  });

  test('test that component is well rendered', () => {
    expect(wrapper.findAll('input').length).toBe(2);
  });

  test('router-link redirects to create-account page', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/auth/create-account');
    expect(wrapper.find(RouterLinkStub).text()).toBe('Create account');
  })
});

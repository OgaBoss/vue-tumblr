
const firebaseService = {
  register: jest.fn((payload) => Promise.resolve({})),
  updateUserprofile: jest.fn((payload) => Promise.resolve({})),
};

export default firebaseService;

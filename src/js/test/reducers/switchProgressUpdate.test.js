import switchProgressUpdate from '../../reducers/switchProgressUpdate';
import { SWITCH_PROGRESS_UPDATE } from '../../actions/actionTypes';


describe('switchProgress update reducer', () => {
  const defaultState = {
    on: false,
    id: '',
  };
  const id = 'someId';

  test('should return an object with on mode and id', () => {
    const action = {
      type: SWITCH_PROGRESS_UPDATE,
      id,
    };

    expect(switchProgressUpdate(defaultState, action)).toEqual({
      on: true,
      id,
    });
  });

  test('should reset switchProgressUpdate', () => {
    const currentState = {
      on: true,
      id,
    };
    const action = {
      type: SWITCH_PROGRESS_UPDATE,
    };
    expect(switchProgressUpdate(currentState, action)).toEqual({
      on: false,
      id: '',
    });
  });
});

'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let copy = { ...state };
  const previousVersionsState = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(copy, action.extraData);
        break;

      case 'removeProperties':

        for (const key of action.keysToRemove) {
          delete copy[key];
        }
        break;

      case 'clear':
        copy = {};
        break;
    }
    previousVersionsState.push({ ...copy });
  }

  return previousVersionsState;
}

module.exports = transformStateWithClones;

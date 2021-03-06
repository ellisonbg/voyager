import undoable from 'redux-undo';

import {Action, REDO, UNDO} from '../actions';
import {HISTORY_LIMIT} from '../constants';
import {StateBase} from '../models';

import {datasetReducer} from './dataset';
import {resultReducer} from './result';
import {shelfReducer} from './shelf';

function reducer(state: Readonly<StateBase>, action: Action): StateBase {
  return {
    dataset: datasetReducer(state.dataset, action),
    shelf: shelfReducer(state.shelf, action, state.dataset.schema),
    result: resultReducer(state.result, action)
  };
}

export const rootReducer = undoable(reducer, {
  limit: HISTORY_LIMIT,
  undoType: UNDO,
  redoType: REDO
});

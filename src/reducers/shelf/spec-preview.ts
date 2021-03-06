import {fromSpec} from 'compassql/build/src/query/spec';

import {Action} from '../../actions/index';
import {SHELF_SPEC_PREVIEW, SHELF_SPEC_PREVIEW_DISABLE} from '../../actions/shelf';
import {fromSpecQuery, ShelfUnitSpec} from '../../models/shelf/spec';

export function shelfSpecPreviewReducer(preview: Readonly<ShelfUnitSpec>, action: Action): ShelfUnitSpec {
  switch (action.type) {
    case SHELF_SPEC_PREVIEW:
      const {spec} = action.payload;
      const specQ = fromSpec(spec);
      return fromSpecQuery(specQ);
    case SHELF_SPEC_PREVIEW_DISABLE:
      return null;
  }
  return preview;
}

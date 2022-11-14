export const LOAD_SELECT = 'LOAD_SELECT';
export const SAVE_DATA_SELECT = 'SAVE_DATA_SELECT';

export const loadSelect = () => (
  {
    type: LOAD_SELECT,
  }
);

export const saveDataSelect = (identifier, data) => (
  {
    type: SAVE_DATA_SELECT,
    identifier: identifier,
    value: data,
  }
);

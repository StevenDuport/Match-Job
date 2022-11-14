export const TOGGLE_BOARD = 'TOGGLE_BOARD';
export const LOAD_CARDS = 'LOAD_CARDS';
export const SAVE_CARDS = 'SAVE_CARDS';
export const SWIPE_INTERRESTED = 'SWIPE-INTERRESTED';
export const SWIPE = 'SWIPE';
export const LOAD_CARDS_CANDIDATE = 'LOAD_CARDS_CANDIDATE';
export const SAVE_CARDS_CANDIDATE = 'SAVE_CARDS_CANDIDATE';

export const toggleBoard = () => (
  {
    type: TOGGLE_BOARD,
  }
);

export const loadCards = () => (
  {
    type: LOAD_CARDS,
  }
);

export const saveCards = (dataCards) => (
  {
    type: SAVE_CARDS,
    data: dataCards,
  }
);

export const swipe = (jobId) => (
  {
    type: SWIPE,
    jobId: jobId,
  }
);

export const swipeInterrested = () => (
  {
    type: SWIPE_INTERRESTED,
  }
);

export const loadCardsCandidate = () => (
  {
    type: LOAD_CARDS_CANDIDATE,
  }
);

export const saveCardsCandidate = (data) => (
  {
    type: SAVE_CARDS_CANDIDATE,
    data: data,
  }
);

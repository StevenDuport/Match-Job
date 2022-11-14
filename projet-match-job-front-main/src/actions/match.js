export const SAVE_ID_TO_LIKE = 'SAVE_ID_TO_LIKE';
export const SEND_LIKE_RECRUITER = 'SEND_LIKE_RECRUITER ';
export const SEND_LIKE_CANDIDATE = 'SEND_LIKE_CANDIDATE ';
export const MATCH_ON = 'MATCH_ON';
export const IS_NOT_MATCH = 'IS_NOT_MATCH';

export const saveIdToLike = (candidateId, jobId) => (
  {
    type: SAVE_ID_TO_LIKE,
    candidate: candidateId,
    job: jobId,
  }
);

export const sendLikeRecruiter = () => (
  {
    type: SEND_LIKE_RECRUITER,
  }
);

export const sendLikeCandidate = () => (
  {
    type: SEND_LIKE_CANDIDATE,
  }
);

export const matchOn = () => (
  {
    type: MATCH_ON,
  }
);

export const isNotMatch = () => (
  {
    type: IS_NOT_MATCH,
  }
);

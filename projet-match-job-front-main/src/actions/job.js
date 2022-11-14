export const CHANGE_INPUT_VALUE_JOB = 'CHANGE_INPUT_VALUE_JOB';
export const SUBMIT_JOB_POST = 'SUBMIT_JOB_POST';
export const SUBMIT_JOB_PUT = 'SUBMIT_JOB_PUT';
export const SAVE_JOB_PROFILE = 'SAVE_JOB_PROFILE';
export const SAVE_ID_JOB = 'SAVE_ID_JOB';
export const CLEAN_INPUT_JOB = 'CLEAN_INPUT_JOB';

export const changeInputValueJob = (identifier, value) => (
  {
    type: CHANGE_INPUT_VALUE_JOB,
    identifier: identifier,
    value: value,
  }
);

export const submitJobPost = () => (
  {
    type: SUBMIT_JOB_POST,
  }
);

export const submitJobPut = () => (
  {
    type: SUBMIT_JOB_PUT,
  }
);

export const saveJobProfile = (job) => (
  {
    type: SAVE_JOB_PROFILE,
    experience: job.experience.id,
    contract: job.contract.id,
    salary: job.salary.id,
    jobtitle: job.jobtitle.id,
    description: job.description,
    techno1: job.technologies[0].id,
    techno2: job.technologies[1] ? job.technologies[1].id : '',
    techno3: job.technologies[2] ? job.technologies[2].id : '',
    techno4: job.technologies[3] ? job.technologies[3].id : '',
    techno5: job.technologies[4] ? job.technologies[4].id : '',
  }
);

export const saveIdJob = (id) => (
  {
    type: SAVE_ID_JOB,
    jobId: id,
  }
);

export const cleanInputJob = () => (
  {
    type: CLEAN_INPUT_JOB,
    experience: '',
    contract: '',
    salary: '',
    jobtitle: '',
    description: '',
    techno1: '',
    techno2: '',
    techno3: '',
    techno4: '',
    techno5: '',
    jobId: '',
  }
);

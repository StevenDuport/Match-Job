export const LOAD_PROFILE_RECRUITER = 'LOAD_PROFILE_RECRUITER';
export const LOAD_JOBS_RECRUITER = 'LOAD_JOBS_RECRUITER';
export const SAVE_DATA_RECRUITER = 'SAVE_DATA_RECRUITER';
export const SUBMIT_PROFILE_RECRUITER_POST = 'SUBMIT_PROFILE_RECRUITER_POST';
export const SUBMIT_PROFILE_RECRUITER_PUT = 'SUBMIT_PROFILE_RECRUITER_PUT';
export const RECRUITER_DATA_EXIST = 'RECRUITER_DATA_EXIST';

export const loadProfileRecruiter = () => (
  {
    type: LOAD_PROFILE_RECRUITER,
  }
);

export const loadJobsRecruiter = () => (
  {
    type: LOAD_JOBS_RECRUITER,
  }
);

export const saveDataRecruiter = (identifier, data) => (
  {
    type: SAVE_DATA_RECRUITER,
    data: data,
    identifier: identifier,
  }
);

export const submitProfileRecruiterPost = () => (
  {
    type: SUBMIT_PROFILE_RECRUITER_POST,
  }
);

export const submitProfileRecruiterPut = () => (
  {
    type: SUBMIT_PROFILE_RECRUITER_PUT,
  }
);

export const recruiterDataExist = (data) => (
  {
    type: RECRUITER_DATA_EXIST,
    companyName: data.company.companyName,
    lastname: data.lastname,
    firstname: data.firstname,
    phoneNumber: data.phoneNumber,
    streetNumber: data.company.adress.streetNumber,
    streetName: data.company.adress.streetName,
    zip: data.company.adress.zip,
    city: data.company.adress.city,
  }
);

export const CHANGE_INPUT_VALUE_CANDIDATE = 'CHANGE_INPUT_VALUE_CANDIDATE';
export const CHANGE_ADRESS_CANDIDATE = 'CHANGE_ADRESS_CANDIDATE';
export const CHANGE_TECHNO_CANDIDATE = 'CHANGE_TECHNO_CANDIDATE';
export const CHANGE_SELECT_CANDIDATE = 'CHANGE_SELECT_CANDIDATE';
export const SUBMIT_PROFILE_POST = 'SUBMIT_PROFILE_POST';
export const LOAD_PROFILE_CANDIDATE = 'LOAD_PROFILE_CANDIDATE';
export const SAVE_LOAD_CANDIDATE = 'SAVE_LOAD_CANDIDATE';
export const SUBMIT_PROFILE_PUT = 'SUBMIT_PROFILE_PUT';
export const CANDIDATE_DATA_EXIST = 'CANDIDATE_DATA_EXIST';
export const GET_PICTURE = 'GET_PICTURE';
export const SUBMIT_PICTURE = 'SUBMIT_PICTURE';

export const changeInputValueCandidate = (identifier, newValue) => (
  {
    type: CHANGE_INPUT_VALUE_CANDIDATE,
    identifier: identifier,
    value: newValue,
  }
);

export const changeAdressCandidate = (identifier, newValue) => (
  {
    type: CHANGE_ADRESS_CANDIDATE,
    identifier: identifier,
    value: newValue,
  }
);

export const changeTechnoCandidate = (identifier, newValue) => (
  {
    type: CHANGE_TECHNO_CANDIDATE,
    identifier: identifier,
    value: newValue,
  }
);

export const changeSelectCandidate = (identifier, newValue) => (
  {
    type: CHANGE_SELECT_CANDIDATE,
    identifier: identifier,
    value: newValue,
  }
);

export const submitProfilePost = () => (
  {
    type: SUBMIT_PROFILE_POST,
  }
);

export const loadProfileCandidate = () => (
  {
    type: LOAD_PROFILE_CANDIDATE,
  }
);

export const saveLoadCandidate = (newValue) => (
  {
    type: SAVE_LOAD_CANDIDATE,
    value: newValue,
  }
);

export const submitProfilePut = () => (
  {
    type: SUBMIT_PROFILE_PUT,
  }
);

export const candidateDataExist = (data) => {
  const date = data.birthday;
  return (
    {
      type: CANDIDATE_DATA_EXIST,
      lastname: data.lastName,
      firstname: data.firstName,
      picture: data.picture,
      birthday: date.substring(0, 10),
      genre: data.genre,
      phone_number: data.phoneNumber,
      streetNumber: data.adress.streetNumber,
      streetName: data.adress.streetName,
      zip: data.adress.zip,
      city: data.adress.city,
      description: data.description,
      jobtitle: data.jobtitle.id,
      experience_id: data.experience.id,
      contract_id: data.contract.id,
      salary_id: data.salary.id,
      github: (data.resume === null) ? '' : data.resume,
      portfolio: data.portfolio,
      techno1: data.technologies[0].id,
      techno2: data.technologies[1] ? data.technologies[1].id : '',
      techno3: data.technologies[2] ? data.technologies[2].id : '',
      techno4: data.technologies[3] ? data.technologies[3].id : '',
      techno5: data.technologies[4] ? data.technologies[4].id : '',
    }
  );
};

export const getPicture = () => (
  {
    type: GET_PICTURE,
  }
);

export const submitPicture = () => (
  {
    type: SUBMIT_PICTURE,
  }
);

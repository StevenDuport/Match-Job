/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
// FUNCTION

/**
 * function to convert date to FR
 */
export const dateFormat = (date) => {
  const subDate = date.substring(0, 10);
  const maDate = new Date(subDate);
  const newDateFormat = maDate.toLocaleDateString('fr');
  return newDateFormat;
};

/**
*  Find a Jobs
* @param {Array} jobs - All the jobs
* @param {string} slugId - Params url Id
* @return {Object} - Job select
*/
export function findJobs(jobs, slugId) {
  const slugNumberId = Number(slugId);
  const job = jobs.find((item) => {
    return item.id === slugNumberId;
  });
  return job;
}

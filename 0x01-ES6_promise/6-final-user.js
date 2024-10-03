import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((values) => {
      const result = [];
      for (const value of values) {
        if (value.status === 'fulfilled') {
          result.push({ status: 'fulfilled', value: value.value });
        } else {
          result.push({ status: 'rejected', value: value.reason.toString() });
        }
      }
      return result;
    });
}

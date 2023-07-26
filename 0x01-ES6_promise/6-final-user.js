import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(([signUpRes, uploadRes]) => [
    {
      status: signUpRes.status,
      value:
        signUpRes.status === 'fulfilled' ? signUpRes.value : signUpRes.reason,
    },
    {
      status: uploadRes.status,
      value:
        uploadRes.status === 'fulfilled' ? uploadRes.value : uploadRes.reason,
    },
  ]);
}

export const inputValidation = (input) => {
  return input.match(
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  );
};

export const imageValidation = (fileName) => {
  return fileName.name.match(/\.(jpg|jpeg|png|gif)$/);
};

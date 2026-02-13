export const successResponse = (res, status, data, message) => {
  const response = {
    success: true,
    data,
  };

  if (message) {
    response.message = message;
  }

  return res.status(status).json(response);
};

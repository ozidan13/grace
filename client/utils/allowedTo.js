const allowedTo = (...roles) => {
  return (request, response, next) => {
    //? get the role from the token
    let { role } = request.userData.user;
    if (roles.includes(role)) {
      next();
    } else {
      let error = new Error("not Authorized 🙄");
      error.status = 403;
      next(error);
    }
  };
};

export { allowedTo };

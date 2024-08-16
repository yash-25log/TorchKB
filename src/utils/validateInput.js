exports.validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };
  
  exports.validatePassword = (password) => {
    return password.length >= 6; // Simple password validation (at least 6 characters)
  };
  
  // Add more validators as needed
  
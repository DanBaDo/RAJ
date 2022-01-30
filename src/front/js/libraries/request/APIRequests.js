import Request from "./requestFactory";

// Account management methods
export const signup = new Request("/register/","POST", False);
export const confirmationSignup = new Request("/confirmation/","PATCH", False);
export const login = new Request("/login/","GET", False);

// Profile management methods
export const getProfile = new Request("/profile/","GET");
export const updateProfile = new Request("/profile/","PUT");
export const deleteProfile = new Request("/profile", "DELETE");

// API keys management methods
export const getAPIKeis = new Request("/apikeys/","GET");
export const getAPIKeis = new Request("/apikeys/","POST");
export const getAPIKeis = new Request("/apikeys/","DELETE");

// Exclusion verification method
export const verifyExclusione = new Request("/exclusions/","GET");
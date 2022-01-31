import { Request } from "./requestFactory";

// Account management methods
export const signup = new Request("/register/","POST", false);
export const confirmationSignup = new Request("/confirmation/","PATCH", false);
export const login = new Request("/login/","GET", false);

// Profile management methods
export const getProfile = new Request("/profile/","GET");
export const updateProfile = new Request("/profile/","PUT");
export const deleteProfile = new Request("/profile", "DELETE");

// API keys management methods
export const getAPIKeys = new Request("/apikeys/","GET");
export const createAPIKeys = new Request("/apikeys/","POST");
export const deleteAPIKeys = new Request("/apikeys/","DELETE");

// Exclusion verification method
export const verifyExclusione = new Request("/exclusions/","GET");
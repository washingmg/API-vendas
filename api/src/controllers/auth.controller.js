import * as authService from '../services/auth.service.js';
import { successResponse } from '../utils/response.js';

export const login = async (req, res, next) => {
  // console.log('BODY:', req.body);
  console.log('SIGN SECRET:', process.env.JWT_SECRET);
  try {
    const result = await authService.login(req.body);
    return successResponse(res, 200, result);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    return successResponse(res, 201, result);
  } catch (error) {
    next(error);
  }
};

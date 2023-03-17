import { UnauthorizedException, ForbiddenException, NotFoundException, ConflictException, InternalServerErrorException, BadRequestException } from './custom-http-error.util';
  
  module.exports = (error) => {
    const customErrors = [
      BadRequestException,
      UnauthorizedException,
      ForbiddenException,
      NotFoundException,
      ConflictException,
      InternalServerErrorException,
    ];
  
    const isCustomError = customErrors.some((customError) => error instanceof customError);
  
    if (isCustomError) {
      return error;
    }
  
    return new InternalServerErrorException(error);
  };
  
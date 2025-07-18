/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: any;
  }
}

export const User = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request: Request = context.switchToHttp().getRequest();
    if (request.user) {
      if (filter) {
        return request.user[filter];
      } else {
        return request.user;
      }
    } else {
      throw new NotFoundException('User not found');
    }
  },
);

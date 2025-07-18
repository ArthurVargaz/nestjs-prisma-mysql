import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const ParamId = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const request: Request = context.switchToHttp().getRequest();
    return Number(request.params.id);
  },
);

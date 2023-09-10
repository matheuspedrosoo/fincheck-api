import { SetMetadata } from '@nestjs/common';

export const IS_PLUBLIC_KEY = 'IS_PUBLIC';

export const IsPublic = () => SetMetadata(IS_PLUBLIC_KEY, true);

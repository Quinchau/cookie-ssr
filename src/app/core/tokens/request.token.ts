import { InjectionToken } from '@angular/core';
import { Request, Response } from 'express';

export const REQUEST = new InjectionToken<Request>('Express request object');
export const RESPONSE = new InjectionToken<Response>('Express response object');
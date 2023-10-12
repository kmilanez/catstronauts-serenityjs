import { Ensure, equals } from '@serenity-js/assertions';
import { Answerable, Task } from '@serenity-js/core';
import { Click, Navigate, Page, PageElement } from '@serenity-js/web';
import { course } from './questions';

export const startsLoadingTheApp = () =>
    Task.where(`#actor load the app`,
        Navigate.to('/')
    );

export const clicksOnACourse = () => 
    Task.where("#actor clicks on course", 
        Click.on(course())
    );
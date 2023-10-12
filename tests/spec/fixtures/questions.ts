import { includes } from '@serenity-js/assertions';
import { Answerable } from '@serenity-js/core';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export const headerSection = () =>
    PageElement
        .located(By.css('.header'))
        .describedAs('header section');

export const mainSection = () =>
    PageElement
        .located(By.css('.main'))
        .describedAs('main section');

export const mainSectionTitle = () =>
    Text.of(
        PageElement
            .located(By.css('.main h1'))
            .describedAs('main section title')
    );

export const footerSection = () =>
    PageElement
        .located(By.css('.footer'))
        .describedAs('footer section');

export const course = () =>
        PageElements.located(By.css('.card'))
        .first()
        .describedAs("course");
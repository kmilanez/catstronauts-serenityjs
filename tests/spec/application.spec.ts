import { Ensure, equals, isPresent, not } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { isVisible, Value } from '@serenity-js/web';
import { footerSection, headerSection, mainSection, mainSectionTitle } from './fixtures/questions';
import { clicksOnACourse, startsLoadingTheApp } from './fixtures/tasks';

describe("Castronauts App", () => {
    it('should show #header, #main and #footer when application loads', async ({ actor }) => {
        await actor.attemptsTo(
            Ensure.that(headerSection(), not(isPresent())),
            Ensure.that(mainSection(), not(isPresent())),
            Ensure.that(footerSection(), not(isPresent())),
            startsLoadingTheApp(),
            Ensure.that(headerSection(), isPresent()),
            Ensure.that(mainSection(), isPresent()),
            Ensure.that(footerSection(), isPresent())
        );
    });

    it("when #actor clicks on a #course, it should display the #course page", async ({ actor }) => {
        await actor.attemptsTo(
            startsLoadingTheApp(),
            clicksOnACourse(),
            Ensure.that(headerSection(), isPresent()),
            Ensure.that(mainSectionTitle(), equals("Cat-stronomy, an introduction"))
        );
    });
});
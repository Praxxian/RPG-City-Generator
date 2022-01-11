class Change {
    constructor(date, changes) {
        this.Date = date;
        this.Changes = changes;
    }
}
const CHANGES = [
    new Change("2022-01-12", ['Added magic level and magical locations.', 'Existing magic items/spells will be filtered out if NONE is selected.', 'Updated the feature list to be more up-to-date.']),
    new Change("2022-01-11", ['Fixed an issue where downloaded data was missing spouse info and had inconsistent headers.']),
    new Change("2021-12-14", ['Added the ability to create, name, and set ages for custom races.', 'Fixed an issue with charts rerendering after regeneration.']),
    new Change("2021-12-07", ['Added a rename button for businesses and people.', 'Fixed a bug with people owning multiple businesses.']),
    new Change("2021-12-06", ['Added a selection for gender (E.g. all female villages).', 'Converted project to TypeScript and improved a lot of the data structure.']),
    new Change("2021-11-23", [
        'Names! Names! Names!',
        'Races each have their own name list out of box. Races with a small set of default names have a greater chance to generate new ones.',
        'Users can edit the list of names for each race.',
        'Improvements for name generation.',
        'Removed Eberron and other MTG races. Sorry! Did not feel like implementing all those names. Open to adding more in if there is demand.',
        'There are some races with very few example names or very little guidance on how surnames work or if they exist at all. So I expect to be working more on this in the future if it does not produce good data.'
    ]),
    new Change("2021-11-11", ['Expanded the layout to fill up more of the screen.', 'Added ability to set a single race for the whole town easier.']),
    new Change("2021-11-10", ['Added nonbinary and gender-fluid gender options along with updated spouse selection.']),
    new Change("2021-11-09", ['Added this change log.', 'Added Markov chain name generation (50% chance) for first and last names.', 'Improved name list.']),
    new Change("2021-10-30", ['Warn users when no Common race is selected.']),
    new Change("2021-10-28", ['Dark styling.', 'Removed random descriptions related to prosperity and natural features.', 'Improved natural features and improved logic for business generation.']),
    new Change("2021-07-20", ['Added prosperity options.']),
    new Change(" Older", ['A lot to document, all very boring.']),
];

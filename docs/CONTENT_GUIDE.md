# Content guide

## Page structure

English research homepage with a Traditional Chinese summary. Structure: title/resources → concept teaser → abstract → motivation → architecture → hardware → scenario videos → evidence/status → poster → related work.

## Before a formal research release

Supply confirmed authors and affiliations, paper URL / BibTeX if published, actual robot code URL if released, and any approved quantitative result tables. The website deliberately omits absent fields rather than showing fake author or paper placeholders.

## Evidence boundaries

Use “concept” for vehicle-mounted illustrations and proposed architecture. Use “miniature demonstration” for the embedded clips. Do not describe these clips as a real building fire trial. Oxygen-mask transport is described as material delivery, not clinical efficacy or certified life support.

The presentation contains dated disaster statistics, and the poster contains publication-status assertions. These were not independently verified and are not repeated as homepage claims. The original poster remains available as a source document.

## Adding video

Put MP4 files in `assets/videos/`, matching poster frames in `assets/images/`, and update `scenarios` in `assets/js/main.js`. Use paired robot / external views where available. The site plays nothing automatically and pauses previous clips when changing scenarios.

## Deployment

Static assets use relative URLs, supporting both a user Pages site and repository Pages subpaths. No analytics or external font dependency. Source videos remain local; the original YouTube link is an optional resource.

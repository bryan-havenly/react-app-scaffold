# React App Scaffolds

The folders contained within are stripped back versions of apps to speed up development of new apps.

All scaffolds use their directory name in their import paths for easy find/replacement (`historyRoutingBased/constants/actionTypes` for example).

## Scaffolds

1. **generic** - A basic single page app including `actionCreators, components, constants, containers, reducers, and store`.
2. **historyRoutingBased** - Like generic but with the ability to do a few extra things:

    - Parse the URL and setting it in the `query` reducer for easy access
    - Call actions based on URL changes
    - Compose URLs that take in the current state of the URL, plus a change (like adding a filter)
    - Track page changes
    - Update the page title based on the path

    It also corrects 'invalid' URLs and redirects users to a standardized query by:

      - removing keys that don't match the expected pattern
      - removing paths that don't match a room type
      - alphabetizes and sorts the query

    The goal of this is to have user-facing URLs, link URLs, and the data in the query store
    100% consistent and easy to reason about.

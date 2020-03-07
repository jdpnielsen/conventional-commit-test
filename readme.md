# Conventional commit test

Demo repo for proving conventional commit/changelog setup. See https://www.conventionalcommits.org/

The goal is to reduce the overhead of keeping a changelog, managing semvar releases & improving the consistency of git commits.

Works by combining commitzen, commitlint, husky, standard-version and convention-changelog.

### How to use

1. Stage you commits: `git add -p`
2. Craft commit message: `npx git-cz` / `npm run commit`
3. Create a release: `npm run release`

### Hints:

Make sure your commits are isolated to a single "subject" or type.
eg. Do your whitespace cleanup in `style(usermodule): cleanup excessive whitespace`, but add that new shiny feature in `feat(headercomponent): implement language switch dropdown`.

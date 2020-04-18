# Contributing

## Code Review Process

### Creating a PR

- Open your PR as a draft so you can fix it up before your reviewers get called.
- Review your own PR before asking others.
- Explain yourself in PR comments and expect to copy some of these as code comments. e.g. `// We fall back to reading from a bearer token for legacy support.`
- Try to read the code as a reviewer might. Doing this, you may discover changes you wish to make before review.
- Keep in mind you are trying to dig a "pit of success" for your reviewer. If you want an approval, do make it easy for them to do that.
- In your PR body, explain what you are doing and why. The reviewer has less context of your ticket than you do. Explain yourself.
- Fill in the PR template, this tells your reviewer that you thought about the question e.g. `not break anything when we ship it` and made a conscious decision to answer yes or decided it didn't apply.
- Explain how to test.

### What to do once your PR is approved

- Squash and merge your own code to master
- [Copy the PR summary](https://github.com/theaccordance/card-dealer/pull/3) as the squash [commit message](https://github.com/theaccordance/card-dealer/commit/c4459d8dedd86f2e58b73e272e44ed32bdbb1519)
- Automation should delete your branch, but please verify.

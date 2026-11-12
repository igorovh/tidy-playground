# tidy playground

A tiny project for trying [tidy](https://github.com/igorovh/tidy), a self-hosted GitHub bot that
triages issues, proposes fixes as pull requests and reviews code.

[`src/text.ts`](src/text.ts) has a few small text helpers, and some of them have bugs the tests do
not catch yet. Find one and [open an issue](../../issues/new) describing it, or ask a question about
the code. tidy will:

1. classify the issue (bug, feature, docs, question, spam or security),
2. answer a question, or write a fix with a test and open a pull request,
3. review that pull request, with this repository's tests run in a sandbox.

You can also open your own pull request and tidy reviews it. Maintainers can comment
`@tidy review` or `@tidy fix`.

Limits: two issues or pull requests per person per day, and everything runs on a small, free model,
so expect the occasional silly answer. A maintainer reviews every pull request before it is merged.
Please do not post anything secret or personal here; issues are public.

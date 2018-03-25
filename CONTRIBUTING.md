The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”,  “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this  document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

# Styleguides

## Git Commit Messages

The commit message should be structured as follows:

```
<type> <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

1. Commits MUST be prefixed with a *type*, which consists of an emoji, followed by a space. See [Allowed Types](#allowed-types) for allowed emojis.
2. The *type* ✨ `:sparkles:` (or "New Feature") MUST be used when a commit adds a new feature to the application or library (this correlates with MINOR in semantic versioning).
3. The *type* 🐛 `:bug:` (or "Bug Fix") MUST be used when a commit represents a bug fix for the application or library (this correlates with PATCH in semantic versioning).
4. A *subject* MUST immediately follow the *type*. The first letter of the first word MUST be lowercase, unless the first word is a name. You MUST use the imperative, present tense ("change" not "changed" nor "changes"). The *subject* is a short description of the commit, e.g., `🐛 array parsing issue when multiple spaces were contained in string`.
5. A longer commit *body* MAY be provided after the *subject*. The *body* MUST begin one blank line after the *subject*. Just as in the *subject*, you MUST use the imperative, present tense ("change" not "changed" nor "changes"). The *body* SHOULD include the motivation for the change and contrast this with previous behavior.
6. A *footer* MAY be provided after the *body*. The *footer* MUST begin one blank line after the *body*. The *footer* SHOULD contain additional meta-information about the *subject* and/or *body* (such as the issues it fixes, e.g., `Fixes #13, #5`).
7. The text `BREAKING CHANGE` MUST be used when a commit introduces a breaking API change for the application or library (this correlates with MAJOR in semantic versioning). A *breaking change* MUST be indicated at the very beginning of the *body* or *footer* section of a commit. A *breaking change* MUST consist of the uppercase text "BREAKING CHANGE", followed by a colon and a space. A *breaking change* can be part of commits of any type. e.g., the "New Feature" and "Bug Fix" types would all be valid, in addition to any other allowed types.
8. A description MUST be provided after a *breaking change*, describing what has changed about the API, e.g., `BREAKING CHANGE: environment variables now take precedence over config files`.

### Allowed Types

The *type* MUST be one of the following:

Commit Type | PR Name | Emoji
----------- | ------- | -----
Accessibility | accessibility-* | ♿ `:wheelchair:`
Add analytics or tracking code | analytics-* | 📈 `:chart_with_upwards_trend:`
Fix on Android | android-* | 🤖 `:robot:`
Add or update assets | assets-* | 🍱 `:bento:`
Add or update boilerplate files | boilerplate- | 🌱 `:seedling:`
Breaking change | break-* | 💥 `:collision:`
Build | build-* | 🔨 `:hammer:`
Update code due to code review | codereview-* | 👌 `:ok_hand:`
Source code documentation | comment-* | 💡 `:bulb:`
Change config files | config-* | 🔧 `:wrench:`
Add or update content | content-* | 💬 `:speech_balloon:`
Perform database related changes | database-* | 📂 `:open_file_folder:`
Remove code or files | delete-* | 🔥 `:fire:`
Add dependencies | dependency-add | ➕ `:heavy_plus_sign:`
Downgrade dependencies | dependency-downgrade | ⬇️ `:arrow_down:`
Pin dependencies to specific versions | dependency-pin | 📌 `:pushpin:`
Remove dependencies | dependency-remove | ➖ `:heavy_minus_sign:`
Upgrade dependencies | dependency-upgrade | ⬆️ `:arrow_up:`
Deploy (CD) | deploy-* | 🚀 `:rocket:`
Deprecation | deprecation-* | 💩 `:poop:`
Work about Docker | docker-* | 🐳 `:whale:`
Documentation | docs-* | 📝 `:memo:`
Edit or fix typos | edit-* | ✏️ `:pencil2:`
New feature | feat-* | ✨ `:sparkles:`
Bug fix | fix-* | 🐛 `:bug:`
Improve structure / format of the code | format-* | 🎨 `:art:`
Move or rename files | fs-* | 🚚 `:truck:`
Critical hotfix | hotfix-* | 🚑 `:ambulance:`
Initial commit | initial-* | 🎉 `:tada:`
Internal | internal-* | 🏠 `:house:`
Internationalization and localization | intl-* | 🌐 `:globe_with_meridians:`
Fix on iOS | ios-* | 🍏 `:green_apple:`
Add or update license | license-* | 📄 `:page_facing_up:`
Fix on Linux | linux-* | 🐧 `:penguin:`
Add logs | logs-add | 🔊 `:loud_sound:`
Remove logs | logs-remove | 🔇 `:mute:`
Fix on macOS | mac-* | 🍎 `:apple:`
Merge branches | merge-* | 🔀 `:twisted_rightwards_arrows:`
Update compiled files or packages | package-* | 📦 `:package:`
Improving performance | perf-* | ⚡ `:zap:`
Refactor | refactor-* | ♻️ `:recycle:`
Work on responsive design | responsive-* | 📱 `:iphone:`
Revert | revert-* | ⏪ `:rewind:`
Security fix | security-* | 🔒 `:lock:`
Update the UI and style files | style-* | 💄 `:lipstick:`
Add test | test- | ✅ `:white_check_mark`
Tooling (CI) | tooling-* | 👷 `:construction_worker:`
Improving user experience / usability | ux-* | 🚸 `:children_crossing:`
Release / version tags | release-* | 🎈 `:balloon:`
Fix on Windows | windows-* | 🏁 `:checkered_flag:`
Work-in-Progress | wip-* | 🚧 `:construction:`

Adapted from [Gitmoji](https://gitmoji.carloscuesta.me/).

### Revert
If the commit reverts a previous commit, it MUST begin with the *type* ⏪ `:rewind:`, followed by the header of the reverted commit. In the *body* it SHOULD say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Samples
```
📝 update change log to 1.0.0-beta.5
```
```
⬆️ upgrade `react` and `fbjs` to latest

The version in our package.json gets copied to the one we publish, and users need the latest of these packages.
```

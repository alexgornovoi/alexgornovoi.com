---
title: rulepack
id: rulepack
description: CLI for reusing AI agent rules across projects with lockfiles, multi-target builds, and profile snapshots.
github: https://github.com/alexgornovoi/rule-pack
pubDate: 2/27/2026
---

`rulepack` is a CLI for reusing AI agent rules across projects. It pulls rules from git or local sources, locks them for reproducible builds, and outputs rules for Cursor, Copilot, and Codex from the same source of truth.

## Why I built it

- Reuse one shared rules library across many repositories.
- Keep outputs deterministic with lockfiles.
- Build tool-specific outputs from one rules pack.
- Save and reuse local profile snapshots, even if original sources change.

## Core workflow

```bash
rulepack init --name my-project
rulepack deps add https://github.com/your-org/your-rules.git
rulepack deps install
rulepack build
```

## Key capabilities

- Dependency management for `git`, `local`, and `profile` sources.
- Lockfile-based installs (`rulepack.lock.json`) for reproducibility.
- Multi-target builds: `cursor`, `copilot`, `codex`, or `all`.
- Profile lifecycle commands: `save`, `use`, `diff`, `refresh`, and `remove`.
- Human-readable output plus machine mode with `--json`.

## Installation

### Homebrew (macOS/Linux)

```bash
brew tap alexgornovoi/homebrew-tap
brew install --cask rulepack
```

Or without tapping first:

```bash
brew install --cask alexgornovoi/homebrew-tap/rulepack
```

### Ubuntu PPA

```bash
sudo add-apt-repository ppa:alexgornovoi/rulepack
sudo apt update
sudo apt install rulepack
```

## Links

- [Releases](https://github.com/alexgornovoi/rule-pack/releases)
- [Issues](https://github.com/alexgornovoi/rule-pack/issues)

# Information for the developer 👨‍💻

## 🗝 Requeriments

There are some requirements that must be met before you start developing.

### 🚀 Fast way

1. 🐳 **Install Docker**: Download from [Docker's official website](https://www.docker.com/get-started).
2. 🖥️ **Install VSCode**: Download and install from [official page](https://code.visualstudio.com/).
3. 📦 **Run devcontainers**: Configure and run your development containers using Docker and [devcontainers](https://code.visualstudio.com/docs/devcontainers/containers).
4. 🛠️ **Install Recommended Extensions**: Install [recommended extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions) in VSCode to enhance your workflow.

### 📃 Manual way

1. 🗄️ **Node installation**: Download and install Node.js from the official website.
2. 👷 **PNPM installation**: Follow the installation instructions for PNPM.

> **INFO** before installation check which version you have to install in the package.json of the project

## 🔑 Project installation

```bash
pnpm i
```

## 🔧 Package development

```bash
# Recomended
pnpm dev:{{nameOfPackage}}
# or
pnpm {{nameOfPackage}} dev
```

<details>
  <summary><b>Examples:</b></summary>

```bash
# Recomended
pnpm dev:app
# or
pnpm app dev

```

</details>

## 📦 Package build

```bash
# Recomended
pnpm build:{{nameOfPackage}}
# or
pnpm {{nameOfPackage}} build
```

<details>
  <summary><b>Examples:</b></summary>

```bash
# Recomended
pnpm build:app
# or
pnpm app build
```

</details>

## 📊 Init ios and android dev

Prerequisites guide: <https://next--tauri.netlify.app/next/guides/getting-started/prerequisites/macos/#android>

### Android

- Android SDK
- Maybe execute: ```rustup target add aarch64-linux-android x86_64-linux-android armv7-linux-androideabi i686-linux-android```
- Because it is a monorepo, run android init and dev with the workspace command ```pnpm app tauri {more args}```. This is important to get ```runTauriCli``` working in the path ```packages/app/src-tauri/gen/android/buildSrc/src/main/java/com/pigeonposse/super8/kotlin/BuildTask.kt```.

#### IOS

- XCode >=14
- Maybe: ```rustup target add aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim```
- Maybe you have to install ``brew install cocoapods``

## 📊 Update packages version

```bash
pnpm update-version
```

> **INFO**  This command automatically updates the versions of the packages that are selected at the prompt

## 🚢 Push in **MAIN** branch

```bash
pnpm push-main
```

> **INFO**  This command automate git add, commit and push with commintlint

## 🛳 How do I _deploy_, _publish_ or _release_ the necessary packages?

If you want to perform any of these actions you have to first update the necessary packages with ```pnpm update-version``` and then push with ```pnpm push-main```.

Once the push is done, the _Github actions_ will execute it automatically.

> **INFO** This command automate git add, commit and push with commintlint

## ✅ Add or complete tasks

All tasks including project ideas can be found by running the following command:

```bash
pnpm todo
```

you can also see the list of everyone in this [section](<http://localhost:5173/todo/v1>)

---

You are ready to develop **super8**! 🐦💜

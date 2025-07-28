---
title: Installing JavaScript
date: "2024-10-14"
description: This post will detail how to install JavaScript on your (mac) computer.
postOrder: 1
tags: ["JavaScript", "Basics", "Setup"]
skillLevel: +
---

JavaScript is an amazing language that runs in both the browser and the server.  Wondering what you can do with JavaScript?  With JS you can:

1. Build websites and user interfaces
2. Create webservers
3. Write scripts
4. Fetch data from databases using an ORM
5. And a lot more!

In order to run JavaScript on your computer, you'll want to install NodeJS which is a runtime environment for JavaScript.  This will allow you to run JavaScript files outside of the browser.

### Option 1 - Install with Homebrew

[Homebrew](https://brew.sh/) is a package manager for macOS and Linux that can be installed through the command line. If you are wondering how to use the command line, check out this guide on mac's [terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac).

Once you've opened your terminal, paste in the following and hit enter.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After homebrew is finished installing, run the following command to verify that the installation was successful.

```bash
brew -v
```

If successful you should see the version of homebrew outputted in your terminal, similar to the below.  Note that your version may have a different version number and that's fine!

```
Homebrew 3.1.11
```

Once homebrew is installed you can install NodeJS by using the following command.

```bash
brew install node
```

Now you should be able to run the following command and see the following output. Again the version number isn't super important here although you'll want to verify you are using the right version before you begin working on anything important.

```bash
node -v
```

```
v22.17.0
```

### Option 2 - Download directly

If you don't want to install Homebrew, you can download JavaScript directly from the source, [nodejs.org](https://nodejs.org/en).  Just click on the Download Node.js (LTS) button and run the installer.  Once done the ```node -v``` command should show you the version that you just installed.

Congrats, you just installed JavaScript on your computer!
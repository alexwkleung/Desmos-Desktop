# Desmos Desktop

![](https://img.shields.io/badge/Platforms-MacOS-lightgrey) ![](https://img.shields.io/badge/Architecture-x64%20%7C%20arm64-lightgrey)

![](img/example.png)

⚠️ **This is not an official desktop app for Desmos.**

This is a basic desktop app that wraps around the official remote hosted [Desmos API](https://www.desmos.com/api/v1.7/docs). You will need internet access since the API is not installed locally.

Enjoy using Desmos as a standalone desktop app. There is virtually no difference between this and the website since they both use the same API to power the graphing calculator. 

**Created with:**

- Desmos API 
- Electron 

# Install (Direct)

Go to releases and install the latest version for your architecture (x64 or arm64).

# Install (Manual)

Clone the repository 

```bash 
git clone <SSH/HTTPS>
```

Install npm dependencies 

```bash
npm install 
```

Run the build step

```bash
make build 
#or 
npm run build
```

Package the app (x64)

```bash
make package 
#or 
npm run package
```

Package the app (arm64)

```bash
make package-arm
#or 
npm run package-arm
```

Open the `.dmg` and drag the `.app` to the Applications folder.

![](img/dmg.png)

# Development

Clone the repository 

```bash 
git clone <SSH/HTTPS>
```

Install npm dependencies 

```bash
npm install 
```

Run the build step

```bash
make build 
#or 
npm run build
```

Run Electron on root

```bash
make electron
#or
npm run electron
```

Package the app for production (x64)

```bash
make package
#or
npm run package
```

Package the app for production (arm64)

```bash
make package-arm
#or 
npm run package-arm
```


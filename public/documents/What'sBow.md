---
title : What's Bow?
author: AImixAE Mocha
email : AImixAE@outlook.com
date  : 2025/4/13 13:20
---

# What's Bow?

The package file suffix used by **Soup** is **bow**_(much like pacman's package)_, and **bow** is compressed with `tar.xz` to make the bow file have a smaller size. Making a bow is as simple as putting the included files _(e.g. binaries, documents, etc.)_ into `pkg/` and writing the package information in `soup/info.toml` file.

So a normal bow package is a lot like this structure:

```txt
normal.bow
|- pkg
|  |- bin
|  |  |- helloworld
|- soup
|  |- info.toml
```

The files of this bow:

```toml
# soup/info.toml
# .rw-r--r--

[pkg]
name = "Normal Bow" # The name of this package
version = "1.0.0" # The version of this package
release = "1" # The updated codename for this bow (same as pacman's package)
description = "A normal bow" # The description of this package
license = "" # The license of this package
maintainer = {"name": "", "email": ""} # The maintainer of this package
arch = ["x86_64"] # The arch of this package
url = "" # The url of this package

[depends]
depends = ["bash", "coreutils"] # Must depend
optdepends = [] # Optional dependencies
```

```sh
# pkg/bin/helloworld
# .rwxr-xr-x

# !/bin/sh

echo "Hello, world!"
```

And you can use `soup install "normal.bow"` to install this bow.

## How to make a bow?

You can use `soup create <Project Path>` to make a bow. The command will automatically generate a bow project for you. When you chdir to the project path, you can also use `soup make` to make this bow.

```sh
soup create normal # Create a bow project named normal
cd normal # Chdir to the project path
soup make # Make the bow
```

The structure of the project:

```txt
normal
|- soup
|  |- info.toml
|  |- soupingore
|- pkg
|- src
   |- Makefile
```

The files of the project:

```toml
# soup/info.toml
# .rw-r--r--

[pkg]
name = "normal" # The name of this package
version = "0.0.0" # The version of this package
release = "1" # The updated codename for this bow (same as pacman's package)
description = "A normal bow" # The description of this package
license = "" # The license of this package
maintainer = {"name": "", "email": ""} # The maintainer of this package
arch = ["x86_64"] # The arch of this package
url = "" # The url of this package

[depends]
depends = [] # Must depend
optdepends = [] # Optional dependencies
makedepends = [] # Make dependencies

[build]
source = [] # Source files
target = ["all"] # Target files (For Makefile)
```

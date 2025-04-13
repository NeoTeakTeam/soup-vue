<script setup lang="ts"></script>

<template>
    <h1>Soup</h1>
    <h3><i>- An easy package manager -</i></h3>

    <div class="context">
        <article>
            <b>Soup</b> is a simple and fast native package manager tool that is fast and light for
            creating, installing, updating, uninstalling, and more.
        </article>
        <hr />
        <article>
            The package file suffix used by <b>Soup</b> is <b>bow</b>
            <i>(much like pacman's package)</i>, and <b>bow</b> is compressed with
            <code>tar.xz</code> to make the bow file have a smaller size. Making a bow is as simple
            as putting the included files <i>(e.g. binaries, documents, etc.)</i> into
            <code>pkg/</code> and writing the package information in
            <code>soup/info.toml</code> file.
            <br />
            So a normal bow package is a lot like this structure:
            <article class="code">
                normal.bow<br />
                |- pkg<br />
                |&nbsp;&nbsp;|- bin<br />
                |&nbsp;&nbsp;|&nbsp;&nbsp;|- helloworld<br />
                |- soup<br />
                |&nbsp;&nbsp;|- info.toml
            </article>
            <br />
            The files of this bow:
            <article class="code">
                <i
                    >/* soup/info.toml<br />
                    &nbsp;&nbsp;&nbsp; .rw-r--r-- */</i
                ><br />
                [pkg]<br />
                name = "Normal Bow" <i># The name of this package</i><br />
                version = "1.0.0" <i># The version of this package</i><br />
                release = "1"
                <i># The updated codename for this bow (same as pacman's package)</i><br />
                <br />
                [depends]<br />
                depends = ["bash", "coreutils"] <i># Must depend</i><br />
                optdepends = [] <i># Optional dependencies</i>
                <br />
                <br />
                <i
                    >/* pkg/bin/helloworld<br />
                    &nbsp;&nbsp; .rwxr-xr-x */</i
                ><br />
                <i>#!/bin/sh</i><br />
                <br />
                echo "Hello, world!"<br />
            </article>
            <br />
            See the documentation for more information.
        </article>
    </div>
</template>

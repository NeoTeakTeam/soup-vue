<script setup lang="ts">
import { ref } from "vue";
import { getMarkdownInfo, frontMatterJsonDefault } from "@/assets/docLoader";

const mdFilePath = ref("/documents/DocumentHome.md");

const mdContext = ref({ markdownContent: "", frontMatterJson: frontMatterJsonDefault });

const updateMdContext = async () => {
    const result = await getMarkdownInfo(mdFilePath.value);
    mdContext.value = result;
};

const handleMdClick = (event: any) => {
    const target = event.target;
    event.preventDefault();

    if (target != null && target.tagName != null) {
        if (target.tagName === "A") {
            event.preventDefault();
            const newUrl = target.getAttribute("href");
            if (newUrl && newUrl.startsWith("/documents/") && newUrl.endsWith(".md")) {
                mdFilePath.value = newUrl;
                updateMdContext();
            } else {
                window.location.href = newUrl;
                // window.open(newUrl, "_blank");
            }
        }
    }
};

updateMdContext();
</script>

<template>
    <h1>Soup Document Center</h1>
    <p>
        <i>- All relevant documentation about Soup and Bow is included -</i>
    </p>

    <div class="context">
        <p>Controls:</p>
        <button
            @click="
                mdFilePath = '/documents/DocumentHome.md';
                updateMdContext();
            "
        >
            Go to Home
        </button>
    </div>

    <br />

    <div class="context">
        <h2>{{ mdContext.frontMatterJson.title }}</h2>
        Author: {{ mdContext.frontMatterJson.author }} <i>{{ mdContext.frontMatterJson.email }}</i
        ><br />
        Latest Update Time: {{ mdContext.frontMatterJson.date }}
    </div>

    <br />

    <v-md-preview
        id="docMd"
        class="context"
        :text="mdContext.markdownContent ? mdContext.markdownContent : 'Loading...'"
        @click="handleMdClick"
    ></v-md-preview>
</template>

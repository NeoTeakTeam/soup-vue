import yaml from "js-yaml";

const frontMatterRegex = /^(---\s*[\w\W]+?\s*---)([\w\W]*)/m;
export const frontMatterJsonDefault = { title: "", author: "", email: "", date: "" };

export const getMarkdownInfo = async (filepath: string) => {
    const response = await fetch(filepath);
    const fullMd = await response.text();

    console.log({ response, fullMd });

    const match = fullMd.match(frontMatterRegex);

    let frontMatterJson = frontMatterJsonDefault;
    if (match) {
        const frontMatterYaml = match[1].replace(/^---|---$/gm, ""); // 移除开头和结尾的---
        frontMatterJson = yaml.load(frontMatterYaml); // 使用js-yaml解析YAML
    }

    const markdownContent = match ? match[2] : fullMd;

    return { frontMatterJson, markdownContent };
};

import { getPlaiceholder } from "plaiceholder"
import fs from "node:fs/promises";

export default async function blur(srcs) {
    const promises = srcs.map(async src => {
        try {
            const buffer = await fs.readFile(`./public/${src}`);
            const { base64 } = await getPlaiceholder(buffer);
            return base64;
        } catch (error) {
            console.error(`Failed to generate blurDataURL for ${src}:`, error);
            return null;
        }
    });

    const base64Strings = await Promise.all(promises);

    return base64Strings;
}
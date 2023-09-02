export type ReferenceHandler = (reference: string, alternative?: string) => string;

export abstract class MathCodeMarkdown {
    public static replaceReferences(text: string, handler: ReferenceHandler): string {
        let data = text;
        let replaced = true;
        while (replaced) {
            const matched = /(\[\[)([^\[\]]+)(\]\])/gm.exec(data);
            if (matched) {
                const [reference, alternative] = matched[2].split('|').map((data) => data.trim());
                data = data.slice(0, matched.index) + handler(reference, alternative) + data.slice(matched.index + matched[2].length + 4);
                replaced = true;
            }
            else {
                replaced = false;
            }
        }
        return data;
    }
}


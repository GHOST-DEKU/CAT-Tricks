export interface Trick {
    dateAdded: string;
    section: "Vocab" | "Quant" | "Grammar" | string;
    title: string;
    tags: string[];
    module: string;
    topic?: string | null;
    whatItIs?: string | null;
    whereToUse?: string | null;
    logic?: string | null;
    formula?: string | null;
    example?: string | null;
    icon1?: string | null;
    icon2?: string | null;
    icon3?: string | null;
    icon4?: string | null;
    icon5?: string | null;
    rootGroup?: string | null;
    similarTricks?: string[] | null;
}

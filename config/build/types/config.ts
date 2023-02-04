export type BuildMode = 'production' | 'development' //заменить на продакшен

export interface BuildPaths {
    entry : string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port : number;
}

export interface BuildOptions{
    mode: BuildMode;
    paths: BuildPaths;
    isDev : boolean;
    port: number
}
export type TTodoFunc = (todoItem: TTodoItemContent) => void;

export type TTodoItemContent = {
    title: string;
    done: boolean;
}

export type TTodoItem = {
    key: number; 
    title: string;
    done: boolean;
}

export type TTodoList = Array<TTodoItem>;

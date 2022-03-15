export type Movie = { //Criando e exportando o tipo Movie que possuirá os elementos presentes no filme, semelhante a criação de um objeto
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
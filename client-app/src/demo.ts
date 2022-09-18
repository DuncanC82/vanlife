export interface Duck {
    name: string;
    numlegs: number;
    makesound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'huey',
    numlegs: 2,
    makesound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: 'chuey',
    numlegs: 2,
    makesound: (sound: any) => console.log(sound)
}

duck1.makesound!('quack');

export const ducks = [duck1, duck2]
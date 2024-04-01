import {create} from "zustand";

const useStore = create((set)=> ({
    randomNumbers: [ ],
    addRandomNumber: (randomNumber:any) => {
        set((state:any)=> ({randomNumbers: [...state.randomNumbers, randomNumber]}));
    }
}));

export default useStore;
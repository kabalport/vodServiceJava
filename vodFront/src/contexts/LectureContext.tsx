import React, { createContext, useState } from 'react';

interface Lecture {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
}

const LectureContext = createContext<{
    lectures: Lecture[];
    setLectures: React.Dispatch<React.SetStateAction<Lecture[]>>;
}>({
    lectures: [],
    setLectures: () => {},
});

interface LectureProviderProps {
    children: React.ReactNode;
}

export const LectureProvider = ({ children }: LectureProviderProps) => {
    const [lectures, setLectures] = useState<Lecture[]>([]);

    return (
        <LectureContext.Provider value={{ lectures, setLectures }}>
            {children}
        </LectureContext.Provider>
    );
};


export default LectureContext;

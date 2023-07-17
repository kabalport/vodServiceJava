// LectureData.ts
export interface Lecture {
    id: number;
    title: string;
    instructor: string;
    description: string;

}

export const lectures: Lecture[] = [
    { id: 1, title: "Introduction to Real Estate", instructor: "John Doe", description: "This is an introductory course on real estate." },
    { id: 2, title: "Advanced Real Estate Strategies", instructor: "Jane Smith", description: "Learn advanced strategies in real estate." },
    // Add more lectures as needed
];

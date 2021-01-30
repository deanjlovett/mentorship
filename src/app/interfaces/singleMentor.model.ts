export interface SingleMentor {
    userId: number;
    name: string;
    role: string;
    onboarding: boolean;
    matched: boolean;
    training: boolean;
    schedule: boolean;
    notes: boolean;
    currentStreak: number;
    longestStreak: number;
    rating: number;
    isFinished: boolean;
    jobTitle: string;
    company: string;
}
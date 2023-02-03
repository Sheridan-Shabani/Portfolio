type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Social extends Base {
    title: string;
    url: string;
}

interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: "reference";
    }
}

interface Technology extends Base {
    image: Image;
    title: string;
}

interface Skill extends Base {
    image: Image;
    title: string;
}

interface Project extends Base {
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

interface Experience extends Base {
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentWork: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}
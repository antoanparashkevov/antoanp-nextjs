type DictionaryEntry = {
    homeHeader: string
    homeContent: string
}

export const dictionary: Record<string, DictionaryEntry> = {
    "en": {
        homeHeader: "Welcome to the 404 page",
        homeContent: "This is a 404 page. You can go back to the home page by clicking the button below."
    },
    "bg": {
        homeHeader: "Страната не е намерена",
        homeContent: "Това е 404 страница. Може да върнете към старата страницa"
    }
}
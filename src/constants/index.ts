import {
    BenefitFeature1,
    BenefitFeature2,
    BenefitFeature3,
    BenefitFeature4,
    BenefitFeature5,
    BenefitFeature6,
    TestimonialProfils,
    Twitter,
    Book,
    Telegram,
    // Discord,
    DiscordComingSoon1
} from "../assets"


export const LANGUAGE = [
    { label: "English", code: "en" },
    { label: "Chinese", code: "zh" },
    { label: "Spanish", code: "es" },
    { label: "Russian", code: "ru" },
    { label: "Korean", code: "ko" },
    { label: "Japanese", code: "ja" },

]

export const navLinks = (t: (key: string) => string) => [
    {
        id: "home",
        tittle: t("NavbarTitle1"),
        link: "/#home"
    },
    {
        id: "services",
        tittle: t("NavbarTitle2"),
        link: "/#services"
    },
    {
        id: "about us",
        tittle: t("NavbarTitle3"),
        link: "/#about%20us"
    },
]

export const stats = (t: (key: string) => string) => [
    {
        id: "community",
        tittle: t("Count1"),
        count: 0,
    },
    {
        id: "transactions",
        tittle: t("Count2"),
        count: 0,
    },
    {
        id: "members",
        tittle: t("Count3"),
        count: 0,
    },
]

export const benefits = (t: (key: string) => string) => [
    {
        id: "benefit1",
        tittle: t("BenfitTitle1"),
        description: t("BenefitDesc1"),
        link: "https://www.google.com"
    },
    {
        id: "benefit2",
        tittle: t("BenfitTitle2"),
        description: t("BenefitDesc2"),
        link: "https://www.google.com"
    },
    {
        id: "benefit3",
        tittle: t("BenfitTitle3"),
        description: t("BenefitDesc3"),
        link: "https://www.google.com"
    },
    {
        id: "benefit4",
        tittle: t("BenfitTitle4"),
        description: t("BenefitDesc4"),
        link: "https://www.google.com"
    },
]

export const featureBenefits = (t: (key: string) => string) => [
    {
        id: "feature1",
        title: t("FeatureTitle1"),
        description: t("FeatureDesc1"),
        image: BenefitFeature1,
        link: "https://forgebot.gitbook.io"
    },
    {
        id: "feature6",
        title: t("FeatureTitle6"),
        description: t("FeatureDesc6"),
        image: BenefitFeature6,
        link: "https://forgebot.gitbook.io"
    },
    {
        id: "feature3",
        title: t("FeatureTitle3"),
        description: t("FeatureDesc3"),
        image: BenefitFeature3,
        link: "https://forgebot.gitbook.io"
    },
    {
        id: "feature4",
        title: t("FeatureTitle4"),
        description: t("FeatureDesc4"),
        image: BenefitFeature4,
        link: "https://forgebot.gitbook.io"
    },
    {
        id: "feature5",
        title: t("FeatureTitle5"),
        description: t("FeatureDesc5"),
        image: BenefitFeature5,
        link: "https://forgebot.gitbook.io"
    },
    {
        id: "feature2",
        title: t("FeatureTitle2"),
        description: t("FeatureDesc2"),
        image: BenefitFeature2,
        link: "https://forgebot.gitbook.io"
    },
]

export const testimonials = [
    {
        id: "testimonial1",
        name: "John Doe",
        username: "@johndoe",
        description: "I have been using ForgeBot for a while now and I must say it has been a great experience. I have been able to get the best prices for my trades and the UI is very easy to use.",
        image: TestimonialProfils,
        link: "https://www.google.com"
    },
    {
        id: "testimonial2",
        name: "Jane Doe",
        username: "@janedoe",
        description: "I have been using ForgeBot for a while now and I must say it has been a great experience. I have been able to get the best prices for my trades and the UI is very easy to use.",
        image: TestimonialProfils,
        link: "https://www.google.com"
    },
    {
        id: "testimonial3",
        name: "John Doe",
        username: "@johndoe",
        description: "I have been using ForgeBot for a while now and I must say it has been a great experience. I have been able to get the best prices for my trades and the UI is very easy to use.",
        image: TestimonialProfils,
        link: "https://www.google.com"
    },
    {
        id: "testimonial4",
        name: "Jane Doe",
        username: "@janedoe",
        description: "I have been using ForgeBot for a while now and I must say it has been a great experience. I have been able to get the best prices for my trades and the UI is very easy to use.",
        image: TestimonialProfils,
        link: "https://www.google.com"
    },
    {
        id: "testimonial5",
        name: "John Doe",
        username: "@johndoe",
        description: "I have been using ForgeBot for a while now and I must say it has been a great experience. I have been able to get the best prices for my trades and the UI is very easy to use.",
        image: TestimonialProfils,
        link: "https://www.google.com"
    },
    {
        id: "testimonial6",
        name: "Jane Doe",
        username: "@janedoe",
        description: "I have been using ForgeBot for a while now and I must say it has been a great experience. I have been able to get the best prices for my trades and the UI is very easy to use.",
        image: TestimonialProfils,
        link: "https://www.google.com"
    },
]

export const socialMediaLinks = [
    {
        id: "twitter",
        image: Twitter,
        link: "https://twitter.com/ForgeBot_io"
    },
    {
        id: "Docs",
        image: Book,
        link: "https://forgebot.gitbook.io"
    },
    {
        id: "telegram",
        image: Telegram,
        link: "https://t.me/forge_avax_bot?start=DEFAULT"
    },
    {
        id: "discord",
        image: DiscordComingSoon1,
        link: "#"
    },
]
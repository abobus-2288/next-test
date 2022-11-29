export type Contact = {
    id: number
    name: string
    email: string
}

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export interface IContactInfo extends Contact {
    address: {
        street: string
        city: string
    }
    phone: string
    website: string
}
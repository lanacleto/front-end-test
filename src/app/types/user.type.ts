export type User = {
    id?: number,
    email: string,
    name: string,
    phone: string,
    birthDate: string,
    createdAt: string,
    updatedAt: string
}

export type GetUserResponse = {
    results: User[],
    page: number,
    limit: number,
    count: number
}

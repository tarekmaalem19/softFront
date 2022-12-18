export declare class Credentials {
    id?: number;
    login?: string;
    password?: string;
    constructor(id?: number, 
        email?: string, 
        password?: string);
}

export declare class Register {
    email ?: string;
    password?: string;
    username?: string;
    confirmPassword?: string;
    constructor(id?: number, 
        email?: string, 
        fullName?: string,
        password?: string,
        phone?: string,
        username?: string,
        confirmPassword?: string);
}


export declare class User {
    id?: number;
    username?: string;
    email?: string;
    roles?: [];
    token?: string;
    constructor(id?: number,
        username?: string, 
        email?: string, 
        roles?: [],
        token?: string);
}

export enum Roles { 
    Role_user = 'ROLE_USER', 
    Role_admin = 'ROLE_ADMIN', 
}
import { Request, Response } from 'express'; // 5
import { RegisterUserDto, AuthRepository } from './../../domain'; // 1




export class AuthController { // 1

    constructor(
        private readonly authRepository: AuthRepository //9
    ){} // 2

    registerUser = (req: Request, res: Response) => { // 4
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if ( error ) return res.status(400).json({ error });

        res.json(registerUserDto) //10
    } // 3

    loginUser =  (req: Request, res: Response) => { // 7
        res.json('loginUser controller') // 8
    } // 6

}
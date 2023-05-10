import { body } from "express-validator";

export const registerValidator = [
    body('email', 'неверная почта').isEmail(),
    body('password', 'слишком короткий').isLength({ min: 5 }),
    body('myWork', 'слишком короткий').isLength({ min: 5 }),
    body('fullName', 'слишком короткий').isLength({ min: 3 }),
    body('avatarUrl', 'неверная ссылка').optional().isURL(),
]

export const loginValidator = [
    body('email', 'неверная почта').isEmail(),
    body('password', 'слишком короткий').isLength({ min: 5 }),
]

export const postCreateValidator = [
    body('title', 'слишком коротко').isLength({ min: 3 }).isString(),
    body('description', 'слишком коротко').isLength({ min: 5 }).isString(),
    body('imageUrl', 'неверная ссылка').isURL(),
    body('price', 'введите число').optional().isString(),
]
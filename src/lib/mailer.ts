import nodemailer from "nodemailer"
import { assertValue } from "./utils"

export const email = assertValue(
    process.env.EMAIL,
    'Missing environment variable: EMAIL'
)

export const emailPassword = assertValue(
    process.env.EMAIL_PASSWORD,
    'Missing environment variable: EMAIL_PASSWORD'
)

export const emailTo = assertValue(
    process.env.EMAILTO,
    'Missing environment variable: EMAILTO'
)

export const transporter = nodemailer.createTransport({
    "service": "gmail",
    auth: {
        user: email,
        pass: emailPassword
    }
})

export const mailOptions = {
    from: email,
    to: emailTo
}
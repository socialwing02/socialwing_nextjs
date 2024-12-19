// pages/api/sendEmail.ts
import nodemailer from "nodemailer";
import { Sequelize, DataTypes, Model, Optional, Op } from "sequelize";
import { NextApiRequest, NextApiResponse } from "next";

// Define Types for User
interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  phone_number: string;
  bussines_name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize("postgres://postgres:1234@localhost/Christal", {
  dialect: "postgres",
});

// Define the Users model
class Users
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public phone_number!: string;
  public bussines_name!: string;
}

Users.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone_number: { type: DataTypes.STRING, allowNull: false, unique: true },
    bussines_name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

// Email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "socialwing02@gmail.com",
    pass: "qhpt uslr uwfv dgzw",
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, bussines_name } = req.body;

    // Validate input
    if (!name || !email || !phone || !bussines_name) {
      return res.status(400).json({
        error: "Missing required fields: name, email, phone, bussines_name",
      });
    }

    // Check if phone number, email, or business name already exists in the database
    await sequelize.sync();
    const existingUser = await Users.findOne({
      where: {
        [Op.or]: [{ email }, { phone_number: phone }, { bussines_name }],
      },
    });

    if (existingUser) {
      return res.status(400).json({
        error: "Duplicate phone number, email, or business name detected",
      });
    }

    // Save user to the database
    const newUser = await Users.create({
      name,
      email,
      phone_number: phone,
      bussines_name,
    });

    // Prepare email content
    const htmlUser = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          .email-container { max-width: 600px; margin: auto; padding: 20px; }
          h1 { color: #1a73e8; }
          .footer { text-align: center; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <h1>Dear ${name},</h1>
          <p>Thank you for registering with Social Wynk!</p>
          <p>Here are your details:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Business Name:</strong> ${bussines_name}</li>
          </ul>
          <p>Best regards,</p>
          <p>The Social Wing Team</p>
        </div>
      </body>
      </html>
    `;

    const textOwner = `New registration details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Name: ${bussines_name}`;

    // Send emails
    await Promise.all([
      transporter.sendMail({
        from: "socialwing02@gmail.com",
        to: email,
        subject: "Registration Confirmation",
        html: htmlUser,
      }),
      transporter.sendMail({
        from: "socialwing02@gmail.com",
        to: "owner_email@gmail.com", // Replace with owner's email
        subject: "New Registration Alert",
        text: textOwner,
      }),
    ]);

    return res
      .status(200)
      .json({ message: "Emails sent and user registered successfully!" });
  } catch (error) {
    console.error("Error:", error);

    // Explicitly handle the type of 'error' as unknown
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}

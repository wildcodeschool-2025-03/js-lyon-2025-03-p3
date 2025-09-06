import cookieParser from "cookie-parser";
import express, { type RequestHandler } from "express";
import jwt from "jsonwebtoken";
import request from "supertest";
import userController from "../src/modules/user/userActions";
import userRepository from "../src/modules/user/userRepository";

// Mock des modules
jest.mock("jsonwebtoken");
jest.mock("../src/modules/user/userRepository");

const app = express();
app.use(cookieParser());
app.use(express.json());

// Cast any pour éviter l'erreur TS
app.get("/user", userController.read as RequestHandler);

describe("User Controller - read", () => {
  beforeEach(() => {
    // Reset des mocks pour être sûr qu'aucun ancien mock ne traîne
    jest.resetAllMocks();

    // Mock par défaut pour chaque test
    (jwt.verify as jest.Mock).mockReturnValue({ sub: 42 });
    (userRepository.read as jest.Mock).mockResolvedValue({
      is_admin: true,
      firstname: "Alice",
      lastname: "Doe",
      email: "alice@example.com",
    });
  });

  it("renvoie les infos utilisateur si le token est valide", async () => {
    const res = await request(app)
      .get("/user")
      .set("Cookie", ["auth_token=fake-token"]);

    expect(res.status).toBe(201);
    expect(res.body.user.firstname).toBe("Alice");
    expect(res.body.user.isAdmin).toBe(true);
  });

  it("renvoie 404 si l'utilisateur n'existe pas", async () => {
    // On override le mock pour ce test uniquement
    (userRepository.read as jest.Mock).mockResolvedValue(null);

    const res = await request(app)
      .get("/user")
      .set("Cookie", ["auth_token=fake-token"]);

    expect(res.status).toBe(404);
  });

  it("renvoie 500 si jwt.verify lève une erreur", async () => {
    // On override le mock pour ce test uniquement
    (jwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error("Token invalide");
    });

    const res = await request(app)
      .get("/user")
      .set("Cookie", ["auth_token=bad-token"]);

    expect(res.status).toBe(500);
  });
});

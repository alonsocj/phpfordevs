import { Pool } from "pg";
import { CONFIG } from "./config";

export const conexion = new Pool(CONFIG)
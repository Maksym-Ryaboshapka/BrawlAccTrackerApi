import {Request, Response} from "express";

type RouteHandler = (req: Request, res: Response) => void;
export default RouteHandler;
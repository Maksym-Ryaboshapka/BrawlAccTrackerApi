import {Request, Response} from "express";

type RouteType = (req: Request, res: Response) => void;
export default RouteType;
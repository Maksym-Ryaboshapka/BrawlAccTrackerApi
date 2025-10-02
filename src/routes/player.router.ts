import {Router} from "express";
import RouteHandler from "../types/route.type";
import {getPlayer} from "../services/player.service";

const router = Router();
export default router;

/**
 * @openapi
 * /players/{id}:
 *   get:
 *     summary: Get player by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the player
 *     responses:
 *       200:
 *         description: Player found
 *       404:
 *         description: Player not found
 */

router.get("/:id", (async (req, res) => {
  const {id} = req.params;

  try {
    const player = await getPlayer(id);
    res.status(200).json(player);
  } catch (err) {
    res.status(404).json(err);
  }
}) as RouteHandler);